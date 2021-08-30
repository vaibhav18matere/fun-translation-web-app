console.log("Working!");

const btnTranslator = document.querySelector("#btn-translator");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");

clickHandler = () => {
    console.log(txtInput.value);
}




btnTranslator.addEventListener("click", clickHandler)

