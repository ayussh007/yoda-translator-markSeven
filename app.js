// get me the button, get me the input, get me the output
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


//  now we need a serverURL as we need to talk to the server
var serverURL = "https://api.funtranslations.com/translate/yoda.json"

//  created a function saying whenever I want to convert the text, I will take the server URL, add query params to it and add key and value to it.
function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

//  there could be error so define error handler
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

// we deifend a clickhandler like what to do when click happens: read the input go and fetch url convert that response to response.json and take the translated text and show the output
function clickHandler() {
     var inputText = txtInput.value; // taking input

    // callling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json()) 
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; // output
    })
    .catch(errorHandler)
};

// hey browser do this functionality when click happens
btnTranslate.addEventListener("click", clickHandler)





