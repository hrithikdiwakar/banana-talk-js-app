var btnTranslate = document.querySelectorAll("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler(){
    var  inputText = txtInput.value;
    console.log("insside function")
    fetch(getTranslationURL(inputText)).then(response => response.json()).then(json => {
        var translatedtext = json.contents.translated;
        txtOutput.innerText = translatedtext;
    })
    .catch(errorHandler)
};


btnTranslate.addEventListener("click", clickHandler);