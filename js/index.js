$(window).scroll(()=>{
    let scroll = $(window).scrollTop();

    if(scroll >= 200){
        $(".navigation__button").addClass("scrolling");
    }else{
        $(".navigation__button").removeClass("scrolling");
    }
});
// $(window).load(()=>{
//     if($(".navigation").hasClass("menu-is-open")){
//             $(".navigation").removeClass('menu-is-open');
//     }
// });
$(".navigation__button").on('click', function(e){
    console.log("clicked");
    $(".navigation").toggleClass("menu-is-open");
    $("body").addClass("hide-scroll");
});
$(".navigation__close").on('click', function(e){
    console.log("clicked");
    $(".navigation").toggleClass("menu-is-open");
    $("body").removeClass("hide-scroll");
});
$("body").on('click', function(e){
    // if( !$(e.target).is('.header-nav, .navigation__close, .navigation__icon--close, .navigation__list, .navigation__item, .navigation__links, .navigation__text, .social, .social *,.navigation__button, .navigation__icon') ) {
        if(!$(e.target).is('.navigation,.navigation *, .navigation__button, .navigation__icon')){
        $(".navigation").removeClass('menu-is-open');
        $("body").removeClass("hide-scroll");
    }
});

$(".navigation__item").on('click',(e)=>{
    if($(".navigation").hasClass("menu-is-open")){
        setTimeout(()=>{
            $(".navigation").removeClass('menu-is-open');
        },500)
    }
})
