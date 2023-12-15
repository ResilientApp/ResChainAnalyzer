console.log("HELLO");
var output = null;

function setOutput(input) {
    output = input;
    //console.log(input);
}

var output = fetch("https://crow.resilientdb.com/v1/transactions");
console.log(output.then((response) => response.text()));

/* fetch("https://crow.resilientdb.com/v1/transactions")
    .then((response) => response.text())
    .then((text) => removeErrors(text))
    .then((correctedJson) => {var output = correctedJson;}); */

function removeErrors(inputString) {
    output = inputString.replace(',c','');
    output = output.replace(',b','');
    return output;
}