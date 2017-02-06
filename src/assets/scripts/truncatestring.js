var max_chars = 500;

$('#chars-remaining').html(max_chars);

$('#feedback').keyup(function() {
    var text_length = $(this).val().length;
    var text_remaining = max_chars - text_length;
    $('#chars-remaining').html(text_remaining);
});


(function() {
    $('.post-card__info--content').text($('.post-card__info--content').text().substr(0, 300) + '...');

})();