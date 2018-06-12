const ADMIN_LOGIN = prompt('Ваш логин');
const cancelled = 'Отменено пользователем!';
const denied = 'Доступ запрещен!';

if (ADMIN_LOGIN === 'admin') {
  const ADMIN_PASSWORD = prompt ('Ваш пароль');
  if (ADMIN_PASSWORD === null) {
    alert (cancelled);
  } else if (ADMIN_PASSWORD === 'm4ngo1zh4ackz0r') {
    alert ('Добро пожаловать!');
  } else {
    alert ('denied')
  }
} else if (ADMIN_LOGIN === null) {
  alert (cancelled);
} else {
  alert (denied);
}