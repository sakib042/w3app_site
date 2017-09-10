$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    // Portfolio Single View
    $('#portfolio').on('click','.folio-read-more',function(event){
        event.preventDefault();
        var link = $(this).data('single_url');
        var full_url = '#portfolio-single-wrap',
            parts = full_url.split("#"),
            trgt = parts[1],
            target_top = $("#"+trgt).offset().top;

        $('html, body').animate({scrollTop:target_top}, 600);
        $('#portfolio-single').slideUp(500, function(){
            $(this).load(link,function(){
                $(this).slideDown(500);
            });
        });
    });

    // Close Portfolio Single View
    $('#portfolio-single-wrap').on('click', '.close-folio-item',function(event) {
        event.preventDefault();
        var full_url = '#portfolio',
            parts = full_url.split("#"),
            trgt = parts[1],
            target_offset = $("#"+trgt).offset(),
            target_top = target_offset.top;
        $('html, body').animate({scrollTop:target_top}, 600);
        $("#portfolio-single").slideUp(500);
    });
});