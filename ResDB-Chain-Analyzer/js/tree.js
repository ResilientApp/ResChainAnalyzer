// JavaScript code to dynamically create a tree of boxes
var number_of_databoxes = 0;
var box_numbers = 0;
var listboxes = [];

jsonDict = create_dictionary_of_transactions(jsonFile);

function create_dictionary_of_transactions(jsonFile) {
    var dict = {};
    jsonFile = JSON.parse(jsonFile);
    for (const jsonObj of jsonFile) {
        try {
            dict[jsonObj.inputs.sender] = [];
        } catch (error) {}
    }

    for (const jsonObj of jsonFile) {
        try {
            dict[jsonObj.inputs.sender].push(jsonObj);
        } catch (error) {}
    }

    for (const [key, value] of Object.entries(dict)) {
        dict[key].sort((a,b) => b.metadata.time - a.metadata.time);
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
        tooltip.append("Date: " + String(get_date(jsonObj.metadata.time)) + "\r\n" +
                        "Age: " + get_age(jsonObj.metadata.time) + "\r\n" +
                        "Transaction ID: " + "\r\n" + jsonObj.id + "\r\n" +
                        "Sender ID: " + jsonObj.inputs.sender + "\r\n" +
                        "Recipient ID: " + jsonObj.inputs.recipient + "\r\n" +
                        "Amount: " + jsonObj.inputs.quantity
        ); 

        return tooltip;
    }


    createBox(parent, jsonObj) {
        var box = document.createElement("div");
        box.className = "box";
        box.name = jsonObj.inputs.recipient;
        box.id = parent.style.borderBottomColor.toString().replace(/\s/g, '');
        box.setAttribute("date", jsonObj.metadata.time);
        var databoxID = this.databoxID;
        box.addEventListener("click", function(e) {
        if (this.className.includes("clicked")) {
            this.className = "box";
            remove_children(this.style.borderBottomColor.toString().replace(/\s/g, ''));
        } else {
            create_box_for_new_children(this, databoxID);
            this.className += " clicked";
        }
        }, false);
        box.textContent = "Age: " + get_age(jsonObj.metadata.time) + "\r\n" +
                        "Transaction ID: " + jsonObj.id.slice(0, 11) + "...\r\n" +
                        "Sender ID: " + jsonObj.inputs.sender.slice(0, 13) + "...\r\n" +
                        "Recipient ID: " + jsonObj.inputs.recipient.slice(0, 11) + "...\r\n" +
                        "Amount: " + jsonObj.inputs.quantity;

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
    var difference = Math.floor(Date.now() / 1000) - utcSeconds;

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
        add_wallet_transactions(parent, listboxes[idNum]);
    } else {
        const child = new DataboxSet(parent);
        add_wallet_transactions(parent, child);
    }
}

var currentTimeLog = 0;
function add_wallet_transactions(parent, databox) {
    for (const itemjson of jsonDict[parent.name]) {
        if (itemjson.metadata.time >= parent.getAttribute("date"))
            databox.createBox(parent, itemjson);
    }
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
    protocol = '1QFr2MKF2aL9BJAkDr59XwTwdAmwhAgSa7';
}
parent.name = protocol;
parent.setAttribute("date", 100);
parent.append("WalletID: " + protocol.slice(0,13) + "...");
const child1 = new DataboxSet(document.getElementById("root"), "databoxLayer1");
add_wallet_transactions(parent, child1)