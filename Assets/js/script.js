
let menuBtn = document.querySelector("#menu-bar");
let navBar = document.querySelector(".navbar");


menuBtn.onclick = () => { 
    menuBtn.classList.toggle("fa-times")
    navBar.classList.toggle("active"); 
};

window.onscroll = () => { 
    menuBtn.classList.remove("fa-times");
    navBar.classList.remove("active");

  // scroll-top button
    if (window.scrollY > 60) {
        document.querySelector("#scroll-top").classList.add('active');
    } else {
        document.querySelector("#scroll-top").classList.remove('active');
    }
};