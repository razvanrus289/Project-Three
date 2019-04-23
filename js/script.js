function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.047778, lng: -87.756829 },
    zoom: 15
  });
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
function disappear {
  if(document.getElementById('next').clicked == true) {
    document.getElementById("ArrowTextBox").style.visibility = "hidden";
  }
}