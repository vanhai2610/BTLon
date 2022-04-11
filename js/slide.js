$(() => {
    $('.next').click(function () {
        changeImage('next');
    })
    $('.prev').click(function () {
        changeImage('prev');
    })
    function changeImage(type) {
        let imgSelectVisible = $('img.slide-item:visible');
        // let imgVisible = parseInt(imgSelectVisible.attr('number'));
        let imgVisible =imgSelectVisible.attr('number');
        console.log(imgVisible);
        let eqNumber = type === 'next' ? imgVisible + 1 : imgVisible - 1;

        if (imgVisible === 0) {
            eqNumber = $('.slide-item').length - 1;
        }
        if (eqNumber >= $('.slide-item').length) {
            eqNumber = 0
        }
        $('img.slide-item').eq(eqNumber).fadeIn();
        imgSelectVisible.fadeOut();
    }
})