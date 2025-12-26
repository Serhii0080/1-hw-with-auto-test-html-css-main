/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

const str = "hello world from javascript";

function capitalizeWords(s) {
    let caunter = 0;
    let string = "";

    for (let i = 0; i < s.length; i++) {
        if (caunter === 1) {
            string += s[i].toUpperCase();
        } else if (i === 0) {
            string += s[i].toUpperCase();
        } else {
            string += s[i];
        }
        if (s[i] === " ") {
            caunter = 1;
        } else {
            caunter = 0;
        }
    }
    return string;
}

console.log(capitalizeWords(str));
