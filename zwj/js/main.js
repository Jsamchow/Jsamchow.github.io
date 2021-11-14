(function() {
    function cpp() {
        let countUp = window.countUp.CountUp;
        [{ num: 20170319, s: '.cm-countup4' }, { num: 440440760, s: '.cm-countup1' }, { num: 126500, s: '.cm-countup2' }, { num: 56789, s: '.cm-countup3' }].forEach((v, i) => {
            let c = document.querySelector(v.s)
            let cp = new countUp(c, v.num)
            cp.start(res => {
                console.log(res)
                console.log(cp.error)
            })
        })
    }
    cpp();

    function sp() {
        var mySwiper = new window.Swiper('.swiper', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
    }
    sp();

    function mediaquery() {
        let deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth < 1000) {
            if (deviceWidth > 750) {
                deviceWidth = 750;
            }
            document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
        } else {
            document.documentElement.style.fontSize = "16px";
        }
    }
    mediaquery();
    Array.from(document.querySelectorAll('.cm-faq-item')).forEach(v => {
        v.addEventListener('click', res => {
            if (v.dataset.open == 1) {
                v.dataset.open = 0
            } else {
                v.dataset.open = 1
            }
        }, false)
    })
})()