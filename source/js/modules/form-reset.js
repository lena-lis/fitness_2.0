const formElement = document.querySelector('[data-form]');

// очистка полей формы

formElement.addEventListener('submit', (evt) => {
  // Отключаем событие по умолчанию
  evt.prevent.default();
  // Очищаем поля формы
  evt.target.reset();
});
