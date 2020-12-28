var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//Server URL
var serverURL = "https://api.funtranslations.com/translate/minion.json";



function getTranslationURL(text) {
    return serverURL + "?text=" + text;
}

function errorHandler(error) {
    console.log("Failed to Fetch", error);
    alert("Something wrong with Server! Try Again after some time");
}



btnTranslate.addEventListener("click", clickEventHandler);
//Calling Server For Processing
function clickEventHandler() {

    //Taking Input
    var inputText = txtInput.value;

    //Calling server for Processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText
        })
        .catch(errorHandler);
};