//
// $(document).ready(function(){
//     var $nav = $('#navigation');//Caching element
//     // hide .navbar first - you can also do this in css .nav{display:none;}
//     $nav.hide();
//
//     // fade in .navbar
//     $(function () {
//         $(window).scroll(function () {
//             // set distance user needs to scroll before we start fadeIn
//             if ($(this).scrollTop() > 100) { //For dynamic effect use $nav.height() instead of '100'
//                 $nav.fadeIn();
//             } else {
//                 $nav.fadeOut();
//             }
//         });
//     });
//
// });
$(function() {
$('body').hide().fadeIn('slow');
});

var t = true;
    $('.minibox').hover(function (){
    	var txt = $(this).attr('name');

    	if(t==true)
        {
            $('.col_1_img').find('section2').text(txt);
    		$('.section2').fadeIn();
    		t=false;
    	}
    	else
        {
           $('.col_1_img').find('section2').text("");
    		$('.section2').hide();
    		t=true;
    	}
});

$(document).ready(function(){
    $(".minibox").mouseover (function(){
    $(".section1").hide();
    $(".minibox").mouseout (function(){
    $(".section1").show();
    });
  });
});

(function ($) {
    "use strict";

    var pluginName = "Morphext",
        defaults = {
            animation: "fadeIn",
            separator: ",",
            speed: 2000,
            complete: $.noop
        };

    function Plugin (element, options) {
        this.element = $(element);
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._init();
    }

    Plugin.prototype = {
        _init: function () {
            var $that = this;
            this.phrases = [];

            this.element.addClass("morphext");

            $.each(this.element.text().split(this.settings.separator), function (key, value) {
                $that.phrases.push($.trim(value));
            });

            this.index = -1;
            this.animate();
            this.start();
        },
        animate: function () {
            this.index = ++this.index % this.phrases.length;
            this.element[0].innerHTML = "<span class=\"animated " + this.settings.animation + "\">" + this.phrases[this.index] + "</span>";

            if ($.isFunction(this.settings.complete)) {
                this.settings.complete.call(this);
            }
        },
        start: function () {
            var $that = this;
            this._interval = setInterval(function () {
                $that.animate();
            }, this.settings.speed);
        },
        stop: function () {
            this._interval = clearInterval(this._interval);
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };
})(jQuery);

$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});

$("#js-rotating2").Morphext({
    animation: "fadeIn",
    separator: ",",
    speed: 3000,
    complete: function () {
// Start Morphext (autostarts by default)
data.start();

// Stop Morphext
data.stop();
    }
});
