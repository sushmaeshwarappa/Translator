var translateButton = document.querySelector("#btn-translate");
var textAreaInput = document.querySelector("textarea");
var translatedOutput = document.querySelector(".translate-output");
var selectedOption1 = document.querySelector(".selectedBox1");
var selectedOption2 = document.querySelector(".selectedBox2");
var selectedOption3 = document.querySelector(".selectedBox3");
var body = document.querySelector("body");
//var container = document.querySelector(".container");

var serverURL;

//MAKING serverURL dynamic based on selectedOption
function clickEventHandlerOfOption1() {
    serverURL = "https://api.funtranslations.com/translate/yoda.json"
    textAreaInput.placeholder = "type here to convert to yoda language ✏️";
    translateButton.innerHTML = "Translate to Yoda";
    body.style.backgroundColor = "#F0F8FF";
}

function clickEventHandlerOfOption2() {
    serverURL = "https://api.funtranslations.com/translate/shakespeare.json"
    textAreaInput.placeholder = "type here to convert to shakespeare language ✏️";
    translateButton.innerHTML = "Translate to Shakespeare";
    body.style.backgroundColor = "#C0C0C0";
}

function clickEventHandlerOfOption3() {
    serverURL = "https://api.funtranslations.com/translate/wow.json"
    textAreaInput.placeholder = "type here to convert to wow language ✏️";
    translateButton.innerHTML = "Translate to WOW";
    body.style.backgroundColor = "#BC8F8F";
}

function WriteToURL(input) {
    var link = serverURL + "?" + "text=" + input
    var encoded = encodeURI(link); //convert URL to encoded URI(Uniform resource identifier by name and then finds it's location)
    return encoded
}

function errorHandler(error) {
    console.log("Oops: " + error);
    console.log("Looks like something went wrong!");
    alert("something went wrong");
}

function clickEventHandler(event) {
    var inputText = textAreaInput.value;
    fetch(WriteToURL(inputText))
        .then(response => response.json())
        .then(jsonResult => {
            translatedOutput.innerText = jsonResult.contents.translated;
        })
        .catch(errorHandler);
}

translateButton.addEventListener("click", clickEventHandler);
selectedOption1.addEventListener("click", clickEventHandlerOfOption1);
selectedOption2.addEventListener("click", clickEventHandlerOfOption2);
selectedOption3.addEventListener("click", clickEventHandlerOfOption3);


