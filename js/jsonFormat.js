//Return the transaction ID
function get_id(jsonObj) {
    return jsonObj.id;
}

//Return the sender of the transaction
function get_sender(jsonObj) {
    return jsonObj.inputs[0].owners_before[0];
}

//Return the recipient of the transaction
function get_recipient(jsonObj) {
    return jsonObj.outputs[0].public_keys[0];
}

//Return the quantity exchanged in the transaction
function get_amount(jsonObj) {
    return jsonObj.outputs[0].amount;
}

//Return the time in epoch time (seconds)
function get_time(jsonObj) {
    if (jsonObj.asset.data.Timestamp != undefined) {
        var date = new Date(jsonObj.asset.data.Timestamp);
        if (!isNaN(date.getTime()) && date.getTime() != undefined)
            return date.getTime();
    }
    else if (jsonObj.asset.data.timestamp != undefined) {
        var date = new Date(jsonObj.asset.data.timestamp/1000);
        if (!isNaN(date.getTime()) && date.getTime() != undefined)
            return date.getTime();
    }
    else if (jsonObj.asset.data.time != undefined) {
        var date = new Date(jsonObj.asset.data.time/1000);
        if (!isNaN(date.getTime()) && date.getTime() != undefined)
            return date.getTime();
    }
    else {
        return "N/A";
    }
}