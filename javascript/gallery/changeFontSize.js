// Selecting the font size buttons
let fontSmall = document.getElementById("font-size1");
let fontNormal = document.getElementById("font-size2");
let fontLarge = document.getElementById("font-size3");

// Save the original css of the text elements
let txtElementsOriginalCss = [];
txtElements.forEach(element => {
    txtElementsOriginalCss.push(element.style.cssText);
});

fontSmall.addEventListener("click", () => {
    changeFontSize("small");
});
fontNormal.addEventListener("click", () => {
    changeFontSize("normal");
});
fontLarge.addEventListener("click", () => {
    changeFontSize("large");
});

// Change the font size of the text elements
const changeFontSize = (size) => {
    if(size === "small"){
        txtElements.forEach(element => {
            element.style.cssText = "font-size: 0.9rem";
        });
    }else if(size === "normal"){
       txtElements.forEach((element, index) => {
            element.style.cssText = txtElementsOriginalCss[index];
       });
    }else{
        txtElements.forEach(element => {
            element.style.cssText = "font-size: 1.5rem";
        });
    }
};