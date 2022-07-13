function copyToClipBoard() {
    var content = document.getElementById("textArea");
    content.select();
    document.exeCommand('copy');
    alert("Successfully Copied!");
    }