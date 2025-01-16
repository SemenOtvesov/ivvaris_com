/*
$(document).ready(
    function(){
        $('.header__burger').click(
            function (event) {
                $('div.header__burger').toggleClass('header__burger_close');
                $('nav.header__menu').toggleClass('header__menu_phone');
            }
        );
    }
);
*/
$(document).ready(
    function(){
        $('.hover-text-one').on('click',
            function (e) { 
                el = e.currentTarget;
                
                imgPath = el.querySelector('img').getAttribute('src');
                imgName = el.querySelector('h3').textContent;
                imgAbout = el.querySelector('p').textContent;

                localStorage.setItem('imgPath', imgPath);
                localStorage.setItem('imgName', imgName);
                localStorage.setItem('imgAbout', imgAbout);

                window.location.href = 'image.html';
            }
        );
    }
);