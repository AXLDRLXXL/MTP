if ('ontouchstart' in window) {
    var click = 'touchstart';
} else {
    var click = 'click';
}
$('div.burger').on(click, function () {
    if (!$(this).hasClass('open')) {
        openMenu();
    } else {
        closeMenu();
    }
});
$('div.menu ul li a').on(click, function (e) {
//        e.preventDefault();
    closeMenu();
});
function openMenu() {
    $('div.menu').stop(true).animate({'left':0},500);
    $('div.burger').addClass('open');
    $('div.x, div.y, div.z').addClass('collapse');
    setTimeout(function () {
        $('div.y').hide();
        $('div.x').addClass('rotate30');
        $('div.z').addClass('rotate150');
    }, 70);
    setTimeout(function () {
        $('div.x').addClass('rotate45');
        $('div.z').addClass('rotate135');
    }, 120);
}
function closeMenu() {
    $('div.burger').removeClass('open');
    $('div.x').removeClass('rotate45').addClass('rotate30');
    $('div.z').removeClass('rotate135').addClass('rotate150');
    $('div.menu').stop(true).animate({'left':'-100%'},500);
    setTimeout(function () {
        $('div.x').removeClass('rotate30');
        $('div.z').removeClass('rotate150');
    }, 50);
    setTimeout(function () {
        $('div.y').show();
        $('div.x, div.y, div.z').removeClass('collapse');
    }, 70);
}