var sickPrimary = {
  autoplay: true,
  autoplaySpeed: 2400,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 1800,
  cssEase: 'cubic-bezier(.84, 0, .08, .99)',
  asNavFor: '.text-slider',
  centerMode: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next')
}




// $(document).ready(function(){ 
//   setInterval('.fade-right()',1000); 
// });  


// function title (){ 
//   $("#fade-right"); 
// } 
// $(document).ready(function(){ 
//    setInterval('title()',1000); 
// });
// var Menubar = {};

// Menubar.active = false;

// Menubar.open = function(el) {
//   var menubar = $(el).closest('ul')
//   ,   item = $(el).closest('li')
//   ,   menu = item.find('ul').first()
//   ;
//   Menubar.active = true;
//   item.addClass('is-selected')
//   item.siblings().removeClass('is-selected');
//   menu.show();
// };

// Menubar.close = function() {
//   console.log('close');
//   $('.menubar > li.is-selected').removeClass('is-selected');
//   Menubar.active = false;
// };

// $('.menubar > li').on('click', function(e) {
//   if (!Menubar.active) {
//     Menubar.open(this);
//     e.stopPropagation(); // Keep document.click from firing
//   }
// })

// $('.menubar > li').on('mouseenter', function() {
//   if (Menubar.active) { Menubar.open(this); }
// });

// $(document).on('click', function() {
//   Menubar.close();
// });









var botController = (function () {


})();

var uiController = (function () {


})();




var controller = (function (botCntr, uiCntr) {
  var $chatCircle,
    $chatBox,
    $chatBoxClose,
    $chatBoxWelcome,
    $chatWraper,
    $submitBtn,
    $chatInput,
    $msg;

  /*toggle*/
  function hideCircle(evt) {
    evt.preventDefault();
    $chatCircle.hide('scale');
    $chatBox.show('scale');
    $chatBoxWelcome.show('scale');
  }

  function chatBoxCl(evt) {
    evt.preventDefault();
    $chatCircle.show('scale');
    $chatBox.hide('scale');
    $chatBoxWelcome.hide('scale');
    $chatWraper.hide('scale');
  }



  function init() {
    $chatCircle = $("#chat-circle");
    $chatBox = $(".chat-box");
    $chatBoxClose = $(".chat-box-toggle");
    $chatBoxWelcome = $(".chat-box-welcome__header");
    $chatWraper = $("#chat-box__wraper");




    $chatCircle.on("click", hideCircle);
    $chatBoxClose.on("click", chatBoxCl);
    $chatInput.on("click", chatOpenMessage);


    $chatInput.on("keypress", chatSbmBtn);

  }

  return {
    init: init
  };

})(botController, uiController);

$(document).ready(controller.init);

know = {
  "hello": "hi",
  "how are you?": "good",
  "ok": ":)"
};
//  function hideCircle(evt) {
//     evt.preventDefault();
//     $chatCircle.hide('scale');
//     $chatBox.show('scale');
//     $chatBoxWelcome.show('scale');
// }

// function chatBoxCl(evt) {
//     evt.preventDefault();
//     $chatCircle.show('scale');
//     $chatBox.hide('scale');
//     $chatBoxWelcome.hide('scale');
//     $chatWraper.hide('scale');
// }

// function chatOpenMessage(evt) {
//     evt.preventDefault();
//     $chatBoxWelcome.hide();
//     $chatWraper.show();
// }
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }







// easing: 'ease-out-back',
// 				duration: 1000




AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 3000,
});






$(document).ready(function () {
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
window.onscroll = function () { scrollFunction() };

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












(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //   if (distance < 0) {
      //     document.getElementById("headline").innerText = "It's my birthday!";
      //     document.getElementById("countdown").style.display = "none";
      //     document.getElementById("content").style.display = "block";
      //     clearInterval(x);
      //   }
      //seconds
    }, 0)
}());
// carusel //

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days1").innerText = Math.floor(distance / (day)),
        document.getElementById("hours1").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes1").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds1").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //   if (distance < 0) {
      //     document.getElementById("headline").innerText = "It's my birthday!";
      //     document.getElementById("countdown").style.display = "none";
      //     document.getElementById("content").style.display = "block";
      //     clearInterval(x);
      //   }
      //seconds
    }, 0)
}());


(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days2").innerText = Math.floor(distance / (day)),
        document.getElementById("hours2").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes2").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds2").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //   if (distance < 0) {
      //     document.getElementById("headline").innerText = "It's my birthday!";
      //     document.getElementById("countdown").style.display = "none";
      //     document.getElementById("content").style.display = "block";
      //     clearInterval(x);
      //   }
      //seconds
    }, 0)
}());



(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days3").innerText = Math.floor(distance / (day)),
        document.getElementById("hours3").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes3").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds3").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //   if (distance < 0) {
      //     document.getElementById("headline").innerText = "It's my birthday!";
      //     document.getElementById("countdown").style.display = "none";
      //     document.getElementById("content").style.display = "block";
      //     clearInterval(x);
      //   }
      //seconds
    }, 0)
}());



(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days4").innerText = Math.floor(distance / (day)),
        document.getElementById("hours4").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes4").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds4").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //   if (distance < 0) {
      //     document.getElementById("headline").innerText = "It's my birthday!";
      //     document.getElementById("countdown").style.display = "none";
      //     document.getElementById("content").style.display = "block";
      //     clearInterval(x);
      //   }
      //seconds
    }, 0)
}());




// jQuery("#carouselExampleIndicators").carousel({
//     autoplay: true,
//     rewind: true, /* use rewind if you don't want loop */
//     margin: 20,
//      /*
//     animateOut: 'fadeOut',
//     animateIn: 'fadeIn',
//     */
//     responsiveClass: true,
//     autoHeight: true,
//     autoplayTimeout: 2000,
//     smartSpeed: 800,
//     nav: true,
//     responsive: {
//       0: {
//         items: 1
//       },

//       600: {
//         items: 1
//       },

//       1024: {
//         items: 1
//       },

//       1366: {
//         items: 1
//       }
//     }
//   });



// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })








let usdBtn = document.querySelector(".exchange-btn");
let exchangeItem = document.querySelector(".exchange-item");
let categoriesBtn = document.querySelector(".categories-btn");
let categoriesItem = document.querySelector(".categories-item");





// let blogBtn = document.querySelector(".blog-btn")
// let blogItems = document.querySelector(".blog-items")

// blogBtn.addEventListener("mouseover", function () { 
//     blogItems.style.display = "block"
//  })

//  function blogEvents() {
//     blogItems.style.display = "none"
// }






let shoesBtn = document.querySelector(".shoes-btn")
let shoesItem = document.querySelector(".shoes-item")

shoesBtn.addEventListener("mouseover", function () {
  shoesItem.style.display = "block"
})

function shoesEvent() {
  shoesItem.style.display = "none"
}





usdBtn.addEventListener("click", function (e) {
  e.preventDefault();
  exchangeItem.classList.toggle("d-block")
})

categoriesBtn.addEventListener('click', function (e) {
  e.preventDefault();
  categoriesItem.classList.toggle("d-block")
})

$(document).ready(function () {

  $(".product-11").click(function (e) {
    e.preventDefault();
    $(".product-1").show();
    $(".product-2").hide();
    $(".product-3").hide()
  })

  $(".product-12").click(function (e) {
    e.preventDefault();
    $(".product-2").show();
    $(".product-1").hide();
    $(".product-3").hide()
  })
  $(".product-13").click(function (e) {
    e.preventDefault();
    $(".product-3").show();
    $(".product-2").hide();
    $(".product-1").hide()
  })

  setTimeout(function () {
    $(".login").show(600)
    $("#sign-in-bg").show()
  }, 2500)

  $(".close-login-btn").click(function (e) {
    e.preventDefault();
    $(".login").hide(800);
    $("#sign-in-bg").hide()
  })



  $(".nav-sigin-btn").one(function (e) {
    e.preventDefault();
    $(".signIn-item").show(500)
  })
  $(".nav-sigin-btn").click(function (e) {
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



  $('.owl-one').owlCarousel({
    loop: false,
    margin: 40,
    nav: true,
    responsiveClass: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    responsive: {
      450: {
        items: 2
      },
      700: {
        items: 3
      },
      1250: {
        items: 5
      }
    }
  })

  $('.owl-second').owlCarousel({
    loop: false,
    margin: 40,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    responsive: {
      0: {
        items: 2
      },
      450: {
        items: 2
      },
      778: {
        items: 3
      },
      1000: {
        items: 3
      },
      1250: {
        items: 5
      }
    }
  })

  $('.owl-third').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  })

  $('.owl-carousel-responsive').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    responsive: {
      450: {
        items: 1
      },
      700: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5
      }
    }
  })


//   $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     rtl:true,
// })
  $('.top-rated-product-responsive').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    responsive: {
      450: {
        items: 2
      },
      700: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4
      },
      1250: {
        items: 5
      }
    }
  })

  $('.owl-fourth').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    responsive: {
      100: {
        items: 1
      },
      450: {
        items: 1
      },
      993: {
        items: 2
      },
      1250: {
        items: 3
      }
    }
  })
  $('.owl-fifth').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
      450: {
        items: 3
      },
      600: {
        items: 3

      },
      1000: {
        items: 6
      }
    }
  })

  $('.owl-sixth').owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1250: {
        items: 3
      }
    }
  })

  $('.owl-seventh').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1250: {
        items: 3
      }
    }
  })
});


jQuery("#owl-demo").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 20,
  /*
 animateOut: 'fadeOut',
 animateIn: 'fadeIn',
 */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 2000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 3
    },

    1366: {
      items: 6
    }
  }
});





var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}






let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}



// let slideIndex1 = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides1");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex1++;
//   if (slideIndex1 > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex1-1].style.display = "block";  
//   dots[slideIndex1-1].className += " active";
//   setTimeout(showSlides, 4000); // Change image every 2 seconds
// }


AOS.init();

AOS.init({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 700,
  dots: false,
  fade: true,
  arrows: false,
  dots: true,
});