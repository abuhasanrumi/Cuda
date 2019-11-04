$("#navSameID1,#navSameID2,#navSameID3,#navSameID4,#navSameID5,#navSameID6,#navSameID7").click(function() {
    $("#myNav").css("width", "0%")
});

function openNav() {
    document.getElementById("myNav").style.width = "100%"
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%"
}

$("ul li a").on("click", function(t) {
    if ("" !== this.hash) {
        t.preventDefault();
        var o = this.hash;
        $("html, body").animate({
            scrollTop: $(o).offset().top
        }, 800, function() {
            window.location.hash = o
        })
    }
}), AOS.init(), $(window).scroll(function() {
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
