const menu = document.querySelector('.nav-container');
    const a= document.querySelectorAll('.nav-link');
    const name = document.querySelector('.name');

    window.addEventListener('scroll', function () {
        let desplazamientoY= pageYOffset;
        if (desplazamientoY>50) {
            menu.classList.add('opaque');
            name.style.color='black';
            for (let i = 0; i < a.length; i++) {
                const color = a[i];
                color.style.color='black';
            }
        }
        else{
            menu.classList.remove('opaque');
            name.style.color='white';
            for (let i = 0; i < a.length; i++) {
                const color = a[i];
                color.style.color='white';
            }
        }
    });

    $('a').click(function() {
        var sectionTo = $(this).attr('href');
        $('.navbar-collapse').collapse('hide');
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1000);
    });


/*     $(document).ready(function() {
        var $link = $('#menu').find('a');
        $link.click(function() {
        });
    }); */
/*     $(window).scroll(function() {
        if($(this).scrollTop() > 50)
        {
            $('.opaque-navbar').addClass('opaque');
        } else {
            $('.opaque-navbar').removeClass('opaque');
        }
    }); */








