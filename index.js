let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}


window.onscroll = ()=> {
    // for current section==>
    section.forEach((sec) => {
        let top = window.scrollY;
        // console.log(top);
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        // console.log(height);
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach((links) => {
                links.classList.remove('active');
                document.querySelector("header nav a[href*=" + id +"]").classList.add('active');
            });
        }
    });

    // header scroll==>
    let header = document.querySelector(".header");
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};


// let submitBtn = document.querySelector(".submitBtn")

// if(FormData.innerText !== ""){
//     submitBtn.addEventListener("click", sendMail);
// }

