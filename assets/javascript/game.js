$(document).ready(function () {
    var wins = 0;
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
        // console.log("Gem1 = " + gem1 + ", gem2 = " + gem2 + ", gem3 = " + gem3 + ", gem4 = " + gem4 + ", computer =" + computerNumber);
    }
    // function to set up game
    function setGame1() {
        $("#instructions1").text("I NEED YOUR HELP!");
        $("#instructions2").text("Mario is away on another journey and left me to gaurd the princess by myself, and well... there was a ghost so I had to ... you know ... I uh... uh... ANYWAYS the ghost is gone but so is the princess!!");
        $("#instructions3").text("Thankfully this time it wasn't Bowser but it was his son, Bowser Jr. which is good because otherwise we would have REAL problems on our hands... But anyways, Bowser Jr. sent a ransom note and just wants money for the princess since he still thinks girls are gross. He keeps sending random ransom notes with very random amounts of coins. But I think we can do this if we just beat up enough of his lackies I'm sure we can collect the momey he wants before Mario gets back!");
        $("#instructions4").text("You'll help me right? I'm sure if we fulfill at least 5 of his ransom notes we will be able to get the princess back!");
        $("#instructions5").text("Please help me! Your friend, Luigi");
        $("#title").text("It's a me! Luigi!");
        $("#score").text(score);
        $("#winCounter").text("Wins: " + wins);
        $("#lossCounter").text("Losses: " + losses);
        $("#random-number").text("i nEed " + computerNumber + " monies and iLl give yu back the pwincess.. i pwomise, LuV, boWser jR");
        $("body").css('background-image', "url(assets/images/Peachs_castle.png)");
        $("body").css("background-size", "cover");
        $("body").css("background-repeat", "no-repeat");
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
        $("#fight").css("display", "none");
        $("#replay").css("display", "none");
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
                $("#random-number").text("WHHHHAATTTT!!???? How did you get all thoSe Monies!?? fIne yu can haS the Pwincess, sheS gRoss anyways...");
                $("#instructions3").text("You did it! I'm saved!! I mean WE'RE saved!! Now mario never has to find out that I lost the princess! Wait.. where is she though?? ");
                $("#instructions1").text("");
                $("#instructions2").text("");
                $("#instructions4").text("");
                $("#instructions5").text("");
                $("#switchGames").text("Shh.. Click here for a better game!");
                $("#switchGames").toggle();
            } else if (wins < 5) {
                $("#random-number").text("BWah HA hA You thought I'd give you the pWincess THAT fast? I neeD " + computerNumber + " mOre monies!");
            }
        } else if (score > computerNumber) {
            losses++;
            resetGame();
            $("#winLossText").text("You lost!");
            $("#lossCounter").text("Losses: " + losses);
            $("#random-number").text("wHat is thAt? iF yu caN't geT me wAt i want Yu won't Get tHE pwincess. gET me " + computerNumber + " monIes!");
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

    // variables for second game
    var attack = 8;
    var enemyAttack = 0;
    var characterHealth = 0;
    var enemiesDefeated = 0;
    var setCharacter = 0;
    var setEnemy = 0;

    // function to set up game 2
    function setGame2() {
        $("#instructions1").text("Character Choice");
        $("#instructions2").text("Enemies available to attack");
        $("#instructions3").text("Fight section");
        $("#instructions4").text("Defender");
        $("#instructions5").text("");
        $("#title").text("Lord Of the Rings RPG");
        $("body").css("background-image", "url(assets/images/lotr.jpg)");
        $("body").css("background-size", "cover");
        $("body").css("background-repeat", "no-repeat");
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
        $("#fight").css("display", "block");
        $("#fight").text("Attack!");
    };

    // functions for second game for what happens on click of a character's picture
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
            $("#frodoHealth").addClass("currentCharacter");
            characterHealth = 100;
            setCharacter = 1;
        } else {
            if (setEnemy === 0) {
                $("#one").css("background-color", "black");
                $("#one").appendTo("#currentFighter");
                $("#frodoHealth").css("color", "white");
                $("#frodo").css("color", "white");
                $("#frodoHealth").addClass("currentEnemy");
                enemyHealth = 100;
                enemyAttack = 5;
                setEnemy = 1;
            }

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
            $("#samHealth").addClass("currentCharacter");
            characterHealth = 120;
            setCharacter = 2;
        } else {
            if (setEnemy === 0) {
                $("#two").css("background-color", "black");
                $("#two").appendTo("#currentFighter");
                $("#samHealth").css("color", "white");
                $("#sam").css("color", "white");
                $("#samHealth").addClass("currentEnemy");
                enemyHealth = 120;
                enemyAttack = 15;
                setEnemy = 2;
            }
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
            $("#legolasHealth").addClass("currentCharacter");
            characterHealth = 150;
            setCharacter = 3;
        } else {
            if (setEnemy === 0) {
                $("#three").css("background-color", "black");
                $("#three").appendTo("#currentFighter");
                $("#legolasHealth").css("color", "white");
                $("#legolas").css("color", "white");
                $("#legolasHealth").addClass("currentEnemy");
                enemyHealth = 150;
                enemyAttack = 20;
                setEnemy = 3;
            }
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
            $("#gimliHealth").addClass("currentCharacter");
            characterHealth = 180;
            setCharacter = 4;
        } else {
            if (setEnemy === 0) {
                $("#four").css("background-color", "black");
                $("#four").appendTo("#currentFighter");
                $("#gimliHealth").css("color", "white");
                $("#gimli").css("color", "white");
                $("#gimliHealth").addClass("currentEnemy");
                enemyHealth = 180;
                enemyAttack = 25;
                setEnemy = 4;
            }
        }
    });

    // function to check for win or loss
    checkForLosses = function () {
        if (characterHealth > 0) {
            if (enemyHealth <= 0) {
                if (enemiesDefeated === 2) {
                    $("#instructions5").text("You defeated ALL the enemies! Click replay to play again!");
                    $("#replay").css("display", "block");
                    $("#replay").text("replay");
                    $("#currentFighter").css("display", "none");
                } else {
                    $("#instructions5").text("You defeated an enemy. You can pick a new enemy to fight!");
                    switch (setEnemy) {
                        case 1:
                            $("#one").css("display", "none");
                            setEnemy = 0;
                            enemiesDefeated += 1;
                            break;
                        case 2:
                            $("#two").css("display", "none");
                            setEnemy = 0;
                            enemiesDefeated += 1;
                            break;
                        case 3:
                            $("#three").css("display", "none");
                            setEnemy = 0;
                            enemiesDefeated += 1;
                            break;
                        case 4:
                            $("#four").css("display", "none");
                            setEnemy = 0;
                            enemiesDefeated += 1;
                            break;
                    }
                }
            }
        } else {
            $("#instructions5").text("You lost all your health! You lose! Hit replay to play again.");
            $("#replay").css("display", "block");
            $("#replay").text("replay");
            $("#fight").css("display", "none");
        }
    };
    
    // function for attacking
    $("#fight").on("click", function () {
        if (setEnemy === 0) {
            $("#instructions5").text("There is no enemy to attack yet...");
        } else {
            $(".currentEnemy").text(enemyHealth -= attack);
            $(".currentCharacter").text(characterHealth -= enemyAttack);
            $("#instructions5").text("You attacked for " + attack + " hit points, and you took " + enemyAttack + " points of damage.");
            attack += 8;
            checkForLosses();
        }
    });

    //function for resetting the game to play again
    $("#replay").on("click", function () {
        setGame2();
        attack = 8;
        enemyAttack = 0;
        characterHealth = 0;
        setCharacter = 0;
        setEnemy = 0;
        enemiesDefeated = 0;
        $("#one").appendTo($("#characterChoices"));
        $("#two").appendTo($("#characterChoices"));
        $("#three").appendTo($("#characterChoices"));
        $("#four").appendTo($("#characterChoices"));
        $("#one").css("display", "block");
        $("#two").css("display", "block");
        $("#three").css("display", "block");
        $("#four").css("display", "block");
        $("#frodoHealth").text("100");
        $("#samHealth").text("120");
        $("#legolasHealth").text("150");
        $("#gimliHealth").text("180");
        $("#instructions5").text("");
        $("#one").css("background-color", "white");
        $("#two").css("background-color", "white");
        $("#three").css("background-color", "white");
        $("#four").css("background-color", "white");
        $("#one").css("border", "green solid 2px");
        $("#two").css("border", "green solid 2px");
        $("#three").css("border", "green solid 2px");
        $("#four").css("border", "green solid 2px");
        $("#frodoHealth").css("color", "black");
        $("#samHealth").css("color", "black");
        $("#legolasHealth").css("color", "black");
        $("#gimliHealth").css("color", "black");
        $("#frodo").css("color", "black");
        $("#sam").css("color", "black");
        $("#legolas").css("color", "black");
        $("#gimli").css("color", "black");
        $("#frodoHealth").removeClass("currentEnemy");
        $("#samHealth").removeClass("currentEnemy");
        $("#legolasHealth").removeClass("currentEnemy");
        $("#gimliHealth").removeClass("currentEnemy");
        $("#frodoHealth").removeClass("currentCharacter");
        $("#samHealth").removeClass("currentCharacter");
        $("#legolasHealth").removeClass("currentCharacter");
        $("#gimliHealth").removeClass("currentCharacter");
        $("#replay").css("display", "none");
    });
});