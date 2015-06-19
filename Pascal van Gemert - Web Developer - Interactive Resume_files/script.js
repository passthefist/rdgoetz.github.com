$(function() {
    var paneHidden = true;
    $(window).scroll(function() {
        if (window.pageYOffset > 1500 && paneHidden) {
            paneHidden = false;
            $('#sticky').fadeIn();
        }
    });

    var editable = false;
    $('a[data-action=toggle-edit]').click(function(e) {
        var anchor = $(e.currentTarget);

        editable = !editable;
        $('html').attr('contenteditable',editable);

        if (editable) {
            $('a[data-action=save]').addClass('disabled');
            anchor.text("Live Edit: ON");
        } else {
            $('a[data-action=save]').removeClass('disabled');
            anchor.text("Live Edit: OFF");
        }
    });

    $('a[data-action=save]').click(function(e) {
        e.preventDefault();
        var downloadUrl = "data:application/octet-stream," + encodeURIComponent($('html').html());
        var anchor = $(e.currentTarget);
        anchor.attr('src',downloadUrl);
    });
})
