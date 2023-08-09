document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", () => {
    navBarEffect();
   });
  });

const navBarEffect = () => {
  //get navbar
  const navbar = document.querySelector(".navbar")
  //get the height of the navbar
  const navbarHeight = navbar.getBoundingClientRect().height;
  //get the current scroll position
  const scrollPosition = window.scrollY;
     
  //if the scroll position is greater than the navbar height
  if (scrollPosition > navbarHeight+100) {
  //add the class of navbar-fixed
  navbar.classList.add('navbar-fixed');
  navbar.style.opacity = "1";
  navbar.style.transform = "translateY(0)";
  } else {
  navbar.classList.remove('navbar-fixed');
  if(scrollPosition === 0) {
    navbar.style.opacity = "1";
    navbar.style.transform = "translateY(0px)";
  }else{
    navbar.style.opacity = "0";
    navbar.style.transform = "translateY(40px)";
  }
  };
  };