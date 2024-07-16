


/*-----------------------------------------javascript for Toggle menu----------------------*/
function showMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.style.right = "0";
}

function hideMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.style.right = "-200px";
}





let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("testimonial-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("testimonial-slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}






document.addEventListener("DOMContentLoaded", function() {
    showPage(1); // Show the first page initially
});

function showPage(pageNumber) {
    const pages = document.querySelectorAll(".form-page");
    pages.forEach((page, index) => {
        page.classList.remove("active");
        if (index === pageNumber - 1) {
            page.classList.add("active");
        }
    });
}

function nextPage(pageNumber) {
    showPage(pageNumber);
}

function previousPage(pageNumber) {
    showPage(pageNumber);
}

document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});

