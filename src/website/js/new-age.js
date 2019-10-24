(function($) {
  "use strict"; // Start of use strict

  var element_position = $('.trigger-animation').offset().top;
  var isScrollActive = false;

  document.addEventListener('scroll', function (event) {

        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = element_position;

        if(y_scroll_pos > scroll_pos_test && !isScrollActive ) {
          console.log('Trigger');
          isScrollActive = true;
           bottomTypewriter()
        }
      }, true /*Capture event*/);



  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

// Event on scroll
function handleScroll() {
  console.debug('test: ', window.scrollY);
}


// Typewriter Header

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [
    "Get Your Thoughts Out.",
    "Understand yourself better. Find your calm. Write your future.",
    "Whether you're suffering from anxiety, depression or just want to unlock your creativity, journaling with Scribe will help.",
    "Journaling has been scientifically proven to help.",
    "So be kind to yourself. Start journaling with Scribe.",
  ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {

    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to <span>
     document.querySelector(".typewrite").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 80);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  setTimeout(function() {
    StartTextAnimation(0);
  }, 2000);
});




// Typewriter Download Section
function bottomTypewriter() {
  console.log('Active');
    // array with texts to type in typewriter
    var dataText = [
      "You'll be amazed at what happens when you just stop to take a few minutes out of your busy day to reflect.",

      "Clarity. Calm. Understanding.",

      "It's easy to make excuses. To say you don't have time - or that journaling is a waste of time.",

      "But you'll quickly see that you become calmer, more effective - and happier - if you do."

    ];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {

      // check if text isn't finished yet
      if (i < (text.length)) {
        // add next character to <span>
       document.querySelector(".typewrite-download-section").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 70);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // if scroll position = here, StartTextAnimation
    // start the text animation
    setTimeout(function() {
      StartTextAnimation(0);
    }, 200);

}




// Get date

(function () {
    // Get current date
    var date = new Date();

    // Format day/month/year to two digits
    var formattedDate = ('0' + date.getDate()).slice(-2);
    var formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
    var formattedYear = date.getFullYear().toString().substr(2,2);

    // Combine and format date string
    var dateString = formattedMonth + '/' + formattedDate + '/' + formattedYear;

    // Reference output DIV
    var output = document.querySelector('#dateToday', '#demoDateToday');

    // Output dateString
    output.innerHTML = dateString;
})();




// Scroll reveal

  AOS.init();
