// Selecting the font size buttons
let fontSmall = document.getElementById("font-size1");
let fontNormal = document.getElementById("font-size2");
let fontLarge = document.getElementById("font-size3");

// Get all text elements in the page
let txtElementsForFontChange = document.querySelectorAll("h2, h3, h4, h6, p")

// Save the original css of the text elements
let txtElementsOriginalCss = [];
txtElementsForFontChange.forEach(element => {
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
    //Append the correct font size to the original css
    if(size === "small"){
        txtElementsForFontChange.forEach((element, index) => {
            element.style.cssText = txtElementsOriginalCss[index]+"font-size: 0.9rem !important";
        });
    }else if(size === "normal"){
       txtElementsForFontChange.forEach((element, index) => {
            element.style.cssText = txtElementsOriginalCss[index];
       });
    }else{
        txtElementsForFontChange.forEach((element, index) => {
            element.style.cssText = txtElementsOriginalCss[index]+"font-size: 1.5rem !important";
        });
    }
};