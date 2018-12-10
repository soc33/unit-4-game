$(document).ready(function () {
    var wins = 4;
    var losses = 0;
    var computerNumber = 0;
    var gem1 = 0;
    var gem2 = 0;
    var gem3 = 0;
    var gem4 = 0;
    var score = 0;

    // function to get the random numbers to play the game
    function randomNum() {
        gem1 = Math.floor(Math.random() * 10 + 2);
        gem2 = Math.floor(Math.random() * 10 + 2);
        gem3 = Math.floor(Math.random() * 10 + 2);
        gem4 = Math.floor(Math.random() * 10 + 2);
        computerNumber = Math.floor(Math.random() * 101 + 20);
        console.log("Gem1 = " + gem1 + ", gem2 = " + gem2 + ", gem3 = " + gem3 + ", gem4 " + gem4 + ", computer =" + computerNumber);
    }
    // function to set up game
    function setGame1() {
        $("#instructions1").text("Welcome weary traveler to the mine!");
        $("#instructions2").text("I have long awaited your help in my mines. You see I am old and weak so I can no longer do my own mining... BUT! I will give you something in return!");
        $("#instructions3").text("Whenever you can get me the right amount of gems that I ask for, you will get to keep one of my precious gems for yourself! See? aren't I so generous!?");
        $("#instructions4").text("Click on the gems to start collecting.");
        $("#instructions5").text("Now get to work!");
        $("#title").text("Gem Collector");
        $("#score").text(score);
        $("#winCounter").text("Wins: " + wins);
        $("#lossCounter").text("Losses: " + losses);
        $("#random-number").text("Number of gems to get is: " + computerNumber);
        $("body").css('background-image', "url(assets/images/mine.jpg)");
        $("#gems").css("display", "block");
        $("#scoreTotalText").css("display", "block");
        $("#score").css("display", "block");
        $(".numberBox").css("display", "block");
        $("#winLossCounter").css("display", "block");
        $("#switchGames").text("I lied, back to cool game");
        $("#instructions").css("background-color", "aqua");
        $("#title").css("background-color", "orange");
        $("#characterChoices").css("display", "none");
        $("#enemies").css("display", "none");
        $("#currentFighter").css("display", "none");
    };
    function setGame2() {
        $("#instructions1").text("Character Choice");
        $("#instructions2").text("(Pick a character from the four above to play as)");
        $("#instructions3").text("Enemies available to attack");
        $("#instructions4").text("Fight section");
        $("#instructions5").text("Defender");
        $("#title").text("Lord Of the Rings RPG");
        $("body").css("background-image", "url(assets/images/lotr.jpg)");
        $("#gems").css("display", "none");
        $("#scoreTotalText").css("display", "none");
        $("#score").css("display", "none");
        $(".numberBox").css("display", "none");
        $("#winLossCounter").css("display", "none");
        $("#switchGames").text("This game is boring, back to original Game please!");
        $("#instructions").css("background-color", "transparent");
        $("#title").css("background-color", "pink");
        $("#characterChoices").css("display", "block");
        $("#enemies").css("display", "block");
        $("#currentFighter").css("display", "block");
    };

    // start game
    randomNum();
    setGame1();

    // functions for playing game
    $("#gem1").on("click", function () {
        score += gem1;
        $("#score").text(score);
        checkForWins();
    });
    $("#gem2").on("click", function () {
        score += gem2;
        $("#score").text(score);
        checkForWins();
    });
    $("#gem3").on("click", function () {
        score += gem3;
        $("#score").text(score);
        checkForWins();
    });
    $("#gem4").on("click", function () {
        score += gem4;
        $("#score").text(score);
        checkForWins();
    });
    //function to see if you win
    function checkForWins() {
        if (score === computerNumber) {
            $("#winLossText").text("You win!");
            wins++;
            $("#winCounter").text("Wins: " + wins);
            resetGame();
            if (wins === 5) {
                $("#switchGames").text("Shh.. Click here for a better game!");
                $("#switchGames").toggle();
            }
        } else if (score > computerNumber) {
            losses++;
            $("#winLossText").text("You lost!");
            $("#lossCounter").text("Losses: " + losses);
            resetGame();
        }
    };
    //function to reset game
    function resetGame() {
        randomNum();
        score = 0;
        $("#score").text(0);
        $("#random-number").text(computerNumber);
    }

    // variable to switch games
    var secondGame = false;
    $("#switchGames").on("click", function () {
        if (secondGame === false) {
            setGame2();
            secondGame = true;
        } else {
            setGame1();
            secondGame = false;
        }

    });
    // button for instructors only, will be removed after grading
    $("#forInstructor").on("click", function () {
        if (secondGame === false) {
            setGame2();
            secondGame = true;
        } else {
            setGame1();
            secondGame = false;
        }
    });
    var setCharacter = 0;
    $("#one").on("click", function () {
        if (setCharacter === 0) {
            $("#one").css("background-color", "green");
            $("#two").css("background-color", "red");
            $("#two").css("border", "black solid 2px");
            $("#three").css("background-color", "red");
            $("#three").css("border", "black solid 2px");
            $("#four").css("background-color", "red");
            $("#four").css("border", "black solid 2px");
            $("#two").appendTo($("#enemies"));
            $("#three").appendTo($("#enemies"));
            $("#four").appendTo($("#enemies"));
            $("#instructions2").text("");
            setCharacter = 1;
        } else if (setCharacter === 1) {
            
        } else if (setCharacter > 0 && setCharacter <5) {

        }
    });
    $("#two").on("click", function () {
        if (setCharacter === 0) {
            $("#two").css("background-color", "green");
            $("#one").css("background-color", "red");
            $("#one").css("border", "black solid 2px");
            $("#three").css("background-color", "red");
            $("#three").css("border", "black solid 2px");
            $("#four").css("background-color", "red");
            $("#four").css("border", "black solid 2px");
            $("#one").appendTo($("#enemies"));
            $("#three").appendTo($("#enemies"));
            $("#four").appendTo($("#enemies"));
            $("#instructions2").text("");
            setCharacter = 2;
        }
    });
    $("#three").on("click", function () {
        if (setCharacter === 0) {
            $("#three").css("background-color", "green");
            $("#two").css("background-color", "red");
            $("#two").css("border", "black solid 2px");
            $("#one").css("background-color", "red");
            $("#one").css("border", "black solid 2px");
            $("#four").css("background-color", "red");
            $("#four").css("border", "black solid 2px");
            $("#two").appendTo($("#enemies"));
            $("#one").appendTo($("#enemies"));
            $("#four").appendTo($("#enemies"));
            $("#instructions2").text("");
            setCharacter = 3;
        }
    });
    $("#four").on("click", function () {
        if (setCharacter === 0) {
            $("#four").css("background-color", "green");
            $("#two").css("background-color", "red");
            $("#two").css("border", "black solid 2px");
            $("#three").css("background-color", "red");
            $("#three").css("border", "black solid 2px");
            $("#one").css("background-color", "red");
            $("#one").css("border", "black solid 2px");
            $("#two").appendTo($("#enemies"));
            $("#three").appendTo($("#enemies"));
            $("#one").appendTo($("#enemies"));
            $("#instructions2").text("");
            setCharacter = 4;
        }
    });


});