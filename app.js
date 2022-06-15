var count = 0;
var looprandom = Math.random() * 6;
var loopround = Math.round(looprandom);
console.log(loopround);
if (loopround <= 2 || loopround >= 7) {
    location.reload();
}

else {


    function RandomWords() {

        var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var letters = [];
        var userValue = document.getElementById("userValue").value;

        if (userValue.length >= 3 && userValue.length <= 6) {

            for (var i = 0; i <= loopround - 1; i++) {
                var randoms = Math.random(alphabets) * 25;
                var rounds = Math.round(randoms)
                // console.log(rounds)
                letters.push(alphabets[rounds]);

            }
            console.log(letters)
            count++;
            document.getElementById("userValue").value = " ";
            var vu = letters.join();
            vu = vu.replace(/,/g, "")
            console.log(vu)
            if (vu === userValue) {
                alert("You Win, Game Over");
                location.reload()

            }
            else if (vu !== userValue && count <= 2) {
                alert("Try Again, You have more tries")
                alert("Correct Word was: " + vu + "\r\nHint: The Word is of " + vu.length + " Cahracters")
            }
            else {
                alert("you Lose, Game Over");
                location.reload();
                
            }
            console.log(count)
        }
        else {
            alert("Provide a vlaue bigger than 2 and smaller than 7")
        }

    }

}

letters = []

