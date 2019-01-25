
document.addEventListener('DOMContentLoaded', (event) =>{

    hamburgerMenu();
    smoothScroll();
    subMenu();
    showSubMenu();
    resize();
    dotSlider();
    
    function smoothScroll() {

        const arrow = document.querySelector('.arrow-down');
        const intro = document.querySelector('.intro');

        arrow.addEventListener('click', () =>{

        intro.scrollIntoView({block: 'start', behavior: 'smooth'});

        });

    };


    function hamburgerMenu() {

        const hamburger = document.querySelector('.hamburger');
        const topline = document.querySelector('.topline');
        const midline = document.querySelector('.midline');
        const bottline = document.querySelector('.bottline');
        const nav = document.querySelector('.nav');
        const menu = document.querySelector('.menu');
        const submenu = document.querySelector('.submenu');

        hamburger.addEventListener('click', () =>{

            hamburger.classList.toggle('active');
            topline.classList.toggle('rotateplus');
            midline.classList.toggle('hide');
            bottline.classList.toggle('rotateminus');
            nav.classList.toggle('show');
            menu.classList.toggle('menu-show');

            if(!hamburger.classList.contains('active')) {

                submenu.classList.remove('show');
            }
    
        });
    };


    function subMenu(){

        const mobileWidth = window.innerWidth<1000;
        const dropdown = document.querySelector('.dropdown');

        if(mobileWidth) {
            dropdown.classList.add('show-sub');
        }

    }

    function showSubMenu(){

        const dropdown = document.querySelector('.dropdown');
        const drop = document.querySelector('.drop');
        const submenu = document.querySelector('.submenu');
    
        
        drop.addEventListener('click', () => {

            if(dropdown.classList.contains('show-sub')) {
                submenu.classList.toggle('show');
            }

        });



    }


    function resize(){

        window.addEventListener('resize', () =>{

        const dropdown = document.querySelector('.dropdown');
        const submenu = document.querySelector('.submenu');
        const menu = document.querySelector('.menu');
        const hamburger = document.querySelector('.hamburger');
        const topline = document.querySelector('.topline');
        const midline = document.querySelector('.midline');
        const bottline = document.querySelector('.bottline');
        const nav = document.querySelector('.nav');
     

        if ( window.innerWidth>1000 ) {
            submenu.classList.remove('show');
            dropdown.classList.remove('show-sub');

        }

        if( window.innerWidth>1000 && hamburger.classList.contains('active') ) {

            hamburger.classList.remove('active');
            topline.classList.remove('rotateplus');
            midline.classList.remove('hide');
            bottline.classList.remove('rotateminus');
            nav.classList.remove('show');
            menu.classList.remove('menu-show');

        }

        else {
            dropdown.classList.add('show-sub');
        }

    });


    }

    
        
    const $boxes =$('.boxes');

    function boxes(){

        $.ajax ({

            type: 'GET',
            dataType: 'JSON',
            url: 'dist/json/boxes.json',
        
        })

        .done(ret => {
            
            ret.forEach(user => {
                const $box = $(`
                <div class="box">
                <div class="box-content">
                <span class="icon-box"><i class='fas ${user.icon}'></i></span>
                    <h3 class="box-title">${user.title}</h3>
                    <p class="box-description">${user.description}</p>
                    <a class="button-box" href=${user.button.link}>${user.button.text}</a>

                </div>
                </div>
                `);

                $boxes.append($box);
            
                });

        });


    }

    boxes();

    function dotSlider(){

        const slider = document.querySelectorAll('.slide');
        const dots = document.querySelector('.slider-dots');
        const dot = dots.querySelectorAll('.dots');
        let currentDot = 'slider1';
        
        
        dots.addEventListener('click', (e) => {
        
                if (e.target.className == 'dots')  {

                        if(currentDot != e.target.dataset.id) {

                            let activeDot = e.target;
                            let clickedDot = e.target.dataset.id
                            let bg = clickedDot;

                            currentDot = clickedDot;

                            for (let i = 0; i<slider.length; i++) {

                                slider[i].classList.remove('opacity');
                                dot[i].classList.remove('activedot');

                            }

                            activeDot.classList.add('activedot');
                            document.querySelector('.'+bg).classList.add('opacity');
                    }
                }
            });
        }
    
});

