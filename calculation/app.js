


function calculateResult() {
    var number1 = document.getElementById("number1").value
    var number2 = document.getElementById("number2").value

    var sum = Number.parseInt(number1) + Number.parseInt(number2);

    document.getElementById("result").innerText = sum
}

