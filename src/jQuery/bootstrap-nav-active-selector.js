/**
 * Created by abhith on 12/10/2015.
 */
$(document).ready(function () {
    $('ul.nav.navbar-nav').find('a[href="' + location.pathname + '"]')
        .closest('li').addClass('active');
});