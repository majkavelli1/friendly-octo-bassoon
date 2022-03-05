// Create JS objects and its properties;

//Registration form, JQuery
$(document).ready(function() {
    $("#registration").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },

    });
});
// Use selectors, methods and events;
// Create animations by using JS functions;
// Use at least three event listeners as “click”, “mouseover”, “keypress”;
$(document).ready(function() {
    // toggling
    $("#toggleThis").click(function() {
        $("#toggled").toggle("slow", function() {
            if ($("#toggled").is(":visible")) {
                console.log('showed');
            } else {
                console.log('hidden');
            }
        });
    });
    // slideDown
    $("#slideDown").click(function() {
        $("#toggled").slideDown("slow", function() {
            if ($("#toggled").is(":visible")) {
                console.log('showed');
            } else {
                console.log('hidden');
            }
        });
    });
    // slideDown
    $("#slideUp").click(function() {
        $("#toggled").slideUp("slow", function() {
            if ($("#toggled").is(":visible")) {
                console.log('showed');
            } else {
                console.log('hidden');
            }
        });
    });
    // mouseover
    $("#mouseOver").mouseover(function() {
        $("#toggled").css("display", "block");
    });
    // mouseout
    $("#mouseOver").mouseout(function() {
        $("#toggled").css("display", "none");
    });

    // keypressed
    $("#firstname").keypress(function() {
        $("#firstname_val").text('First Name: ' + $('#firstname').val());
    });
    $("#lastname").keypress(function() {
        $("#lastname_val").text('Last Name: ' + $('#lastname').val());
    });
    $("#email").keypress(function() {
        $("#email_val").text('Email: ' + $('#email').val());
    });

});



// Play at least one sound on your page by using JS.
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}



$(document).ready(function() {
    $("#mybtn").click(function() {
        $("h1").toggle();
    });
});