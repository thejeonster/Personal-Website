
// ----- First Layer ----- // 
document.body.style.margin = "0px";

const layerOne = document.createElement("div");
layerOne.style.display = "flex";
layerOne.style.justifyContent = "center";
layerOne.style.alignItems = "center";
layerOne.style.height = "150px";
layerOne.style.background = "#1D669E";
document.body.appendChild(layerOne);

const titleBox = document.createElement("div"); 
titleBox.classList.add("title");
titleBox.style.height = "50px";
titleBox.style.width = "200px"; 
titleBox.textContent = "Responsive Designs";
titleBox.style.textAlign = "center";
layerOne.appendChild(titleBox);

// ----- Second Layer ----- // 

const layerTwo = document.createElement("div"); 
layerTwo.style.display = "flex"; 
layerTwo.style.height = "320px";
layerTwo.style.background = "#D3E6F5";

document.body.appendChild(layerTwo);

// ----- Third Layer ----- // 

const layerThree = document.createElement("div");
layerThree.style.display = "flex";
layerThree.style.height = "320px";
layerThree.style.background = "#F6E6BF";

document.body.appendChild(layerThree);

// ----- Fourth Layer ----- //

const layerFour = document.createElement("div");
layerFour.style.display = "flex";
layerFour.style.height = "320px";
layerFour.style.background = "#5E9FFF";

document.body.appendChild(layerFour);