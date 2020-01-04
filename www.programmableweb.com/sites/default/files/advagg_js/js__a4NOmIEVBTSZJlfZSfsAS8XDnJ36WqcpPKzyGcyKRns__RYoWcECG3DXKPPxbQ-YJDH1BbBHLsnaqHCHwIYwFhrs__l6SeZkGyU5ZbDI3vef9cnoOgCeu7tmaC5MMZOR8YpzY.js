(function ($) {

  Drupal.behaviors.captcha = {
    attach: function (context) {

      // Turn off autocompletion for the CAPTCHA response field.
      // We do it here with JavaScript (instead of directly in the markup)
      // because this autocomplete attribute is not standard and
      // it would break (X)HTML compliance.
      $("#edit-captcha-response").attr("autocomplete", "off");

    }
  };

  Drupal.behaviors.captchaAdmin = {
    attach: function (context) {
      // Add onclick handler to checkbox for adding a CAPTCHA description
      // so that the textfields for the CAPTCHA description are hidden
      // when no description should be added.
      // @todo: div.form-item-captcha-description depends on theming, maybe
      // it's better to add our own wrapper with id (instead of a class).
      $("#edit-captcha-add-captcha-description").click(function() {
        if ($("#edit-captcha-add-captcha-description").is(":checked")) {
          // Show the CAPTCHA description textfield(s).
          $("div.form-item-captcha-description").show('slow');
        }
        else {
          // Hide the CAPTCHA description textfield(s).
          $("div.form-item-captcha-description").hide('slow');
        }
      });
      // Hide the CAPTCHA description textfields if option is disabled on page load.
      if (!$("#edit-captcha-add-captcha-description").is(":checked")) {
        $("div.form-item-captcha-description").hide();
      }
    }

  };

})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {
  Drupal.behaviors.pw_api_clone_cookie = {
    attach: function (context, settings) {
      $(window).load(function() {
        if ($('.page-node-add-api .node-add-api-spinner').length) {
          var pw_add_api_set_cookie = getCookie('pw_add_api_set');
          if (pw_add_api_set_cookie == 1) {
            $('h1.page-header').removeClass('pw-display-hidden');
            $('.pw-display-hidden-wrapper').removeClass('pw-display-hidden');
            $('#pw-add-or-clone-form-wrapper').remove();
            $(window).trigger('resize');
            $(window).trigger('scroll');
          }
          $('.page-node-add-api .node-add-api-spinner').hide();
        }
        $('.clone-api-no').click(function(){
          $('#edit-clone-api-no').trigger('mousedown');
        });
        $('.clone-api-yes').click(function(){
          $('#edit-clone-api-yes').trigger('mousedown');
        });
        if (window.location.pathname !== '/add/api') {
          setCookie('pw_add_api_set', 0, 1);
        }
        /*setCookiePerPage();
        processCookie();*/
      });
      $.fn.pwSetCookie = function(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      };
      $.fn.pwVersionUserLoginScrollToTop = function() {
        if ($('#pw-versioning-custom-user-login').length) {
          loginBlockOffset = $('#pw-versioning-custom-user-login').offset();
          topMenuBarHeight = $('#top-menus-wrapper').outerHeight();
          window.scrollTo({
            top: loginBlockOffset.top - topMenuBarHeight,
            behavior: 'smooth',
          });
        }
      };
      $("#pw-versioning-custom-user-login").once('pw-versioning-user-login-captcha-reset').each(function() {
        if (localStorage.pwVersionGatedUserLoginCaptcha) {
          localStorage.removeItem('pwVersionGatedUserLoginCaptcha');
        }
      });
      $.fn.pwVersionReadMoreCaptchaReset = function(data) {
        if (data == 1) {
          if ($('#pw-versioning-custom-user-login .captcha .g-recaptcha').is(':empty')) {
            var siteKey = $('#pw-versioning-custom-user-login .captcha .g-recaptcha').attr('data-sitekey');
            captchaID = $('#pw-versioning-custom-user-login .captcha .g-recaptcha')[0];
            localStorage.pwVersionGatedUserLoginCaptcha = grecaptcha.render(captchaID, {'sitekey' : siteKey});
          }
          else if (localStorage.pwVersionGatedUserLoginCaptcha) {
            grecaptcha.reset(localStorage.pwVersionGatedUserLoginCaptcha);
          }
          else {
            grecaptcha.reset(0);
          }
        }
      };
    }
  }

  /*function setCookiePerPage() {
    if (window.location.pathname !== '/add/api' && window.location.pathname !== '/add/add-clone-api') {
      setCookie('pw_add_api_set', 0, 1);
    }
    else if (window.location.pathname == '/add/add-clone-api') {
      setCookie('pw_add_api_set', 'pw_add_api_set_clone', 1);
      $('.clone-api-no').bind('click', function(){
        setCookie('pw_add_api_set', 'pw_add_api_set_yes', 1);
        window.location.href = "/add/api";
      });
    }
  }

  function processCookie() {
    var pw_add_api_set_cookie = getCookie("pw_add_api_set");
    if((pw_add_api_set_cookie == 'pw_add_api_set_clone') || (pw_add_api_set_cookie == 'pw_add_api_set_no')){
      if(window.location.pathname == '/add/api'){
        window.location.href = "/add/add-clone-api";
      }
    }
  }*/

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
})(jQuery);

;/*})'"*/
;/*})'"*/
