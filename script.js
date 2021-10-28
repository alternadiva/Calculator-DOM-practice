
const bSum = document.getElementById("b1");
const bSubtract = document.getElementById("b2");
const bDivide = document.getElementById("b3");
const bMultiply = document.getElementById("b4");
const bPower = document.getElementById("b5");
const bSquareRoot = document.getElementById("b6");


function numSum(num1, num2) {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
  
    let output = num1 + num2;

    document.getElementById("result").value = output;
    document.getElementById("buttonResult").innerHTML = document.getElementById("b1").innerHTML;
    
}

function numSubtract(num1, num2) {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
  
    let output = num1 - num2;

    document.getElementById("result").value = output;
    document.getElementById("buttonResult").innerHTML = document.getElementById("b2").innerHTML;
    
}

function numDivide(num1, num2) {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
  
    let output = num1 / num2;

    document.getElementById("result").value = output;
    document.getElementById("buttonResult").innerHTML = document.getElementById("b3").innerHTML;
    
}

function numMultiply(num1, num2) {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
  
    let output = num1 * num2;

    document.getElementById("result").value = output;
    document.getElementById("buttonResult").innerHTML = document.getElementById("b4").innerHTML;
    
}

function numPower(num1, num2) {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
  
    let output = Math.pow(num1, num2);

    document.getElementById("result").value = output;
    document.getElementById("buttonResult").innerHTML = document.getElementById("b5").innerHTML;
    
}

function numSquareRoot(num1, num2) {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
  
    let output = Math.sqrt(num1);

    document.getElementById("result").value = output;
    document.getElementById("buttonResult").innerHTML = document.getElementById("b6").innerHTML;
    document.getElementById("num2").value = "-";

}

bSum.addEventListener("click", numSum);
bSubtract.addEventListener("click", numSubtract);
bDivide.addEventListener("click", numDivide);
bMultiply.addEventListener("click", numMultiply);
bPower.addEventListener("click", numPower);
bSquareRoot.addEventListener("click", numSquareRoot);


