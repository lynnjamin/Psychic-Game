var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var userGuess = "";
        var guessedLetter = "";
        var wins = 0;
        var losses = 0;
        var guesses = 9;
        var randomizedChoices = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        function reset() {
            guesses = 10;
            document.getElementById('user-guesses').innerHTML = guesses;
            guessedLetter = "";
            randomizedChoices = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }

        document.onkeyup = function (event) {
            userGuess = event.key;
            console.log(randomizedChoices);
            if (computerChoices.indexOf(userGuess) >= 0) {
                if (guessedLetter === "") {
                    guessedLetter = userGuess; // k
                } else {
                    guessedLetter = guessedLetter + ", " + userGuess; // k, t
                }
                document.getElementById("user-guess").innerHTML = guessedLetter;
                if (userGuess === randomizedChoices) {
                    wins++;
                    document.getElementById('win-input').innerHTML = wins;
                    reset();
                } else {
                    guesses--;
                    document.getElementById('user-guesses').innerHTML = guesses;
                }
                if (guesses === 0) {
                    losses++;
                    document.getElementById('loss-input').innerHTML = losses;
                    reset();
                }
            }
        }