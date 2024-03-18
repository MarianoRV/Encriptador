function encrypt() {
    var inputText = document.getElementById("input").value;
    var outputText = "";
    for (var i = 0; i < inputText.length; i++) {
        outputText += String.fromCharCode(inputText.charCodeAt(i) + 1);
    }
    document.getElementById("output").value = outputText;
}

function decrypt() {
    var inputText = document.getElementById("input").value;
    var outputText = "";
    for (var i = 0; i < inputText.length; i++) {
        outputText += String.fromCharCode(inputText.charCodeAt(i) - 1);
    }
    document.getElementById("output").value = outputText;
}
