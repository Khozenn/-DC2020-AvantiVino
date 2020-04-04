var boutonBurgerOn = document.getElementsByClassName('btn_menu_on');
var menuBurger = document.getElementsByClassName('container_menu_burger');
var boutonBurgerOff = document.getElementsByClassName('btn_menu_off');


boutonBurgerOn[0].addEventListener('click', function(){
    menuBurger[0].style.display = "block";
})

boutonBurgerOff[0].addEventListener('click', function(){
    menuBurger[0].style.display = "none";
})