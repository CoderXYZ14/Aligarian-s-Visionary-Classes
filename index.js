document.addEventListener("DOMContentLoaded", function () {
  //Features
  var featuresLink = document.getElementById("Features-nav");
  var featuresSection = document.querySelector(".features-container");
  featuresLink.addEventListener("click", function () {
    featuresSection.scrollIntoView({ behavior: "smooth" });
  });

  //Faculty
  var facultyLink = document.getElementById("Faculty-nav");
  var facultySection = document.querySelector(".faculty");
  facultyLink.addEventListener("click", function () {
    facultySection.scrollIntoView({ behavior: "smooth" });
  });
  //Gallery
  var galleryLink = document.getElementById("Gallery-nav");
  var gallerySection = document.querySelector(".gallery");
  galleryLink.addEventListener("click", function () {
    gallerySection.scrollIntoView({ behavior: "smooth" });
  });

  //FAQ
  var faqLink = document.getElementById("FAQ'S-nav");
  var faqSection = document.querySelector(".faq");
  faqLink.addEventListener("click", function () {
    faqSection.scrollIntoView({ behavior: "smooth" });
  });
});

function openNewTab() {
  var imageUrl = "./Images/abc.jpg";
  window.open(imageUrl, "_blank");
}

//
function openCourseTemplate() {
  var imageUrl = "./Images/course.jpg";
  window.open(imageUrl, "_blank");
}
function Go_on_Map() {
  var url = "https://maps.app.goo.gl/gFHy5F9Ksp1CdWBo8";

  window.open(url, "_blank");
}
function openInsta() {
  var imageUrl = "https://www.instagram.com/aligariansvisionaryclasses/#";
  window.open(imageUrl, "_blank");
}

function openEmail() {
  var emailAddress = "aligariansvisionaryclasses@gmail.com";
  var subject = "";
  var mailtoLink =
    "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject);
  window.open(mailtoLink, "_blank");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//RESPONSIVENESS

let baar = document.getElementById("baar");
