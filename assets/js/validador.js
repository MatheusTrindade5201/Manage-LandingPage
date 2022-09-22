const submit = document.getElementById('submit');
const email = document.getElementById('email');
const regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)

submit.addEventListener('click', function(e){
    e.preventDefault();
    const email = document.getElementById('email');
    let valid = true;
    if(!email.value || !regex.test(email.value)){
        const erro = document.getElementById('mensagem__erro');
        erro.classList.add('erro__visivel');
        email.classList.add('updates__texto-erro')
    }else{
        const erro = document.getElementById('mensagem__erro');
        erro.classList.remove('erro__visivel');
        email.classList.remove('updates__texto-erro');
        email.value = '';
    }
    return valid
})



