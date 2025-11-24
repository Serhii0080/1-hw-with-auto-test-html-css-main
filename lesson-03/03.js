// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(number1, number2, number3) {
    if (number1 >= number2 && number1 >= number3) {
        return number1;
    }

    if (number2 >= number3 && number2 >= number1) {
        return number2;
    }

    if (number3 >= number2 && number3 >= number1) {
        return number3;
    } else {
        return number1;
    }
}
console.log(findLargest(0, 1, 1));
