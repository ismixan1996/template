$(document).ready(function(){
    $(this).scrollTop(0);
    });

    // $("#owl-demo").owlCarousel({
   
    //     autoPlay: 3000, //Set AutoPlay to 3 seconds
   
    //     items : 8,
    //     itemsDesktop : [1199,3],
    //     itemsDesktopSmall : [979,3]
   
    // });



//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}







let shoesBtn = document.querySelector(".shoes-btn")
let shoesItem = document.querySelector(".shoes-item")

shoesBtn.addEventListener("mouseover", function () {
    shoesItem.style.display = "block"
  })
  
function shoesEvent() { 
    shoesItem.style.display = "none"
 }





usdBtn.addEventListener("click",function(e) {
    e.preventDefault();
    exchangeItem.classList.toggle("d-block")
  })

 categoriesBtn.addEventListener('click',function (e) {
    e.preventDefault();
    categoriesItem.classList.toggle("d-block")
  })

  $(document).ready(function(){

   

    setTimeout(function(){
        $(".login").show(600)
        $("#sign-in-bg").show()
    },2500)

    $(".close-login-btn").click(function (e) { 
        e.preventDefault();
        $(".login").hide(800);
        $("#sign-in-bg").hide()
     })

    

    $(".nav-sigin-btn").one(function (e) {
        e.preventDefault();
        $(".signIn-item").show(500)
      })
    $(".nav-sigin-btn").click(function(e){
        e.preventDefault();
        $(".signIn-item").toggle("d-none")
    })
    $(".hamburger-btn").click(function (e) {
        e.preventDefault();
        $(".hamburger-item").fadeToggle(500); 
      })

    $(".hamburger-close-btn").click(function (e) {
        e.preventDefault();
        $(".hamburger-item").fadeOut()
      })
    
