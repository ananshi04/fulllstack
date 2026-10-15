
function checkFizzBuzz() {
    let n = Number(document.getElementById("num").value);

    if (n % 3 == 0 && n % 5 == 0) {
        document.getElementById("result").innerHTML = "FizzBuzz";
    }
    else if (n % 3 == 0) {
        document.getElementById("result").innerHTML = "Fizz";
    }
    else if (n % 5 == 0) {
        document.getElementById("result").innerHTML = "Buzz";
    }
    else {
        document.getElementById("result").innerHTML = n;
    }
}
