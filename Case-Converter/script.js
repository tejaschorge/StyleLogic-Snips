function convert(type){
    const text = document.getElementById("inputText").value;
    let result = "";
    if(type === "lower") {
        result = text.toLowerCase();
    }
    else if(type === "upper"){
        result = text.toUpperCase();
    }
    else if(type === "title"){
        result = text
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }
    document.getElementById("outputText").textContent = result;
}
function copyText(){
    const output = document.getElementById("outputText").textContent;
    if(!output) return;
    navigator.clipboard.writeText(output).then(() => {
        alert("Copied to clipboard ");
    });
}
function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").textContent = "";
}