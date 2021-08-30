const btnTranslator = document.querySelector("#btn-translator");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/russian-accent.json";

getTranslationURL = (input) => {
    return serverURL + "?" + "text=" + input
}

errorHandler = (error) => {
    console.log("error ocuured", error);
    alert("something went wrong : try later");
}

clickHandler = () => {

    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))

        .then(response => response.json())
        .then(json => {

            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        //error handling
        .catch(errorHandler)
}

btnTranslator.addEventListener("click", clickHandler)