const textImput = document.getElementById('name-input');
const spanName = document.getElementById('name-output');
textImput.addEventListener('input', () =>

    (textImput.value.length === 0) ? spanName.textContent = 'незнакомец' :
        spanName.textContent = textImput.value
);

