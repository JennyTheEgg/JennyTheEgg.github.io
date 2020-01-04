/**
 * @file
 * nicemessages.js
 *
 * Use jGrowl to display messages.
 */

/**
 *  Displays messages with jGrowl.
 */
Drupal.behaviors.nicemessages = {
  attach: function () {
    if (Drupal.settings.nicemessages) {
      jQuery.jGrowl.defaults.position = Drupal.settings.nicemessages.position;
      jQuery.jGrowl.defaults.closerTemplate = '<div>'+Drupal.t('[ close all ]')+'</div>';
      if (Drupal.settings.nicemessages.items) {
        for (i in Drupal.settings.nicemessages.items) {
          jQuery.jGrowl(Drupal.settings.nicemessages.items[i].content, {
            life: Drupal.settings.nicemessages.items[i].life,
            glue: Drupal.settings.nicemessages.items[i].glue,
            speed: Drupal.settings.nicemessages.items[i].speed,
            theme: Drupal.settings.nicemessages.items[i].type,
            sticky: Drupal.settings.nicemessages.items[i].life == 0
          });
        }
        delete Drupal.settings.nicemessages.items;
      }
    }
  }
}

;/*})'"*/
;/*})'"*/
/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);
;/*})'"*/
;/*})'"*/
