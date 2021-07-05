function calcMain(callback) {
    let num1 = +prompt("Введите первое число");
    let num2 = +prompt("Введите второе число");
    callback(num1, num2)
}

function calcPow(a, b) {
    let result = a ** b
    return alert(result);
}
function calcMultiplay(a, b) {
    let result = a * b
    return alert(result);
}
function calcDivision(a, b) {
    let result = a / b
    return alert(result);
}
function calcmodulo(a, b) {
    let result = a % b
    return alert(result);
}


calcMain(calcPow);
calcMain(calcMultiplay);
calcMain(calcDivision);
calcMain(calcmodulo);