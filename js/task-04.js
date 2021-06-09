const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const valueSpan = document.querySelector('#value');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
    const counter = +valueSpan.textContent - 1;
    valueSpan.textContent = `${counter}`;
})

incrementBtn.addEventListener('click', () => {
    const counter = +valueSpan.textContent + 1;
    valueSpan.textContent = `${counter}`;
})