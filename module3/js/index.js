
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const login = prompt("Введите пароль длиной от 4 до 16 символов");

const checkLoginValidity = function(login) {
  let result = login.length < 4 || login.length > 16 ? false : true;
  return result;
};
console.log(checkLoginValidity(login));

const checkIfLoginExists = function(logins, login) {
  let result;
  for (const value of logins) {
    if (value === login) {
      result = true;
      break;
    } else {
      result = false;
      break;
    }
  }
  return result;
};

console.log(checkIfLoginExists(logins, login));

const addLogin = function (logins, login) {
  const valid = checkLoginValidity(login);

  if (valid) {
    const exists = checkIfLoginExists(logins, login);
    if (exists) {
      alert( "Такой логин уже используется!");
    } else {
      alert ("Логин успешно добавлен!");
      logins.push(login);
    }
  } else {
    alert ("Ошибка! Логин должен быть от 4 до 16 символов");
  }
  return alert;
};
addLogin(logins, login);
console.log(logins);
