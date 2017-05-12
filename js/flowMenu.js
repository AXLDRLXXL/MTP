$(function(){
    $(".flow_menu a").on("click",function(){
        $(this).addClass("hover").siblings().removeClass("hover");
    });
    $(document).ready(function(){
        $(document).on("mousewheel DOMMouseScroll",function(){
            var top = $(".it_detail").scrollTop();
            var menu = $(".flow_menu");
            var items = $("div.main_article");
            var curId = "";
            items.each(function(){
                var m = $(this);
                // console.log(m.text());
                var itemsTop = m.offset().top;

                if(top > itemsTop+200){
                    curId = "#" + m.attr("id");
                }else{
                    return false;
                }
            });
            var curLink = menu.find(".hover");
            if( curId && curLink.attr("href") != curId ){
                curLink.removeClass("hover");
                //console.log(curLink.attr("href"))
                menu.find( "[href=" + curId + "]" ).addClass("hover");
            }
        });
    })
})