// document.addEventListener("DOMContentLoaded", function () {
//   //Features
//   var featuresLink = document.getElementById("Features-nav");
//   var featuresSection = document.querySelector(".features-container");
//   featuresLink.addEventListener("click", function () {
//     featuresSection.scrollIntoView({ behavior: "smooth" });
//   });

//   //Faculty
//   var facultyLink = document.getElementById("Faculty-nav");
//   var facultySection = document.querySelector(".faculty");
//   facultyLink.addEventListener("click", function () {
//     facultySection.scrollIntoView({ behavior: "smooth" });
//   });
//   //Gallery
//   var galleryLink = document.getElementById("Gallery-nav");
//   var gallerySection = document.querySelector(".gallery");
//   galleryLink.addEventListener("click", function () {
//     gallerySection.scrollIntoView({ behavior: "smooth" });
//   });

//   //FAQ
//   var faqLink = document.getElementById("FAQ'S-nav");
//   var faqSection = document.querySelector(".faq");
//   faqLink.addEventListener("click", function () {
//     faqSection.scrollIntoView({ behavior: "smooth" });
//   });
// });
document.addEventListener("scroll", function () {
  var navbar = document.getElementById("scroll");
  var scrolled = window.scrollY > 100;

  if (scrolled) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var dropdownIcon = document.querySelector('.dropdown-icon');
  var navbarList = document.querySelector('.left ul');

  dropdownIcon.addEventListener('click', function () {
      navbarList.classList.toggle('show');
  });
});



function openNewTab() {
  var imageUrl = "./Images/abc.jpg";
  window.open(imageUrl, "_blank");
}

function openNewTab2() {
  var imageUrl2 = "./Images/abc.jpg";
  window.open(imageUrl2, "_blank");
}
function Go_on_Map() {
  var url = "https://maps.app.goo.gl/gFHy5F9Ksp1CdWBo8";

  window.open(url, "_blank");
}
function openInsta() {
  var imageUrl = "https://www.instagram.com/aligariansvisionaryclasses/#";
  window.open(imageUrl, "_blank");
}


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}



document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "210px";
  document.getElementById("main").style.marginLeft = "210px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}