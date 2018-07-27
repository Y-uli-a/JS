
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const login = prompt("Введите пароль длиной от 4 до 16 символов");

const checkLoginValidity = login =>
   (login.length >= 4 && login.length <= 16);

console.log(checkLoginValidity(login));

const checkIfLoginExists = (logins, login) =>
logins.includes(login);


console.log(checkIfLoginExists(logins, login));

const addLogin = function (logins, login) {
  const isLoginValid = checkLoginValidity(login);

  if (isLoginValid) {
    const doesLoginExist = checkIfLoginExists(logins, login);
    if (doesLoginExist) {
      alert( "Такой логин уже используется!");
    } else {
      alert ("Логин успешно добавлен!");
      logins.push(login);
    }
  } else {
    alert ("Ошибка! Логин должен быть от 4 до 16 символов");
  }
};
addLogin(logins, login);
console.log(logins);
