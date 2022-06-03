var p=document.getElementsByTagName("p");

p[0].addEventListener("click", function(){
    p[0].innerHTML="Вы попали на сайт Института Океанологии";
    p[0].classList.toggle("newsClickedStyle1");
})
