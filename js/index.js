// Add Event Listener Below
console.log ("Your index.js file is loaded correctly!");

// .on event listener documentation - https://api.jquery.com/on/#on-events-selector-data-handler

// Step 1: Hide a div
$('#button1').on("click", function(){
    $('.hideMe').slideToggle();
  });
  
  // Step 2: Change a color
  $('#button2').on("click", function(){
    $('.cssChange').css("background-color","red");
  });
  
  // Step 3: Append content
  $('#button3').on("click", function(){
    $('.appendMe').append("<div class='child'>I got appended! Nice!</div> ")
  });
  
  // Step 4: Animate a DIV
  $("button").click( function(){
       $('.animate').animate( {left: '250px'}, 1000 );
  });




  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });