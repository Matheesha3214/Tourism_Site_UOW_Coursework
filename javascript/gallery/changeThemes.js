//Getting theme buttons and color picker
let colorPicker = document.getElementById("colorPicker");
let lightTheme = document.getElementById("theme1");
let darkTheme = document.getElementById("theme2");

// Get all text elements in the page
let txtElements = document.querySelectorAll("h2, h3, h4, h6, p")

const defaultColor = "#ffffff";
colorPicker.style.backgroundColor = defaultColor;

//getting values from color picker
colorPicker.addEventListener("input", (event) => {
    let color = event.target.value;
    colorPicker.style.backgroundColor = color;
    changeTheme(color);
});

//changing to dark theme
darkTheme.addEventListener("click", () => {
    changeTheme("#202020");
    colorPicker.style.backgroundColor = "#202020";
});

//changing to light theme
lightTheme.addEventListener("click", () => {
    removeStyles();
    colorPicker.style.backgroundColor = defaultColor;
});

//changing theme according to given color
const changeTheme = (color) => {
    //if color is white, switch to light theme
    if(color === "#ffffff"){
        removeStyles();
    }else{
        const styleTag = document.querySelector("style");
        //if style tag exists, remove it
        styleTag && styleTag.remove();
        //create new style tag
        const style = document.createElement("style");
        //add new class
        style.innerHTML = `
            .new-theme {
                background-color: ${color};
                color: white !important;
            }
    `;
    //append new style tag to head
    document.head.appendChild(style);

    const newThemeCLass = document.body.classList.contains("new-theme");
    //if new theme class does not exist, add it
     !newThemeCLass && document.body.classList.add("new-theme");

     //changing text color
    txtElements.forEach(element => {
        element.classList.add("notLightTheme");
    });
        };
};

//remove alternative styles
const removeStyles = () => {
    //remove new body styles
    const styles = document.querySelector("style");
    styles && styles.remove();

    //remove text styles
    txtElements.forEach(element => {
        const isNotLightTheme = element.classList.contains("notLightTheme");
        //if "notLightTheme" class exists, remove it
        isNotLightTheme && element.classList.remove("notLightTheme");
    });
};

