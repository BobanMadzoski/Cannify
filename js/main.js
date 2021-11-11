// Change body color

jQuery(function($){
    $(window).scroll(function() {

  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() /5);

  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();
});

// Change body color


//Flickity Buttons

$(document).ready( function() {
    var $gallery = $('.carousel').flickity({
      prevNextButtons: false,
    pageDots: false
    });
    // Flickity instance
    var flkty = $gallery.data('flickity');
    // elements
  
    // previous
    var $previousButton = $('.button--previous').on( 'click', function() {
      $gallery.flickity('previous');
    });
    // next
    var $nextButton = $('.button--next').on( 'click', function() {
      $gallery.flickity('next');
    });
  
  
  });

  //Flickity Buttons

  //Magnetic Buttons
  var magnets = document.querySelectorAll('.magnetic, .carousel-magnetic')
  var strength = 50

  magnets.forEach( (magnet) => {
  magnet.addEventListener('mousemove', moveMagnet );
  magnet.addEventListener('mouseout', function(event) {
      TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
  } );
});
function moveMagnet(event) {
var magnetButton = event.currentTarget
var bounding = magnetButton.getBoundingClientRect()

TweenMax.to( magnetButton, 1, {
x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
ease: Power4.easeOut
})
}
//Magnetic Buttons


//Cursor Follow
jQuery(document).ready(function() {
    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
    
    $(document).mousemove(function(e){
        mouseX = e.pageX - 13;
        mouseY = e.pageY - 13; 
    });
        
    setInterval(function(){
        xp += ((mouseX - xp)/3);
        yp += ((mouseY - yp)/3);
        $("#circle").css({left: xp +'px', top: yp +'px'});
    }, 20);

    });
//Cursor Follow

//Page Loader

$(window).on("load", function(){

    gsap.to('.intro-content > p', 1, {
        delay: 0.6 ,
        duration: 1,
        y: '200',
        ease: 'slow (0.9, 1, false)'
    });

    gsap.to('.intro-content > img', 0.9, {
        delay: 0.7 ,
        duration: 1,
        y: '200',
        ease: 'slow (0.9, 1, false)'
    });

    let tl = new TimelineMax();
    tl.to('.preloader', 1.2, {
        delay: 1 ,
        height:'0vh',
        ease: 'expo.inOut'
    });
});

//Page Loader

//Hamburger Menu Class Toggle

$(document).ready(function () {

    $("#mob-menu").click(function (event) {
        event.preventDefault();
        $('body').toggleClass('fixed-position');
        $('.section-padding').toggleClass('remove-padding')
        $('.navbar').toggleClass('navbar-padding')
    });
    });

//Hamburger Menu Class Toggle

//Hamburger Menu Icon Animation
$(document).ready(function () {
        
    $('.first-button').on('click', function () {
    
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
    
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
    
      $('.animated-icon3').toggleClass('open');
    });
    });
// Hamburger Menu Icon Animation


//FAQ
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
//FAQ CLOSED



//FAQ OPENED ALL TIME           (NOT WORKING)
// $('.accordion #accordion-button').on('click', function(e) { 
//   if (!$('#accordion-button').hasAtrribute('aria-expanded','true')) { 
//     e.stopPropagation(); 
//   } 
// });
//FAQ OPENED ALL TIME CLOSED    (NOT WORKING)


//Active Class Toggler Doctor's Page
// list of elements to be observed
const navItems = $(".se-nav-item");
const pageSections = $(".section-page");

const elementIsInView = el => {
    const scroll = window.scrollY || window.pageYOffset
    const boundsTop = el.getBoundingClientRect().bottom + scroll

    const viewport = {
        top: scroll,
        bottom: scroll + el.clientHeight*0.6,
    }

    const bounds = {
        top: boundsTop,
        bottom: boundsTop - el.clientHeight*0.6,
    }



    return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
        || ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
}
$(function () {
    $(window).scroll(function () {
        pageSections.each(function () {
            if(elementIsInView($(this)[0])){
                // this = the section that is visible
                let sectionId = $(this).attr('id');
                navItems.each(function(){
                    $(this).removeClass('active-second-nav');
                });
                $("a[href='#" + sectionId + "']").addClass('active-second-nav');
            }
        })
    })
})   
//Active Class Toggler Doctor's Page CLOSED



// Circle Animation on Hover
$(function() {
    $('a, button').hover(function() {
      $('#circle').css('transform', 'scale(2)');
    }, function() {
      // on mouseout, reset the background colour
      $('#circle').css('transform', 'scale(1)');
    });
  });
// Circle Animation on Hover CLOSED

//White Button Height Equal
// $(".white-button-link-second-block").height($(".white-button-link").height());
//White Button Height Equal