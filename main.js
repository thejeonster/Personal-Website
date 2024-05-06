const titleHeader = document.querySelector("h1")
titleHeader.style.textAlign = "center";
titleHeader.style.color = "black";
titleHeader.style.fontSize = "40px";
titleHeader.style.fontFamily = "Georgia, Times New Roman, Times, serif";


const headerOne = document.createElement("h2");
headerOne.classList.add("headerOne");
headerOne.textContent = "About Me"
headerOne.style.color = "blue";
titleHeader.appendChild(headerOne);