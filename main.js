// Reload Fuction
function reloadPage() {
    location.reload();
}

// Random Number Fuction
function getRandomInt(max) {
    let r = Math.floor(Math.random() * max);
    r = Number.parseInt(r);
    return r;
}

// Input Fuction
function enterBtn() {
    let x = document.getElementById("input-number").value;
    document.getElementById("enter-number").innerHTML = x;
    x = Number.parseInt(x);
    if(x>=0 && x <= 10){
            document.getElementById("invalid-number").innerText = " ";
    }
    else{
        document.getElementById("invalid-number").innerText = "Please Enter A Vailid Number";
        document.getElementById("winner").innerText = " "
        document.getElementById("time-out").innerText = " "
    }
    return x;
}

let guesses = 0;
let num = enterBtn()
document.getElementById("invalid-number").innerText = " ";

// Play Function
function play() {
    guesses++;
    let randomNum = getRandomInt(10);
    document.getElementById("randam-number-is").innerHTML = randomNum;
    console.log(num)
    if (num == randomNum) {
        document.getElementById("winner").innerText = "You Are a Winner"
        document.getElementById("time-out").innerText = "Congratulations..!"
        document.getElementById("guesses").innerText = guesses;
        if (num == randomNum) {
            guesses = 0;
        }
    }
    else if (num != randomNum) {
        document.getElementById("winner").innerText = "Ohh..! You Missed"
        document.getElementById("time-out").innerText = "Play Again"
        num = enterBtn()
        // guesses++;
        document.getElementById("guesses").innerText = guesses;
    }
    else{
        document.getElementById("invalid-number").innerText = "Pleas Enter A Vailid Number";
    }
}
