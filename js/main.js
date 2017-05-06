/*
 * Author: Austin Jiang;
 * Date: 2017/02/24;
 * Project: China's Price Project;
 * Author's E-mail: ab12ab12@outlook.com;
 * Project's Email: zhangguocpp@163.com;
 */



$(document).ready(function () {

    /* to control mobile-panel*/
    $('#bars').click(function () {
        $('#mobile-panel-2').removeClass('mobile-panel-2');
        $('#mobile-panel-2').addClass('mobile-panel-2-show');
        $('#mobile-panel-margin-x-2').removeClass('mobile-panel-margin-x-2');
        $('#mobile-panel-margin-x-2').addClass('mobile-panel-margin-x-2-show');
        // $('#mobile-panel').slideDown(300);
        $(this).removeClass('bars')
        $(this).addClass('bars-none');
        $('#times').removeClass('times-none');
        $('#times').addClass('times');
    });
    $('#times').click(function(){
        $('#mobile-panel-2').removeClass('mobile-panel-2-show');
        $('#mobile-panel-2').addClass('mobile-panel-2');
        $('#mobile-panel-margin-x-2').removeClass('mobile-panel-margin-x-2-show');
        $('#mobile-panel-margin-x-2').addClass('mobile-panel-margin-x-2');
        // $('#mobile-panel').slideUp(200);
        $(this).removeClass('times');
        $(this).addClass('times-none');
        $('#bars').removeClass('bars-none');
        $('#bars').addClass('bars');
    });

    /* to control the back-to-top icon*/
    $(function () {
        showScroll();
        function hideNav(){
            $('nav').removeClass('nav');
            $('nav').addClass('nav-down');
        }
        function showNav() {
            $('nav').removeClass('nav-down');
            $('nav').addClass('nav');
        }
        function showScroll() {
            $(window).scroll(function () {
                // $('nav').removeClass('nav');
                // $('nav').addClass('nav-down');
                var scrollValue = $(window).scrollTop();
                scrollValue > 300 ? $('div[class=top]').fadeIn() : $('div[class=top]').fadeOut();
                scrollValue > 300 ? hideNav(): showNav();

            });
            $('#top').click(function () {
                $("html,body").animate({ scrollTop: 0 }, 200);
            });
        }
    });

});
