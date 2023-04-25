
// var ==========================
let btn = document.querySelector('.btn');
let video = document.querySelector('.video');
let vid = document.getElementById("about_video");

let lang_drop = document.querySelector(".lang_drop");
let lang_current = document.querySelector(".lang_current");

let burger = document.querySelector(".burger");
let nav_bg = document.querySelector(".nav_bg");

let service_nav_link = document.querySelector(".service_nav-link");
let service_nav = document.querySelector(".service_nav");


function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


window.onscroll = function () {
    scrollPosition = Math.round(window.scrollY);

    if (scrollPosition > 100) {
        document.querySelector('.header').classList.add('stick');
    } else {
        document.querySelector('.header').classList.remove('stick');
    }
};

window.onclick = function (e) {

    // drop_lang.forEach(drop_lang => {
    //     if (drop_lang != undefined) {
    //         drop_lang.classList.contains('active') && !e.target.closest('.nav_inner');
    //         drop_lang.classList.remove('active')
    //     }
    // }
    // );

    // if (drop_lang.classList.contains('active') && !e.target.closest('.lang_box')) {
    //     drop_lang.classList.remove('active')
    // }

    if (nav_bg.classList.contains('active') && !e.target.closest('.burger') && !e.target.closest('.lang_current') && !e.target.closest('.service_nav-link')) {
        nav_bg.classList.remove('active')
    }

    if (burger.classList.contains('active') && !e.target.closest('.burger') && !e.target.closest('.lang_current') && !e.target.closest('.service_nav-link')) {
        burger.classList.remove('active')
    }

    if (lang_drop.classList.contains('active') && !e.target.closest('.lang_current')) {
        lang_drop.classList.remove('active')
    }

    if (service_nav.classList.contains('active') && !e.target.closest('.service_nav-link')) {
        service_nav.classList.remove('active')
    }

}


// Clicks ======================================================

if (lang_current != undefined) {
    lang_current.addEventListener('click', function () {
        sleep(2).then(() => {
            lang_drop.classList.toggle('active');
        });
    });
}


if (burger != undefined) {
    burger.addEventListener('click', function () {
        sleep(2).then(() => {
            nav_bg.classList.toggle('active');
            burger.classList.toggle('active');
        });
    });
}

if (service_nav_link != undefined) {
    service_nav_link.addEventListener('click', function () {
        sleep(2).then(() => {
            service_nav.classList.toggle('active');
        });
    });
}
