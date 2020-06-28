// var menu = document.querySelector(".div-drop-down-content");

// var divMenu  = document.querySelector(".div-dropdown-menu");

// divMenu.addEventListener("mouseover" ,() =>
// {
//     $(menu).slideDown(250);
// });

// divMenu.addEventListener("mouseout",() =>
// {
//     $(menu).slideUp(250);
// }
// );

var hamburgerMenu = document.querySelector(".hamburger-menu");
var list = document.querySelector(".div-nav ul");
var li = $(list).addClass("active").hide();
var closeMenu = document.querySelector(".close-menu");
hamburgerMenu.addEventListener("click",() =>
{
    $(li).slideDown(1000);
    $(closeMenu).fadeIn(1100);
    $(hamburgerMenu).fadeOut(1000);
});

closeMenu.addEventListener("click",() =>
{
    $(li).slideUp(1000);
    $(closeMenu).fadeOut(1000);
    $(hamburgerMenu).fadeIn(1000);
    
});
