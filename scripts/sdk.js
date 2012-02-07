(function($){
    
    
    // Document ready
    $(document).ready(function() {
        
        // Set car images width and height
        $('.view-car-slider').each(function() {
            var width = $(this).width();
            $('.view-car-slider .views_slideshow_main img').
                width(width).
                height('auto');
        });

    })
    
})(jQuery);