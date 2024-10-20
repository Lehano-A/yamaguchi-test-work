const tablePartTop = document.querySelector('#tablePartTop'); // верхняя часть стола
const buttonTop = document.querySelector('#buttonTop'); // кнопка "вверх"
const buttonBottom = document.querySelector('#buttonBottom'); // кнопка "вниз"

let isAnimating = false; // происходит ли сейчас анимация?

// слушаем клик кнопки "вверх"
buttonTop.addEventListener('click', () => {
  if (isAnimating) return;

  tablePartTop.classList.remove('translate-bottom');
  tablePartTop.classList.add('translate-top');
});

// слушаем клик кнопки "вниз"
buttonBottom.addEventListener('click', () => {
  // если происходит анимация или верхняя часть стола не имеет класса "translate-top"
  if (isAnimating || !tablePartTop.classList.contains('translate-top')) return;

  tablePartTop.classList.remove('translate-top');
  tablePartTop.classList.add('translate-bottom');
});

// слушаем начало анимации
tablePartTop.addEventListener('animationstart', () => {
  isAnimating = true;
});

// слушаем конец анимации
tablePartTop.addEventListener('animationend', () => {
  isAnimating = false;
});
