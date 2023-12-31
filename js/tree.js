// JavaScript code to dynamically create a tree of boxes

function removeErrors(inputString) {
    output = inputString.replace(',c','');
    output = output.replace(',b','');
    return output;
}

fetch("https://crow.resilientdb.com/v1/transactions")
    .then((response) => response.text())
    .then((text) => removeErrors(text))
    .then((jsonFile) => {
        var number_of_databoxes = 0;
        var listboxes = [];

        jsonDict = create_dictionary_of_transactions(jsonFile);

        function create_dictionary_of_transactions(jsonFile) {
            var dict = {};
            jsonFile = JSON.parse(jsonFile);
            for (const jsonObj of jsonFile) {
                try {
                    dict[get_sender(jsonObj)] = [];
                } catch (error) {}
            }

            for (const jsonObj of jsonFile) {
                try {
                    //console.log(jsonObj);
                    dict[get_sender(jsonObj)].push(jsonObj);
                } catch (error) {}
            }

            for (const [key, value] of Object.entries(dict)) {
                dict[key].sort((a,b) => get_time(b) - get_time(a));
                console.log(key);
            }

            return dict;
        }

        class DataboxSet {
            constructor(parent) {
                this.parent = parent;
                this.databoxID = "databoxLayer" + ++number_of_databoxes;
                var databox = document.createElement("div");
                databox.className = "databox";
                databox.id = this.databoxID

                // Set position relative to the parent box
                //databox.style.top = parent.offsetTop + -20 + "px";
                //databox.style.borderTopColor = parent.style.borderBottomColor;

                document.body.appendChild(databox);
                
                listboxes.push(this);
                return this;
            }

            createToolTip(jsonObj) {
                var tooltip = document.createElement("span");
                tooltip.className = "tooltiptext";
                tooltip.append("Date: " + String(get_date(get_time(jsonObj))) + "\r\n" +
                                "Age: " + get_age(get_time(jsonObj)) + "\r\n" +
                                "Transaction ID: " + "\r\n" + get_id(jsonObj) + "\r\n" +
                                "Sender ID: " + get_sender(jsonObj) + "\r\n" +
                                "Recipient ID: " + get_recipient(jsonObj) + "\r\n" +
                                "Amount: " + get_amount(jsonObj)
                ); 

                return tooltip;
            }


            createBox(parent, jsonObj) {
                var box = document.createElement("div");
                box.className = "box";
                box.name = get_recipient(jsonObj);
                box.id = parent.style.borderBottomColor.toString().replace(/\s/g, '');
                box.setAttribute("date", get_time(jsonObj));
                var databoxID = this.databoxID;
                box.addEventListener("click", function(e) {
                if (this.className.includes("clicked")) {
                    this.className = "box";
                    remove_children(this.style.borderBottomColor.toString().replace(/\s/g, ''));
                } else {
                    if (create_box_for_new_children(this, databoxID))
                        this.className += " clicked";
                }
                }, false);
                box.textContent = "Age: " + get_age(get_time(jsonObj)) + "\r\n" +
                                "Transaction ID: " + get_id(jsonObj).slice(0, 11) + "...\r\n" +
                                "Sender ID: " + get_sender(jsonObj).slice(0, 13) + "...\r\n" +
                                "Recipient ID: " + get_recipient(jsonObj).slice(0, 11) + "...\r\n" +
                                "Amount: " + get_amount(jsonObj);

                box.style.borderTopColor = parent.style.borderBottomColor;
                box.style.borderBottomColor = randColor();

                box.appendChild(this.createToolTip(jsonObj));

                document.getElementById(this.databoxID).appendChild(box);

                return box;
            }
        }

        const randColor = () =>  {
            return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        }

        function get_date(utcSeconds) {
            var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
            d.setUTCSeconds(utcSeconds);
            return d;
        }

        function get_age(utcSeconds) {
            if (utcSeconds == "N/A") return "N/A";
            var difference = Math.floor(Date.now() / 1000) - utcSeconds;
            if (difference < 0)
                return "N/A";
            if (difference < 60)
                return difference + " seconds ago";
            if (difference < 3600)
                return Math.floor(difference/60) + " minutes ago";
            if (difference < 86400)
                return Math.floor(difference/3600) + " hours ago";
            if (difference < (86400*7))
                return Math.floor(difference/86400) + " days ago";
            if (difference < (86400*28))
                return Math.floor(difference/(86400*7)) + " weeks ago";
            if (difference < (86400*356))
                return Math.floor(difference/(86400*28)) + " months ago";
            return Math.floor(difference/(86400*356)) + " years ago";
        }

        function create_box_for_new_children(parent, databoxID) {
            var idNum = parseInt(databoxID.slice(12));
            if (idNum < number_of_databoxes) {
                return add_wallet_transactions(parent, listboxes[idNum]);
            } else {
                const child = new DataboxSet(parent);
                return add_wallet_transactions(parent, child);
            }
        }

        var currentTimeLog = 0;
        function add_wallet_transactions(parent, databox) {
            if (!(parent.name in jsonDict)) return false;
            var count_of_items = 0;
            for (const itemjson of jsonDict[parent.name]) {
                if (get_time(itemjson) > parent.getAttribute("date") || 
                    parent.getAttribute("date") == "N/A") {
                        databox.createBox(parent, itemjson);
                        count_of_items += 1;
                    }
            }
            if (count_of_items > 0) return true;
            return false;
        }

        function remove_children(parentColor) {
            var element =  document.getElementById(parentColor);
            while (typeof(element) != 'undefined' && element != null)
            {
                remove_children(element.style.borderBottomColor.toString().replace(/\s/g, ''));
                element.remove();
                element = document.getElementById(parentColor);
            }
        }

        // Create child boxes
        var parent = document.getElementById("root");
        var protocol = window.location.search.substring(1);
        if (protocol == "") {
            protocol = '7G4FpYAT2hh1jwgUqq2bwv49QfCyQEQb3PqAiZcP4X5Z';
        }
        parent.name = protocol;
        parent.setAttribute("date", 100);
        parent.append("WalletID: " + protocol.slice(0,13) + "...");
        const child1 = new DataboxSet(document.getElementById("root"), "databoxLayer1");
        add_wallet_transactions(parent, child1);
    });