$(document).ready(function () {
var handleFixedSidebarHoverEffect
    // handle sidebar show/hide
    $('body').on('click', '.sidebar-toggler', function (e) {
        var body = $('body');
        var sidebar = $('.page-sidebar');
        var sidebarMenu = $('.page-sidebar-menu');
        $(".sidebar-search", sidebar).removeClass("open");

        if (body.hasClass("page-sidebar-closed")) {
            body.removeClass("page-sidebar-closed");
            sidebarMenu.removeClass("page-sidebar-menu-closed");
            if (Cookies) {
                Cookies.set('sidebar_closed', '0');
            }
        } else {
            body.addClass("page-sidebar-closed");
            sidebarMenu.addClass("page-sidebar-menu-closed");
            if (body.hasClass("page-sidebar-fixed")) {
                sidebarMenu.trigger("mouseleave");
            }
            if (Cookies) {
                Cookies.set('sidebar_closed', '1');
            }
        }

        $(window).trigger('resize');
    });

    

    // Handles sidebar toggler to close/hide the sidebar.
    var handleFixedSidebarHoverEffect = function () {
        var body = $('body');
        if (body.hasClass('page-sidebar-fixed')) {
            $('.page-sidebar').on('mouseenter', function () {
                if (body.hasClass('page-sidebar-closed')) {
                    $(this).find('.page-sidebar-menu').removeClass('page-sidebar-menu-closed');
                }
            }).on('mouseleave', function () {
                if (body.hasClass('page-sidebar-closed')) {
                    $(this).find('.page-sidebar-menu').addClass('page-sidebar-menu-closed');
                }
            });
        }
    };
    
    handleFixedSidebarHoverEffect();
    

});
