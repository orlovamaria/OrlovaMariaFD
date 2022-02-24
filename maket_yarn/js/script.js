//slider

$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 5,
        speed: 500,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1740,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1535,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1227,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1227,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


//Стрелки формы

$(document).ready(function(){
    $('.block-title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

// Анимация объектов страниц

const animitems = document.querySelectorAll('._anim-items');

if (animitems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animitems.length; index++) {
            const animitem = animitems[index];
            const animitemHeight = animitem.offsetHeight;
            const animitemOffset = offset(animitem).top;
            const animStart = 4;

            let animitemPoint = window.innerHeight - animitemHeight / animStart;

            if (animitemHeight > window.innerHeight) {
                animitemPoint = window.innerHeight - animitemHeight / animStart;
            }

            if ((pageYOffset > animitemOffset - animitemPoint) && pageYOffset < (animitemOffset + animitemHeight)) {
                animitem.classList.add('_active');
            } else {
                if(!animitem.classList.contains('_anim-no-hide')) {
                    animitem.classList.remove('_active');
                }
                animitem.classList.remove('_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
           scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
           scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout (() => {
        animOnScroll();
    }, 300);
}


//бургер

$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, .menu-first-level').toggleClass('__active');
        $('body').toggleClass('lock');
    });
});

//Выпадающее меню

//let isMobile = {
	//Android: function() {return navigator.userAgent.match(/Android/i);},
	//BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	//iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	//Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	//Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	//any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
//};
		//let body=document.querySelector('body');
//if(isMobile.any()){
		//body.classList.add('touch');
		//let arrow=document.querySelectorAll('.arrow');
	//for(i=0; i<arrow.length; i++){
			//let thisLink=arrow[i].previousElementSibling;
			//let subMenu=arrow[i].nextElementSibling;
			//let thisArrow=arrow[i];

			//thisLink.classList.add('parent');
		//arrow[i].addEventListener('click', function(){
			//subMenu.classList.toggle('open');
			//thisArrow.classList.toggle('active');
		//});
	//}
//}else{
	//body.classList.add('mouse');