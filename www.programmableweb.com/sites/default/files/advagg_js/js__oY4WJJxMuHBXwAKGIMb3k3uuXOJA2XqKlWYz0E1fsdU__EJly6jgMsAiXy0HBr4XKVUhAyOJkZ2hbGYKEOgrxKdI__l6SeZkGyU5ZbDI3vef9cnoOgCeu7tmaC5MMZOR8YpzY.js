(function ($) {

Drupal.behaviors.commentNotify = {
  attach: function (context) {
    $('#edit-notify', context)
      .bind('change', function() {
        $('#edit-notify-type', context)
          [this.checked ? 'show' : 'hide']()
          .find('input[type=checkbox]:checked').attr('checked', 'checked');
      })
      .trigger('change');
  }
}

})(jQuery);

;/*})'"*/
;/*})'"*/
(function($) {

/**
 * jQuery debugging helper.
 *
 * Invented for Dreditor.
 *
 * @usage
 *   $.debug(var [, name]);
 *   $variable.debug( [name] );
 */
jQuery.extend({
  debug: function () {
    // Setup debug storage in global window. We want to look into it.
    window.debug = window.debug || [];

    args = jQuery.makeArray(arguments);
    // Determine data source; this is an object for $variable.debug().
    // Also determine the identifier to store data with.
    if (typeof this == 'object') {
      var name = (args.length ? args[0] : window.debug.length);
      var data = this;
    }
    else {
      var name = (args.length > 1 ? args.pop() : window.debug.length);
      var data = args[0];
    }
    // Store data.
    window.debug[name] = data;
    // Dump data into Firebug console.
    if (typeof console != 'undefined') {
      console.log(name, data);
    }
    return this;
  }
});
// @todo Is this the right way?
jQuery.fn.debug = jQuery.debug;

})(jQuery);

;/*})'"*/
;/*})'"*/
// $Id$

/**
 * @file
 * OM Maximenu script
 *
 * @author: Daniel Honrade http://drupal.org/user/351112
 *
 */
 
jQuery(document).ready(function($){  
	//back to top scroll function. Any link with a hash (#) will scroll to that id on the page
	$('.om-maximenu li.om-leaf a').addClass('om-autoscroll');

	$('a.om-autoscroll[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
			  var targetOffset = $target.offset().top;
				  //targetOffset = targetOffset - 90;
				$('html,body').animate({scrollTop: targetOffset - 0}, 500);
				return false;
			}
		}
	});
	// stay open
	$('.om-maximenu-open input').each(function() {
		//alert($(this).attr('checked'));
		// jQuery 1.7 has changed it's value checking for checkbox to checked instead of true
	  if(($(this).attr('checked') == true) || ($(this).attr('checked') == 'checked')) {
	    $(this).parent().parent().addClass('open');
	    $(this).parent().parent().parent().addClass('open');
	    $(this).parent().parent().removeClass('closed');
	  }
	  else {
	    $(this).parent().parent().removeClass('open');
	    $(this).parent().parent().parent().removeClass('open');
	    $(this).parent().parent().addClass('closed');
	  }
	});
	$('.om-maximenu-open input').click(function() {
		//alert($(this).attr('checked'));
	  if(($(this).attr('checked') == true) || ($(this).attr('checked') == 'checked')) {
	    $(this).parent().parent().addClass('open');
	    $(this).parent().parent().parent().addClass('open');
	    $(this).parent().parent().removeClass('closed');
	  }
	  else {
	    $(this).parent().parent().removeClass('open');
	    $(this).parent().parent().parent().removeClass('open');			
	    $(this).parent().parent().addClass('closed');
	  }
	});		
	// image hover replacement
  $('.om-maximenu img.om-hover').hover(function () {
    var src = $(this).attr('src');
    var altsrc = src.replace(/([^.]+)(\.[^.]+$)/, '$1_hover$2');
    $(this).attr({ src: altsrc, altsrc: src });
  },function () {
    var src = $(this).attr('src');
    var altsrc = src.replace(/_hover/, '');
    $(this).attr({ src: altsrc, altsrc: src });
  });	
});	 

;/*})'"*/
;/*})'"*/
(function ($) {
  Drupal.behaviors.pw_articles = {
    attach: function (context, settings) {
      $('.field-name-field-article-body', context).once('pw_articles', function() {
        $( document ).ready(function() {
          // PW-3717 APIU Series Name Passing to GTM
        /*  var inputField = $(".api-u-series a").length;
          var apiu_title_series = $(".api-u-series a").text();
          if (inputField != 0) {
            dataLayer.push({
              'event': 'apiu_title_event',
              'apiu_title': apiu_title_series
            });
          }*/
          $('span.flag-wrapper').each(function() {
            var content = $(this).prev('a').attr('pwinlinefollow');
            var content_split = content.split('/');
            node_title = jQuery.grep(content_split, function(content_each, content_key){
              return (content_each !== "" && content_each != null);
            });
            if ($(this).find('a.unflagged').length) {
              newClass = 'inline__track_' + node_title.join('_');
              $(this).find('a.unflagged').addClass(newClass);
            }
            if ($(this).find('a.flagged').length) {
              newClass = 'inline__untrack_' + node_title.join('_');
              $(this).find('a.flagged').addClass(newClass);
            }
          });
        });
        $("span.flag-wrapper a.unflagged").on('click', function() {
          var flaggedString = $(this).text();
          var content = $(this).parent().prev('a').attr('pwinlinefollow');
          var content_split = content.split('/');
          node_title = jQuery.grep(content_split, function(content_each, content_key){
            return (content_each !== "" && content_each != null);
          });
          var avoid = 'Track this '
          flaggedString = flaggedString.replace(avoid,'');
          var statusText = 'Now tracking this ' + flaggedString;
          if (Drupal.settings.nicemessages) {
            jQuery.jGrowl.defaults.position = Drupal.settings.nicemessages.position;
            jQuery.jGrowl.defaults.closerTemplate = '<div>'+Drupal.t('[ close all ]')+'</div>';
            jQuery.jGrowl(statusText, {
              life: 6000,
              glue: "after",
              speed: "slow",
              theme: "status",
              sticky: false
            });
          }
          newClass = 'inline__untrack_' + node_title.join('_');
          setTimeout(function(){
            $('span.flag-wrapper a.flagged').addClass(newClass);
          }, 6000);
        });
        $("span.flag-wrapper a.flagged").on('click', function() {
          var flaggedString = $(this).text();
          var content = $(this).parent().prev('a').attr('pwinlinefollow');
          var content_split = content.split('/');
          node_title = jQuery.grep(content_split, function(content_each, content_key){
            return (content_each !== "" && content_each != null);
          });
          var avoid = 'Untrack this '
          flaggedString = flaggedString.replace(avoid,'');
          var statusText = 'Now untracking this ' + flaggedString;
          if (Drupal.settings.nicemessages) {
            jQuery.jGrowl.defaults.position = Drupal.settings.nicemessages.position;
            jQuery.jGrowl.defaults.closerTemplate = '<div>'+Drupal.t('[ close all ]')+'</div>';
            jQuery.jGrowl(statusText, {
              life: 6000,
              glue: "after",
              speed: "slow",
              theme: "status",
              sticky: false
            });
          }
          newClass = 'inline__track_' + node_title.join('_');
          setTimeout(function(){
            $('span.flag-wrapper a.unflagged').addClass(newClass);
          }, 6000);
        });
      });
      $('#block-quicktabs-right-sidebar-api-client').once(function() {
        $( document ).ready(function() {
          $('span.flag-wrapper').each(function() {
            var content = $(this).parents('div.views-row').find('div.views-field-title a').attr('href');
            var content_split = content.split('/');
            node_title = jQuery.grep(content_split, function(content_each, content_key){
              return (content_each !== "" && content_each != null);
            });
            if ($(this).find('a.flag-action').length) {
              newClass = 'sidebar__track_' + node_title.join('_');
              $(this).find('a.flag-action').addClass(newClass);
            }
            if ($(this).find('a.unflag-action').length) {
              newClass = 'sidebar__untrack_' + node_title.join('_');
              $(this).find('a.unflag-action').addClass(newClass);
            }
          });
        });
        $("span.flag-wrapper a.flag-action").on('click', function() {
          var flaggedString = $(this).text();
          var content = $(this).parents('div.views-row').find('div.views-field-title a').attr('href');
          var content_split = content.split('/');
          node_title = jQuery.grep(content_split, function(content_each, content_key){
            return (content_each !== "" && content_each != null);
          });
          var avoid = 'Track this ';
          flaggedString = flaggedString.replace(avoid,'');
          var statusText = 'Now tracking this ' + flaggedString;
          if (Drupal.settings.nicemessages) {
            jQuery.jGrowl.defaults.position = Drupal.settings.nicemessages.position;
            jQuery.jGrowl.defaults.closerTemplate = '<div>'+Drupal.t('[ close all ]')+'</div>';
            jQuery.jGrowl(statusText, {
              life: 6000,
              glue: "after",
              speed: "slow",
              theme: "status",
              sticky: false
            });
          }
          newClass = 'sidebar__untrack_' + node_title.join('_');
          setTimeout(function(){
            $('span.flag-wrapper a.unflag-action').addClass(newClass);
          }, 6000);
        });
        $("span.flag-wrapper a.unflag-action").on('click', function() {
          var flaggedString = $(this).text();
          var content = $(this).parents('div.views-row').find('div.views-field-title a').attr('href');
          var content_split = content.split('/');
          node_title = jQuery.grep(content_split, function(content_each, content_key){
            return (content_each !== "" && content_each != null);
          });
          var avoid = 'Untrack this ';
          flaggedString = flaggedString.replace(avoid,'');
          var statusText = 'Now untracking this ' + flaggedString;
          if (Drupal.settings.nicemessages) {
            jQuery.jGrowl.defaults.position = Drupal.settings.nicemessages.position;
            jQuery.jGrowl.defaults.closerTemplate = '<div>'+Drupal.t('[ close all ]')+'</div>';
            jQuery.jGrowl(statusText, {
              life: 6000,
              glue: "after",
              speed: "slow",
              theme: "status",
              sticky: false
            });
          }
          newClass = 'sidebar__track_' + node_title.join('_');
          setTimeout(function(){
            $('span.flag-wrapper a.flag-action').addClass(newClass);
          }, 6000);
        });
      });
    }
  }
})(jQuery);

;/*})'"*/
;/*})'"*/
