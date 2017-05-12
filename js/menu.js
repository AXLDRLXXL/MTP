$(function() {
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/(iPhone|iPod|Android|ios)/i)){
        window.location.href = "http://m.mtpbiz.com/zh_cn/";
    }
    /*$(document).on("touchmove",function(e){
        e.preventDefault();
    });*/
    if ('ontouchstart' in window) {
        var click = 'touchstart';
    } else {
        var click = 'click';
    }

    $('div.burger').hover(function() {
        openMenu();
    }, function() {});
    $('div.screen').hover(function() {}, function() {
        if ($('div.burger').hasClass('open')) {
            closeMenu();
        }
    });
    $('div.menu ul li a').on(click, function(e) {
        //e.preventDefault();
        closeMenu();
    });

    function openMenu() {
        $('div.menu').stop(true).animate({
            'left': 0
        }, 500);
        $('div.burger').addClass('open');
        $('div.x, div.y, div.z').addClass('collapse');
        setTimeout(function() {
            $('div.y').hide();
            $('div.x').addClass('rotate30');
            $('div.z').addClass('rotate150');
        }, 70);
        setTimeout(function() {
            $('div.x').addClass('rotate45');
            $('div.z').addClass('rotate135');
        }, 120);
    }

    function closeMenu() {
        $('div.burger').removeClass('open');
        $('div.x').removeClass('rotate45').addClass('rotate30');
        $('div.z').removeClass('rotate135').addClass('rotate150');
        $('div.menu').stop(true).animate({
            'left': '-100%'
        }, 500);
        setTimeout(function() {
            $('div.x').removeClass('rotate30');
            $('div.z').removeClass('rotate150');
        }, 50);
        setTimeout(function() {
            $('div.y').show();
            $('div.x, div.y, div.z').removeClass('collapse');
        }, 70);
    }

    var ua = navigator.userAgent;
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
        isAndroid = ua.match(/(Android)\s+([\d.]+)/),
        isMobile = isIphone || isAndroid;
    if (isMobile) {
        var height = $("body").width();
        $(".rslides").css("height", height / 1.4);
        $(".nav-title").eq(0).css("background", "url(img/icon_minus.png) no-repeat right");
        $(".nav-title").on(click, function() {
            if ($(this).next("ul").css("display") == 'none') {
                $(this).next("ul").stop(true).slideToggle(500).siblings("ul").slideUp();
                $(this).css("background", "url(img/icon_minus.png) no-repeat right");
                $(this).siblings(".nav-title").css("background", "url(img/icon_add.png) no-repeat right");
            } else {
                $(this).next("ul").stop(true).slideToggle(500);
                $(this).css("background", "url(img/icon_add.png) no-repeat right");
            }
        });

        $('div.burger').on(click, function () {
            if (!$(this).hasClass('open')) {
                openMenu();
            } else {
                closeMenu();
            }
        });
    }
})