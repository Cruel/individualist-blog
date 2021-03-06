$(document).foundation();

$(function(){
    if ($('#search-results').length) {
        // Disable form submission because lunrSearch autoloads it
        $('.top-bar form').submit(function(e){
            e.preventDefault();
        });
        $('#search-term').text(location.search.slice(3));
        $('#search-query').lunrSearch({
            indexUrl: '/search.json',             // URL of the `search.json` index data for your site
            results:  '#search-results',          // jQuery selector for the search results container
            entries:  '.entries',                 // jQuery selector for the element to contain the results list, must be a child of the results element above.
            template: '#search-results-template'  // jQuery selector for the Mustache.js template
        }).keyup(function(){
            $('#search-term').text($(this).val());
        });;
    }
});