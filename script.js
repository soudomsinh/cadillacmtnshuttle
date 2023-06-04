

// change color when scrolling
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $nav.find('.nav-link').toggleClass('text-white', $(this).scrollTop() > $nav.height());
    });
});

/* Jumps to certain section click the navbar certain link */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let navbarHeight = document.querySelector('.navbar').offsetHeight;
        let target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});




