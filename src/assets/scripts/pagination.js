$('#posts').easyPaginate({
    paginateElement: '.post-card',
    elementsPerPage: 10
});
$('.easyPaginateNav a').on('click', function() {
    setParallaxHeight();
});