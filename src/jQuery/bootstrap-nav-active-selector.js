/**
 * Created by abhith on 12/10/2015.
 */
 /*Bootstrap nav active selector*/
$(document).ready(function () {
    $('ul.nav.navbar-nav').find('a[href="' + location.pathname + '"]')
        .closest('li').addClass('active');
});
