let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt('Введите число');
  if (userInput == +userInput) {
    numbers.push(+userInput)
  } else if (userInput !== null) alert('Было введено не число, попробуйте еще раз');

} while (userInput !== null);

for (const value of numbers) {
  total = total + value;
}
if (total !== 0) {
  alert(`Общая сумма чисел равна ${total}`)
}
console.log(numbers);
