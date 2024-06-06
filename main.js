
const titleHeader = document.createElement("h1");
titleHeader.classList.add("title");
titleHeader.textContent = "With Regards";
document.body.appendChild(titleHeader);

function titleTypingEffect(element, text, i = 0) {

    element.textContent += text[i];

    if (i < text.length - 1) {
        setTimeout(() => titleTypingEffect(element, text, i + 1), 70);
    }
}

titleHeader.textContent = "";
titleTypingEffect(titleHeader, "Responsive Designs..."); 