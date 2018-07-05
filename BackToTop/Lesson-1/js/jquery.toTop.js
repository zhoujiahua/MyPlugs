(function( $ ){
    'use strict';
    
    $.fn.toTop = function(opt){
        
        //variables
        var elem = this;
        var win = $(window);
        var doc = $('html, body');
        
        //Extended Options
        var options = $.extend({
            autohide: true,
            offset: 420,
            speed: 500,
            right: 15,
            bottom: 30
        }, opt);
        
        elem.css({
            'position': 'fixed',
            'right': options.right,
            'bottom': options.bottom,
            'cursor': 'pointer'
        });
        
        if(options.autohide){
            elem.css('display', 'none');
        }
        
        elem.click(function(){
            doc.animate({scrollTop: 0}, options.speed);
        });
        
        win.scroll(function(){
            var scrolling = win.scrollTop();
            
            if(options.autohide){
                if(scrolling > options.offset){
                    elem.fadeIn(options.speed);
                }
                else elem.fadeOut(options.speed);
            }
            
        });
        
    };
    
}( jQuery ));
