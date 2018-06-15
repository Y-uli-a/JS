const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
let password;
const cancelled = 'Отменено пользователем!';
const denied = 'Доступ запрещен!';
const login = prompt('Ваш логин');

if (login === ADMIN_LOGIN) {
  password = prompt('Ваш пароль');
  if (password === null) {
    alert(cancelled);
  } else if (password === ADMIN_PASSWORD) {
    alert('Добро пожаловать!');
  } else {
    alert(denied)
  }
} else if (login === null) {
  alert(cancelled);
} else {
  alert(denied);
}
