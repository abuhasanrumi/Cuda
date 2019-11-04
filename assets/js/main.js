

function openNav() {
    document.getElementById("myNav").style.width = "100%"
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%"
}
$("a").on("click", function(t) {
    if ("" !== this.hash) {
        t.preventDefault();
        var o = this.hash;
        $("html, body").animate({
            scrollTop: $(o).offset().top
        }, 800, function() {
            window.location.hash = o
        })
    }
}), AOS.init(), $('[data-spy="scroll"]').each(function() {
    $(this).scrollspy("refresh")
}), $(window).scroll(function() {
    $(this).scrollTop() > 0 ? $(".header").addClass("sticky") : $(".header").removeClass("sticky")
}), $(function() {
    $(".portfolio-items").isotope({
        itemSelector: ".port-img",
        layoutMode: "fitRows"
    }), $(".portfolio-menu ul li").click(function() {
        $(".portfolio-menu ul li").removeClass("active"), $(this).addClass("active");
        var t = $(this).attr("data-filter");
        return $(".portfolio-items").isotope({
            filter: t
        }), !1
    })
});
