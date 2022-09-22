const menuH = document.getElementById('menu-hamburguer');
menuH.addEventListener('click',function(){
    const background = document.getElementById('back');
    background.classList.toggle('back')
})