//getting all required elements
let galleryImages = document.querySelectorAll(".img-gallery");
let windowWidth = window.innerWidth;

//convert nodelist into array
let images = [...galleryImages];

images.map( image =>{

    image.addEventListener("click", ()=>{
        //getting image url
        let getCssElement = window.getComputedStyle(image);
        let getFullImgUrl = getCssElement.getPropertyValue("background-image");
        let getImgName = getFullImgUrl.split("/images/gallery/thumbnails/")[1];
        let setNewImgUrl = getImgName.replace("%20", " ").replace('")', '');

        //creating popup window
        let body = document.body;
        let newImgWindow = document.createElement("div");
        body.appendChild(newImgWindow);
        newImgWindow.setAttribute("class", "img-lightbox");
        newImgWindow.setAttribute("onclick", "closeLightBox()");

        //creating new image element and appending it to popup window
        let newImg = document.createElement("img");
        newImgWindow.appendChild(newImg);
        newImg.setAttribute("src", "../images/gallery/" + setNewImgUrl);

        //getting image description and appending it to popup window
        let txtToDisplay = image.querySelector(".light-box-txt").innerHTML;
        let newTxt = document.createElement("div");
        newImgWindow.appendChild(newTxt);
        newTxt.setAttribute("class", "img-description");
        newTxt.innerHTML = txtToDisplay;
    })
})

//closing popup window
const closeLightBox = () =>{
    document.querySelector(".img-lightbox").remove();
};
