// Create variables

var userSum = 0;
var wins = 0;
var losses = 0;
var goalNumber = 0;

// Creat functions

$(document).ready( function() {

    function game() {
        resetGame();
        resetCrystals();

        var imageValue = $(".img").attr("value");
        console.log(imageValue);

    // Click function adds the sum of image values

    $(".img").on("click", function() {
        imageValue = $(this).attr("value");
        console.log(imageValue);
        imageValue = parseInt(imageValue);
        userSum += imageValue;
        $("#userSum").text(userSum);
        gameOver();
    })

}

    // Create a function that updates html when game is over

function gameOver() {
        if (userSum === goalNumber) {
            wins++;
            alert("Good job you know Math");
            $("#wins").text(wins);
            $("#userSum").text(0);
            game();
        }

        else if (userSum >= goalNumber) {
            losses++;
            alert("Not so good at adding numbers eh?");
            $("#losses").text(losses);
            $("#userSum").text(0);
            game();
        }
    }
    // Resets goalNumber, userSum, & imageValue each round. Also resets click event
function resetGame() {
    // Generate goalNumber
    goalNumber = Math.floor((Math.random() * 75) + 25);
    goalNumber = parseInt(goalNumber);
    $("#goalNumber").text(goalNumber);

    $(".img").off("click");

    userSum = 0;
    imageValue = 0;
    }

    // Resets image values each round
function resetCrystals() {
    // Assign each image a random value

    $("#power").attr("value", Math.floor(Math.random() * 9) + 1);
    $("#life").attr("value", Math.floor(Math.random() * 9) + 1);
    $("#quartz").attr("value", Math.floor(Math.random() * 9) + 1);
    $("#dark").attr("value", Math.floor(Math.random() * 9) + 1);

    }
    game();
});



