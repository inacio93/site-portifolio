let btnMenu = document.getElementById('btn-menu')//declarando as variaveis pelo id
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{//abre o menu quando clica nas tres barrinhas
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{//fecha o menu quando clica em uma das opçoes ou no X
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{//fecha o menu quando clica fora do menu
    menu.classList.remove('abrir-menu')
})

