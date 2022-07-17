const inputs = document.querySelectorAll('.input')
const button = document.querySelector('.login-button')


// adiciona a classe .span-active quando o input estiver em focus //
const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

// remove a classe .span-active quando o input estiver em focus para ficar com o span na estilização normal //
const handleFocusout = ({ target }) => {
    if(target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

// ativar o botão para prosseguir o login somente se tiver algo escrito no username e a senha for maior que 8 digitos  //
const handleChange = () => {
     const [username, password] = inputs;

     if(username.value && password.value.length >= 8) {
        button.removeAttribute('disabled');
     } else {
        button.setAttribute('disabled', '');
     }
}

// Quando o input estiver com o atributo 'focus' realizar essa função handleFocus //
inputs.forEach((input) => input.addEventListener('focus', handleFocus));

// Quando o input estiver com o atributo 'focusout' realizar essa função handleFocusout //
inputs.forEach((input) => input.addEventListener('focusout', handleFocusout));

// Quando o input estiver com o atributo 'input' realizar essa função handleChange //
inputs.forEach((input) => input.addEventListener('input', handleChange));

// Mudar wallpapers //

let classe = document.getElementById('wlpp');

function mudaWallpaper(cls) {
    classe.classList.remove('wallpaper');
    classe.classList.add('wallpaper2');
}

function mudaWallpaper2(cls) {
    classe.classList.remove('wallpaper2');
    classe.classList.add('wallpaper');
}

