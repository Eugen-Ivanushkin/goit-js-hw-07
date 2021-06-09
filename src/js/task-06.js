const textInput = document.getElementById('validation-input');
const dataValue = textInput.dataset.length;

// textInput.addEventListener('blur', () =>
//     (textInput.value.length === dataValue) ?
//         textInput.classList.add('valid') :
//         textInput.classList.add('invalid')

// );


textInput.addEventListener('blur', () => {
    if (textInput.value.length == dataValue) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }
});