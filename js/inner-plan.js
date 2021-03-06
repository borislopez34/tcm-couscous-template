/* Adds a menu in the left bar based on h2 elements in the page */
let $ = require("../node_modules/jquery/src/jquery");

$(function() {
    var $activeLi = $('#sidebar > ul > li.active');

    var $ul = $('<ul />').appendTo($activeLi);

    $("#main .content h2").each(function(index, elem) {
        var $elem = $(elem);
        var $li = $('<li/>').appendTo($ul);
        $('<a />').attr('href', '#'+elem.id).text($elem.text()).appendTo($li);
    });

    // Smooth scroll to inner anchors.
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
});
