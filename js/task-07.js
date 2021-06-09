const inputValue = document.getElementById('font-size-control');
const spanText = document.getElementById('text');

inputValue.addEventListener('input', () =>
    spanText.style.fontSize = `${inputValue.value}px`
)