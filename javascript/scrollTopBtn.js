document.addEventListener("scroll", ()=>{

    let btn = document.querySelector(".scroll-top-btn");
    //checking if button exists and if scrollY is not 0
    if((scrollY != 0) && (!btn)){
        let pageBody = document.body;
        //creating button
        let scrollTopBtn = document.createElement("button");
        scrollTopBtn.setAttribute("type", "button");
        pageBody.appendChild(scrollTopBtn);
        scrollTopBtn.innerHTML = "UP";
        //adding styles to button
        scrollTopBtn.classList.add("scroll-top-btn");
        scrollTopBtn.setAttribute("onclick", "window.scrollTo(0, 0)");
    }
    else{
        //if button exists and scrollY is 0, remove button
        if(btn && (scrollY == 0)){
            btn.remove();
        }
    }
})
