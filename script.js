
//Meni ostaja na vrhu
$('.nav').localScroll();

 $(window).scroll(function (e) {
        $el = $('nav');
        if ($(this).scrollTop() > 170 && $el.css('position') != 'fixed') {
            $('nav').css({ 'position': 'fixed', 'top': '0', 'left':'0', 'right':'0','border-bottom':'solid'});
        }
        if ($(this).scrollTop() < 170 && $el.css('position') == 'fixed') {
            $('nav').css({ 'position': 'relative', 'top': '0', 'left':'0', 'right':'0', 'bacground': '#FFA07A', 'border-style':'none' });
        }
    });

//Lepse se Skorala
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    } 
  });
});


//Galerija
var slideIndex = 0;
showSlides(slideIndex);
currentSlide(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}







        $(document).on("pageshow","#page", function initMap() {
        var myLatLng = {lat: 45.53070123559393, lng: 13.651008367342001};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Morova Ulica 15, 6310 Izola'
        });
      
      }
    

(function(){
        var imgLen = document.getElementById('imgGallary');
        var images = imgLen.getElementsByTagName('img');
        var counter = 1;

        if(counter <= images.length){
            setInterval(function(){
                images[0].src = images[counter].src;
                console.log(images[counter].src);
                counter++;

                if(counter === images.length){
                    counter = 1;
                }
            },4000);
        }
})();