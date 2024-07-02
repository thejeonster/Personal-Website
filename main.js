
function titleTypingEffect(element, text, i = 0) {

    element.textContent += text[i];

    if (i < text.length - 1) {
        setTimeout(() => titleTypingEffect(element, text, i + 1), 70);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var titleHeader = document.getElementById("title");
    titleHeader.textContent = "";
    titleTypingEffect(titleHeader, "Welcome..."); 
}

)

