(function ($) {
  //$(window).load(function() {
  //  if ($('#user-register-form').length || $('#user-login').length || $('#user-profile-form').length) {
  //    var iframeID = $(".interfacecontainerdiv iframe").attr('id');
  //    var $head = $(".interfacecontainerdiv iframe").contents().find("head");
  //    var loginIframe = document.getElementById(iframeID);
  //    //var loginCalc = loginIframe.contentWindow.document.createElement('script');
  //    //loginCalc.src = "/misc/jquery.js";
  //    //loginIframe.contentWindow.document.head.appendChild(loginCalc);
  //    var loginCalc = loginIframe.contentWindow.document.createElement('script');
  //    loginCalc.src = "/sites/all/themes/pw_bootstrap_two/js/loginradius.js";
  //    loginIframe.contentWindow.document.body.appendChild(loginCalc);
  //    $head.append('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
  //    $head.append($("<link/>", { rel: "stylesheet", href: "/sites/all/themes/pw_bootstrap_two/css/loginradius.css", type: "text/css" }));
  //    $('#edit-socialloginandsocialshare-links').css('display', 'block');
  //  }
  //});

  Drupal.behaviors.pw_bootstrap_two = {
    attach: function (context, settings) {
      // Fix the checkbox issue
      $('input.form-checkbox[type="checkbox"]:checked').each(function() {
        $(this).parent('label').addClass('pw-checked');
      });
      $('input.form-checkbox[type="checkbox"]').parent('label').unbind('click');
      $('input.form-checkbox[type="checkbox"]').parent('label').bind('click', function(event) {
        $(this).toggleClass('pw-checked');
        $(this).find('input.form-checkbox[type="checkbox"]').trigger('click');
        event.stopPropagation();
        event.preventDefault();
      });
      $('input.form-checkbox[type="checkbox"]').on('click', function(event) {
        event.stopPropagation();
      });

      // Add "checked" styling to email field after user signs up for newsletter
      if (!$("#mail-check-informer").hasClass('mail-check-informer-progress')) {
        var inputval = $('#edit-mail').val();
        if(inputval != undefined) {
          $('#edit-mail').trigger('blur');
        }
      }

      // User toggle menu
      $('.usermenus .leaf').hover(
          function() {
            $('.dropdown-wrapper').show();
          },
          function(){
            $('.dropdown-wrapper').hide();
          }
      );

      $('.navbar-collapse-user .menu').hide();

      $('.mobile-user').click(function() {
        $('.navbar-collapse-user .menu').slideToggle();
      });

      // Search toggle button
      $('#pw_advance_search', context).hide();
      $('.advance-filter-toggle', context).unbind("click").click(function () {
        $("#pw_advance_search", context).slideToggle();
        $("#pw_advance_search", context).css("overflow", "visible");
        if ($('.advance-filter-toggle', context).text() == 'Show Advanced Filters') {
          $('.advance-filter-toggle', context).text('Hide Advanced Filters');
        }
        else {
          $('.advance-filter-toggle', context).text('Show Advanced Filters');
        }
      });

      /****** Hide Submit button on search ***/
      $('#block-pw-common-search-block input').focus(function() {
        $('#block-pw-common-search-block .glyphicon-search').hide();
      });

      $('#block-pw-common-search-block input').blur(function() {
        $('#block-pw-common-search-block .glyphicon-search').show();
      });

      $('.secondary-search-onscroll input').focus(function() {
        $('.secondary-search-onscroll .glyphicon-search').hide();
      });

      $('.secondary-search-onscroll input').blur(function() {
        $('.secondary-search-onscroll .glyphicon-search').show();
      });

      /*********** Maxi Menu settings **********/
      if ($('#om-menu-top-most-menu').length) {
        var leafapi = $('#om-menu-top-most-menu .leaf-api-news').offset().left;
        var leafdirectory = $('#om-menu-top-most-menu .leaf-api-directory').offset().left;
        var width = $(window).width();
        $(".om-maximenu-content .om-maximenu-middle").addClass("container");
        $(".leaf-api-news .om-maximenu-content").css({"left": "-" + leafapi + "px", "min-width": width + "px"});
        $(".leaf-api-directory .om-maximenu-content").css({"left": "-" + leafdirectory + "px", "min-width": width + "px"});

        $('#om-menu-top-most-menu .leaf-api-directory').on('mouseenter', function() {
          setTimeout(function () {
            $('.block-views-id-a851c1ffc06def8ff938901f7308d15d').removeAttr('style');
            featuredHeight = $('.block-views-id-9f2e4789b65c0cd50d6d8c52e18c0752').outerHeight();
            popularHeight = $('.block-views-id-a851c1ffc06def8ff938901f7308d15d').outerHeight();
            quickHeight = $('.block-quicktabs-id-top_most_menu_other_directories').outerHeight();
            if (featuredHeight > popularHeight) {
              $('.block-views-id-a851c1ffc06def8ff938901f7308d15d').innerHeight(featuredHeight + 'px');
              popularHeight = featuredHeight;
            }
            if (quickHeight > popularHeight) {
              $('.block-views-id-a851c1ffc06def8ff938901f7308d15d').innerHeight(quickHeight + 'px');
            }
          }, 300);
        });
        $('#om-menu-top-most-menu .leaf-api-directory #quicktabs-top_most_menu_other_directories li a').on('click', function() {
          $('.block-views-id-a851c1ffc06def8ff938901f7308d15d').removeAttr('style');
          featuredHeight = $('.block-views-id-9f2e4789b65c0cd50d6d8c52e18c0752').outerHeight();
          popularHeight = $('.block-views-id-a851c1ffc06def8ff938901f7308d15d').outerHeight();
          quickHeight = $('.block-quicktabs-id-top_most_menu_other_directories').outerHeight();
          if (featuredHeight > popularHeight) {
            $('.block-views-id-a851c1ffc06def8ff938901f7308d15d').innerHeight(featuredHeight + 'px');
            popularHeight = featuredHeight;
          }
          if (quickHeight > popularHeight) {
            $('.block-views-id-a851c1ffc06def8ff938901f7308d15d').innerHeight(quickHeight + 'px');
          }
        });
        $('#om-menu-top-most-menu .leaf-api-directory, #om-menu-top-most-menu .leaf-api-news').one('mouseenter mouseleave', function() {
          Drupal.behaviors.pw_bootstrap_two.resize('body');
        });
      }
      /*********** Maxi Menu settings End **********/

      /*** hide popup after click outside anywhere ***/
      $(document).click(function (e) {
        if (e.target.id !== 'top-menus-wrapper' && e.target.id !== 'maxiapi' && e.target.id !== 'maxidirectory') {
          $('#top-menus-wrapper',context).removeClass('top-menu');
        }
      });
      /*** hide popup after click outside anywhere ***/

      /*************** Nodequeue Redirect ***********/
      if ($('.page-api-university .nodequeue-graphic .nodequeue-title').length) {
        $('.page-api-university .nodequeue-graphic').click(function() {
          var nodequeue_href = $(this).find('.nodequeue-title').attr('href');
          document.location.href = nodequeue_href;
        });
      }
      if ($('.front .nodequeue-graphic .nodequeue-title').length) {
        $('.front .nodequeue-graphic').click(function() {
          var nodequeue_href = $(this).find('.nodequeue-title').attr('href');
          document.location.href = nodequeue_href;
        });
      }
      /*************** Nodequeue Redirect ***********/

      /*************** API University ***********/
      $('.content-section .region-content .block-views').removeClass('api-university-series');
      $('.api-university-ad .block-title').click(function(){
        document.location.href = '/api-university';
      });
      screenWidth = window.screen.width;
      /*$('.page-api-university .region-content section.col-sm-4').eq(0).addClass('first');
       $('.page-api-university .region-content section.col-sm-4').eq(1).addClass('second');
       $('.page-api-university .region-content section.col-sm-4').eq(2).addClass('third last');*/
      api_university_class_name = 'first';
      $('.page-api-university .region-content section.col-md-4').each(function() {
        $(this).addClass(api_university_class_name);
        if (api_university_class_name == 'first') {
          api_university_class_name = 'second';
        }
        else if (api_university_class_name == 'second') {
          api_university_class_name = 'third last';
        }
        else {
          api_university_class_name = 'first';
        }
      });
      api_university_class_name = 'first';
      $('.front .region-content section.col-md-4.home-page-nodequeue').each(function() {
        $(this).addClass(api_university_class_name);
        if (api_university_class_name == 'first') {
          api_university_class_name = 'second';
        }
        else if (api_university_class_name == 'second') {
          api_university_class_name = 'third last';
        }
        else {
          api_university_class_name = 'first';
        }
      });

      var apiUniversityInterval;
      var apiUniversityIntervalFeatured;
      $(window).click(function() {
        $('.api-university-nodequeue-view.expand').each(function() {
          $(this).removeClass('expand').removeClass('active');
          $(this).removeAttr('style');
          // $(this).find('.api-university-show-all a').text('Show all parts');
          showAllText = $(this).find('.api-university-show-all a').attr('rel');
          $(this).find('.api-university-show-all a').text(showAllText);
          clearTimeout(apiUniversityInterval);
        });
        $('.api-university-nodequeue-featured-course-view.expand').each(function() {
          $(this).removeClass('expand').removeClass('active');
          $(this).removeAttr('style');
          // $(this).find('.api-university-featured-course-show-all a').text('Show all parts');
          showAllText = $(this).find('.api-university-featured-course-show-all a').attr('rel');
          $(this).find('.api-university-featured-course-show-all a').text(showAllText);
          clearTimeout(apiUniversityIntervalFeatured);
        });
      });

      var titleHeight = 0;
      var titleHeightMax = 0;
      var liHeight = 0;
      var liHeightMax = 0;
      var liCounter = 0;
      var active_length = 0;
      var windowWidth = $(window).width();
      $('.api-university-nodequeue-view').each(function() {
        if (windowWidth > 991) {
          titleHeight = $(this).find('.view-header .title').outerHeight();
          if (titleHeight > titleHeightMax) {
            titleHeightMax = titleHeight;
          }
          liHeight = 0;
          liCounter = 0;
          $(this).find('.view-content .item-list li').each(function() {
            if (liHeight < 315) {
              liHeight = liHeight + $(this).outerHeight() + 15;
              liCounter++;
              if (liHeight > 315) {
                if ($(this).index() < liCounter) {
                  liHeight = liHeight - $(this).outerHeight();
                  $(this).hide();
                  $(this).nextAll().hide();
                }
                else {
                  $(this).show();
                  $(this).nextAll().show();
                }
              }
            }
          });
          if (liHeight > liHeightMax) {
            liHeightMax = liHeight;
          }
        }
        else {
          liHeight = 0;
          liCounter = 0;
          liHeightMax = 300;
          $(this).find('.view-content .item-list li').each(function() {
            if ($(this).index() < 4) {
              $(this).show();
              $(this).nextAll().show();
            }
            else {
              $(this).hide();
              $(this).nextAll().hide();
            }
          });
        }
      });
      $('.api-university-nodequeue-view').each(function() {
        if (windowWidth > 991) {
          $(this).find('.view-header .title').outerHeight(titleHeightMax);
          $(this).find('.view-content .item-list').outerHeight(liHeightMax);
        }
        else {
          $(this).find('.view-content .item-list').css('height', 'auto');
        }
      });
      var titleHeight = 0;
      var titleHeightMax = 0;
      $('.api-university-nodequeue-featured-course-view').each(function() {
        titleHeight = $(this).find('.view-header .title').outerHeight();
        if (titleHeight > titleHeightMax) {
          titleHeightMax = titleHeight;
        }
      });
      $('.api-university-nodequeue-featured-course-view').each(function() {
        $(this).find('.view-header .title').outerHeight(titleHeightMax);
      });

      $('.api-university-nodequeue-view.expand').find('.api-university-show-all a').text('Hide parts');
      $('.api-university-nodequeue-featured-course-view.expand').find('.api-university-featured-course-show-all a').text('Hide parts');

      $('.api-university-show-all a').click(function(e) {
        $(this).parents('.api-university-nodequeue-view').addClass('processing');
        $('.api-university-nodequeue-view.expand').each(function() {
          if (!$(this).hasClass('processing')) {
            $(this).removeClass('expand').removeClass('active');
            $(this).removeAttr('style');
            clearTimeout(apiUniversityInterval);
            // $(this).find('.api-university-show-all a').text('Show all parts');
            showAllText = $(this).find('.api-university-show-all a').attr('rel');
            $(this).find('.api-university-show-all a').text(showAllText);
          }
        });
        $('.api-university-nodequeue-featured-course-view.expand').each(function() {
          $(this).removeClass('expand').removeClass('active');
          $(this).removeAttr('style');
          clearTimeout(apiUniversityIntervalFeatured);
          // $(this).find('.api-university-featured-course-show-all a').text('Show all parts');
          showAllText = $(this).find('.api-university-featured-course-show-all a').attr('rel');
          $(this).find('.api-university-featured-course-show-all a').text(showAllText);
        });
        divWidth = $(this).parents('.api-university-nodequeue-view').width();
        $(this).parents('.api-university-nodequeue-view').width(divWidth);
        $(this).parents('.api-university-nodequeue-view').toggleClass('expand').toggleClass('active');
        if ($(this).parents('.api-university-nodequeue-view').hasClass('expand')) {
          $(this).text('Hide parts');
        }
        else {
          $(this).parents('.api-university-nodequeue-view').removeAttr('style');
          // $(this).text('Show all parts');
          showAllText = $(this).attr('rel');
          $(this).text(showAllText);
        }
        $(this).parents('.api-university-nodequeue-view').removeClass('processing');
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();
      });
      $('.api-university-featured-course-show-all a').click(function(e) {
        $(this).parents('.api-university-nodequeue-featured-course-view').addClass('processing');
        $('.api-university-nodequeue-view.expand').each(function() {
          $(this).removeClass('expand').removeClass('active');
          $(this).removeAttr('style');
          clearTimeout(apiUniversityInterval);
          // $(this).find('.api-university-show-all a').text('Show all parts');
          showAllText = $(this).find('.api-university-show-all a').attr('rel');
          $(this).find('.api-university-show-all a').text(showAllText);
        });
        $('.api-university-nodequeue-featured-course-view.expand').each(function() {
          if (!$(this).hasClass('processing')) {
            $(this).removeClass('expand').removeClass('active');
            $(this).removeAttr('style');
            clearTimeout(apiUniversityIntervalFeatured);
            // $(this).find('.api-university-featured-course-show-all a').text('Show all parts');
            showAllText = $(this).find('.api-university-featured-course-show-all a').attr('rel');
            $(this).find('.api-university-featured-course-show-all a').text(showAllText);
          }
        });
        divWidth = $(this).parents('.api-university-nodequeue-featured-course-view').width();
        $(this).parents('.api-university-nodequeue-featured-course-view').width(divWidth);
        $(this).parents('.api-university-nodequeue-featured-course-view').toggleClass('expand').toggleClass('active');
        if ($(this).parents('.api-university-nodequeue-featured-course-view').hasClass('expand')) {
          $(this).text('Hide parts');
        }
        else {
          $(this).parents('.api-university-nodequeue-featured-course-view').removeAttr('style');
          // $(this).text('Show all parts');
          showAllText = $(this).attr('rel');
          $(this).text(showAllText);
        }
        $(this).parents('.api-university-nodequeue-featured-course-view').removeClass('processing');
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();
      });

      $('.api-university-nodequeue-view').hover(function() {
        if ($(this).hasClass('expand')) {
          clearTimeout(apiUniversityInterval);
        }
      }, function() {
        if ($(this).hasClass('expand')) {
          var currentView = $(this);
          apiUniversityInterval = setTimeout(function() {
            currentView.removeClass('expand').removeClass('active');
            currentView.removeAttr('style');
            // currentView.find('.api-university-show-all a').text('Show all parts');
            showAllText = currentView.find('.api-university-show-all a').attr('rel');
            currentView.find('.api-university-show-all a').text(showAllText);
          }, 5000);
        }
      });
      $('.api-university-nodequeue-featured-course-view').hover(function() {
        if ($(this).hasClass('expand')) {
          clearTimeout(apiUniversityIntervalFeatured);
        }
      }, function() {
        if ($(this).hasClass('expand')) {
          var currentView = $(this);
          apiUniversityIntervalFeatured = setTimeout(function() {
            currentView.removeClass('expand').removeClass('active');
            currentView.removeAttr('style');
            // currentView.find('.api-university-featured-course-show-all a').text('Show all parts');
            showAllText = currentView.find('.api-university-featured-course-show-all a').attr('rel');
            currentView.find('.api-university-featured-course-show-all a').text(showAllText);
          }, 5000);
        }
      });
      /*************** API University ***********/

      /** Bootstrap dropdown menu not working (not dropping down when clicked) ***/
      $('.dropdown-toggle').dropdown();
      $(".dropdown-toggle").click(function(e) {
        e.preventDefault();
        e.stopPropagation();// prevent the default anchor functionality
        setTimeout(function() {
          $('.dropdown-toggle').dropdown();
        }, 500);
      });

      $(document).on("shown.bs.dropdown", ".dropdown", function () {
        $(this).find('.dropdown-menu').removeAttr("style");
        if ($(this).hasClass('architecture-style-wrapper') || $(this).hasClass('version-wrapper')) {
          dropDownWidth = $(this).outerWidth();
          $(this).find('.dropdown-menu').css('min-width', dropDownWidth + 'px');
        }
        $(this).removeClass("dropup");
        $(this).removeClass("drop-right-align");
        $(this).removeClass("drop-left-align-width-large");
        $(this).removeClass("drop-right-align-width-large");
        $(this).removeClass("drop-left-align-width");
        $(this).removeClass("drop-right-align-width");
        $(this).removeClass("drop-left-align-width-small");
        $(this).removeClass("drop-right-align-width-small");
        var $ul = $(this).children(".dropdown-menu");
        var $button = $(this).children(".dropdown-toggle");
        var ulOffset = $ul.offset();
        var spaceUp = (ulOffset.top - $button.height() - $ul.height()) - $(window).scrollTop();
        var spaceDown = $(window).scrollTop() + $(window).height() - (ulOffset.top + $ul.height());
        var spaceRight = $(window).width() - (ulOffset.left + $ul.width());
        if (spaceDown < 0 && (spaceUp >= 0 || spaceUp > spaceDown)) {
          $(this).addClass("dropup");
        }
        if (spaceRight < 0) {
          $(this).addClass("drop-right-align");
          ulOffset = $ul.offset();
          if (ulOffset.left < 0) {
            $(this).removeClass("drop-right-align");
            $(this).addClass("drop-left-align-width-large");
            dropWidth = ($(window).width() * 2) / 3;
            $(this).find('.dropdown-menu').width(dropWidth);
            ulOffset = $ul.offset();
            spaceRight = $(window).width() - (ulOffset.left + $ul.width());
            if (spaceRight < 0) {
              $(this).find('.dropdown-menu').removeAttr("style");
              $(this).removeClass("drop-right-align");
              $(this).removeClass("drop-left-align-width-large");
              $(this).addClass("drop-right-align-width-large");
              dropWidth = ($(window).width() * 2) / 3;
              $(this).find('.dropdown-menu').width(dropWidth);
              ulOffset = $ul.offset();
              if (ulOffset.left < 0) {
                $(this).find('.dropdown-menu').removeAttr("style");
                $(this).removeClass("drop-right-align");
                $(this).removeClass("drop-left-align-width-large");
                $(this).removeClass("drop-right-align-width-large");
                $(this).addClass("drop-left-align-width");
                ulOffset = $ul.offset();
                spaceRight = $(window).width() - (ulOffset.left + $ul.width());
                if (spaceRight < 0) {
                  $(this).find('.dropdown-menu').removeAttr("style");
                  $(this).removeClass("drop-right-align");
                  $(this).removeClass("drop-left-align-width-large");
                  $(this).removeClass("drop-right-align-width-large");
                  $(this).removeClass("drop-left-align-width");
                  $(this).addClass("drop-right-align-width");
                  ulOffset = $ul.offset();
                  if (ulOffset.left < 0) {
                    $(this).find('.dropdown-menu').removeAttr("style");
                    $(this).removeClass("drop-right-align");
                    $(this).removeClass("drop-left-align-width-large");
                    $(this).removeClass("drop-right-align-width-large");
                    $(this).removeClass("drop-left-align-width");
                    $(this).removeClass("drop-right-align-width");
                    $(this).addClass("drop-left-align-width-small");
                    ulOffset = $ul.offset();
                    spaceRight = $(window).width() - (ulOffset.left + $ul.width());
                    if (spaceRight < 0) {
                      $(this).find('.dropdown-menu').removeAttr("style");
                      $(this).removeClass("drop-right-align");
                      $(this).removeClass("drop-left-align-width-large");
                      $(this).removeClass("drop-right-align-width-large");
                      $(this).removeClass("drop-left-align-width");
                      $(this).removeClass("drop-right-align-width");
                      $(this).removeClass("drop-left-align-width-small");
                      $(this).addClass("drop-right-align-width-small");
                    }
                  }
                }
              }
            }
          }
        }
      }).on("hidden.bs.dropdown", ".dropdown", function() {
        $(this).find('.dropdown-menu').removeAttr("style");
        $(this).removeClass("dropup");
        $(this).removeClass("drop-right-align");
        $(this).removeClass("drop-left-align-width-large");
        $(this).removeClass("drop-right-align-width-large");
        $(this).removeClass("drop-left-align-width");
        $(this).removeClass("drop-right-align-width");
        $(this).removeClass("drop-left-align-width-small");
        $(this).removeClass("drop-right-align-width-small");
      });

      $(window).on("scroll resize", function () {
        if ($(".dropdown.open").length) {
          var top_of_element = $(".dropdown.open").offset().top;
          var bottom_of_element = $(".dropdown.open").offset().top + $(".dropdown.open").outerHeight();
          var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
          var top_of_screen = $(window).scrollTop();
          var height_of_element = $(".dropdown.open").outerHeight() + $(".dropdown.open .dropdown-menu").outerHeight() + 50;
          var height_of_screen = window.innerHeight;
          if (height_of_screen > height_of_element) {
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
              $(".dropdown.open").trigger("shown.bs.dropdown");
            }
            else {
              $(".dropdown.open").dropdown("toggle");
            }
          }
          else {
            $(".dropdown.open").trigger("shown.bs.dropdown");
          }
        }
      });


      $('.show-tooltip', context).each(function() {
        tooltipTitle = $(this).attr('title');
        tooltipTitleSanit = $.parseHTML($.trim(tooltipTitle.replace("<br />", "&#013;")));
        tooltipTitleHTML = $("<div></div>").append(tooltipTitleSanit);
        $(this).attr('title', tooltipTitleHTML.text());
      });

      if ($('#sliding-popup').length) {
        cookieConsentHeight = $('#sliding-popup').outerHeight();
        $('body').css('margin-bottom', cookieConsentHeight + 'px');
      }
      $('#sliding-popup .agree-button').click(function() {
        $('body').css('margin-bottom', '0');
      });
      $('#sliding-popup').on('eu_cookie_compliance_popup_close', function () {
        $('body').css('margin-bottom', '0');
      });
    },
    // Resize window
    resize: function (context) {
      if ($('#om-menu-top-most-menu').length) {
        var leafapi = $('#om-menu-top-most-menu .leaf-api-news').offset().left;
        var leafdirectory = $('#om-menu-top-most-menu .leaf-api-directory').offset().left;
        var width = $(window).width();
        $(".om-maximenu-content .om-maximenu-middle").addClass("container");
        $(".leaf-api-news .om-maximenu-content").css({"left": "-" + leafapi + "px", "min-width": width + "px"});
        $(".leaf-api-directory .om-maximenu-content").css({"left": "-" + leafdirectory + "px", "min-width": width + "px"});

        $('.block-views-id-a851c1ffc06def8ff938901f7308d15d').removeAttr('style');
        featuredHeight = $('.block-views-id-9f2e4789b65c0cd50d6d8c52e18c0752').outerHeight();
        popularHeight = $('.block-views-id-a851c1ffc06def8ff938901f7308d15d').outerHeight();
        quickHeight = $('.block-quicktabs-id-top_most_menu_other_directories').outerHeight();
        if (featuredHeight > popularHeight) {
          $('.block-views-id-a851c1ffc06def8ff938901f7308d15d').innerHeight(featuredHeight + 'px');
          popularHeight = featuredHeight;
        }
        if (quickHeight > popularHeight) {
          $('.block-views-id-a851c1ffc06def8ff938901f7308d15d').innerHeight(quickHeight + 'px');
        }
      }
    },
    heightAdjust: function () {
      var customWidth = $(window).width();
      var blockHeight = 0;
      var blockTempHeight = 0;
      $('.home-page-middle-blocks-wrapper .home-page-middle-block-content').each(function() {
        $(this).removeAttr('style');
        blockTempHeight = $(this).outerHeight();
        if (blockTempHeight > blockHeight) {
          blockHeight = blockTempHeight;
        }
      });
      if (customWidth > 992) {
        $('.home-page-middle-blocks-wrapper .home-page-middle-block-content').each(function() {
          $(this).outerHeight(blockHeight);
          $(this).css('margin-bottom', '20px');
        });
      }
      $('.view-home-page-api-videos .views-column').each(function() {
        $(this).find('object').css({'width' : 'auto', 'height' : 'auto'});
        $(this).find('object').css({'width' : '100%', 'height' : '100%'});
      });
    }
  }
})(jQuery);

(function ($) {
  Drupal.behaviors.pw_bootstrap_two.heightAdjust();
  $(window).resize(function () {
    Drupal.behaviors.pw_bootstrap_two.resize('body');
    Drupal.behaviors.pw_bootstrap_two.heightAdjust();
    if ($('#sliding-popup').length) {
      cookieConsentHeight = $('#sliding-popup').outerHeight();
      $('body').css('margin-bottom', cookieConsentHeight + 'px');
    }
  });
  $(window).load(function () {
    /*********** Maxi Menu settings **********/
    Drupal.behaviors.pw_bootstrap_two.resize('body');
    /*********** Maxi Menu settings End **********/
    Drupal.behaviors.pw_bootstrap_two.heightAdjust();
    if ($('#sliding-popup').length) {
      cookieConsentHeight = $('#sliding-popup').outerHeight();
      $('body').css('margin-bottom', cookieConsentHeight + 'px');
    }
  });
})(jQuery);

(function ($) {
  Drupal.behaviors.pw_tabs = {
    attach: function (context, settings) {
      $('#myTab a.active').each(function() {
        $(this).parent('li').addClass('active');
      });

      /*$('#myTab a.active.comments').each(function() {
        for (editor_instance in CKEDITOR.instances) {
          var editor = CKEDITOR.instances[editor_instance];
          if (editor) {
            editor.destroy(true);
          }
          CKEDITOR.remove(editor_instance);
        }
        $('.grippie').show();
      });*/

      $('#myTab a').on('click', function() {
        // Make tab active after complete page get loaded so
        // I added $(window).load
        $(window).load(function () {
          $('#myTab li').each(function() {
            $(this).removeClass('active');
          });
          $(this).parent('li').addClass('active');
        });
      });

      if ($("#myTabContent .tab-pane.in.active").length) {
        $("#myTabContent .tab-pane.in.active").once('pw-accordion-data', function() {
          var tabID = $("#myTabContent .tab-pane.in.active").attr("id");
          $('#myTab-accordion #' + tabID + '-collapse .panel-body').html($('#myTabContent #' + tabID).html());
          $('#myTab-accordion #' + tabID + '-collapse .panel-body img[data-src][data-src!=""]').lazyloader();
          $('#myTab-accordion #' + tabID + '-collapse .panel-body img[style][style!=""]').removeAttr('style');
        });
      }
    }
  }
  $(window).load(function() {
    if ($("#myTabContent .tab-pane.in.active").length) {
      var tabID = $("#myTabContent .tab-pane.in.active").attr("id");

      if ($('#myTab-accordion #' + tabID + '-collapse .panel-body').length) {
        if ($('#myTab-accordion #' + tabID + '-collapse .panel-body ul.pager .pw_load_more').length) {
          progressElement = $('<div class="ajax-progress ajax-progress-throbber"><i class="glyphicon glyphicon-refresh glyphicon-spin"></i></div>');
          $('#myTab-accordion #' + tabID + '-collapse .panel-body').find('ul.pager .pw_load_more').off('click').on('click', function(e) {
            $(this).append(progressElement);
            $(this).addClass('disabled');
            $(this).attr('disabled', 'disabled');
            $('#myTabContent #' + tabID).find('ul.pager .pw_load_more').trigger('click');
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
          });
        }
      }
    }
  });
  $(document).ajaxComplete(function(event, xhr, settings) {
    if (settings.url == '/views/ajax') {
      if ($("#myTabContent .tab-pane.in.active").length) {
        var tabID = $("#myTabContent .tab-pane.in.active").attr("id");
        if ($('#myTab-accordion #' + tabID + '-collapse .panel-body').length) {
          if ($('#myTab-accordion #' + tabID + '-collapse .panel-body ul.pager .pw_load_more').length) {
            $('#myTab-accordion #' + tabID + '-collapse .panel-body').html($('#myTabContent #' + tabID).html());
            $('#myTabContent .tab-pane.in.active img[data-src][data-src!=""], #myTab-accordion #' + tabID + '-collapse .panel-body img[data-src][data-src!=""]').lazyloader();
            $('#myTabContent .tab-pane.in.active img[style][style!=""], #myTab-accordion #' + tabID + '-collapse .panel-body img[style][style!=""]').removeAttr('style');
            progressElement = $('<div class="ajax-progress ajax-progress-throbber"><i class="glyphicon glyphicon-refresh glyphicon-spin"></i></div>');
            $('#myTab-accordion #' + tabID + '-collapse .panel-body').find('ul.pager .pw_load_more').off('click').on('click', function(e) {
              $(this).append(progressElement);
              $(this).addClass('disabled');
              $(this).attr('disabled', 'disabled');
              $('#myTabContent #' + tabID).find('ul.pager .pw_load_more').trigger('click');
              e.stopPropagation();
              e.stopImmediatePropagation();
              e.preventDefault();
            });
          }
        }
      }
    }
    if (settings.url == '/system/ajax') {
      if ($("#myTabContent .tab-pane.in.active").length) {
        var tabID = $("#myTabContent .tab-pane.in.active").attr("id");
        if ($('#myTab-accordion #' + tabID + '-collapse .panel-body').length) {
          if ($('#myTab-accordion #' + tabID + '-collapse .panel-body #pw-api-master-form').length) {
            $('#myTabContent #' + tabID + ' #pw-api-master-form #version-details-field').html($('#myTab-accordion #' + tabID + '-collapse .panel-body #pw-api-master-form #version-details-field').html());
          }
        }
      }
    }
  });
})(jQuery);

(function ($) {
  var secondaryNav = $('#top-menus-wrapper');
  secondaryNavTopPosition = secondaryNav.offset().top;
  var customWidth = $(window).width();

  $(window).on('scroll', function() {
    customWidth = $(window).width();
    // Social icons static position
    if($(window).scrollTop() > 540) {
      $('.node-social-media').addClass('social-media-static-position');
      $('.socialicons .download-series').addClass('social-media-static-position');
      $('.node-article-profile .article-head').css({'padding':'0 0 50px'});
    }
    else if($(window).scrollTop() < 540){
      $('.node-social-media').removeClass('social-media-static-position');
      $('.socialicons .download-series').removeClass('social-media-static-position');
      $('.node-article-profile .article-head').css({'padding':'0'});
    }

    if($(window).scrollTop() >= 159 ) {
      $('.api-university').removeClass('menu-border');
    }
    else {
      $('.api-university').addClass('menu-border');
    }

    if($(window).scrollTop() > secondaryNavTopPosition ) {
      //if (customWidth > 752) {
      secondaryNav.addClass('navbar-fixed-top');
      $('body').addClass('scrolled-nav-padding');
      $('#navbar').addClass('scrolled-hidden');
      $('.sitelogo').addClass('menu-onscroll');
      $('.api-news').addClass('menu-onscroll');
      $('.api-directory').addClass('menu-onscroll');
      $('.addapi').addClass('menu-onscroll');
      $('.dashboard-top').addClass('extend_div');
      $('.secondary-add-an-api').addClass('menu-offscroll');
      $('.action-icons').addClass('menu-onscroll');
      $('.socialmediashare').addClass('menu-offscroll');
      $('.addanapi').addClass('menu-offscroll');
      $('.menuicons').addClass('menu-offscroll');
      $('.top-action-icons').addClass('menu-onscroll');
      $('.secondary-search-onscroll').addClass('menu-onscroll');
      $('#top-menus-wrapper').css({'position':'fixed','width':'100%'});
      if ($('#api-node-form .submit-api, #pw-versioning-node-version-form .submit-api, #resource-node-form .submit-sdk, #library-node-form .submit-library, #how-to-source-code-node-form .submit-howto, #framework-node-form .submit-framework, #mashup-node-form .submit-mashup').length) {
        $('.multiprogressdiv').addClass('navbar-fixed-top');
        if (customWidth < 992 && customWidth >768) {
          $('.multiprogressdiv').css({
            position: 'fixed',
            top: '47px',
            padding: '40px 85px 20px',
            'border-bottom': '1px solid #c9cccf',
          });
        }
        else {
          $('.multiprogressdiv').css({
            position: 'fixed',
            top: '47px',
            padding: '20px 85px',
            'border-bottom': '1px solid #c9cccf',
          });
        }
        if ($('#api-node-form .submit-api, #pw-versioning-node-version-form .submit-api').length) {
          submitWidth = $('#api-node-form .submit-api, #pw-versioning-node-version-form .submit-api').outerWidth();
        }
        else if ($('#resource-node-form .submit-sdk').length) {
          submitWidth = $('#resource-node-form .submit-sdk').outerWidth();
        }
        else if ($('#library-node-form .submit-library').length) {
          submitWidth = $('#library-node-form .submit-library').outerWidth();
        }
        else if ($('#framework-node-form .submit-framework').length) {
          submitWidth = $('#framework-node-form .submit-framework').outerWidth();
        }
        else if ($('#how-to-source-code-node-form .submit-howto').length) {
          submitWidth = $('#how-to-source-code-node-form .submit-howto').outerWidth();
        }
        else if ($('#mashup-node-form .submit-mashup').length) {
          submitWidth = $('#mashup-node-form .submit-mashup').outerWidth();
        }
        continueWidth = $('span.multipage-button input.multipage-link-next').outerWidth();
        if (continueWidth > submitWidth) {
          submitWidth = continueWidth + 25;
        }
        else {
          submitWidth = submitWidth + 25;
        }
        $('span.multipage-button input.multipage-link-next').css({
          position: 'fixed',
          top: '68px',
          right: '24px',
        });
        $('#api-node-form .submit-api, #pw-versioning-node-version-form .submit-api, #resource-node-form .submit-sdk, #library-node-form .submit-library, #how-to-source-code-node-form .submit-howto, #framework-node-form .submit-framework, #mashup-node-form .submit-mashup').css({
          position: 'fixed',
          top: '68px',
          right: '24px',
          'min-width': '145px',
          'width': 'auto',
          height: '40px',
          'background-color': '#8AD100'
        });
        $('#edit-save-for-later-button').css({
          position: 'fixed',
          top: '68px',
          right: submitWidth + 'px',
        });
        $('span.multipage-button input.multipage-link-next, #edit-save-for-later-button').css("z-index",1000);
        $('#api-node-form .submit-api, #pw-versioning-node-version-form .submit-api, #resource-node-form .submit-sdk, #library-node-form .submit-library, #how-to-source-code-node-form .submit-howto, #framework-node-form .submit-framework, #mashup-node-form .submit-mashup').css("z-index",1000);
        //$('#api-node-form span.multipage-button input.multipage-link-previous').css({
        //  position: 'fixed',
        //  top: '68px',
        //  right: '370px',
        //});
        //$('#api-node-form span.multipage-button input.multipage-link-previous').css( "z-index", 100000 );
        $('div.note_api').css({
          display: 'block',
        });
      }
    }
    else {
      secondaryNav.removeClass('navbar-fixed-top');
      $('body').removeClass('scrolled-nav-padding');
      $('#navbar').removeClass('scrolled-hidden');
      $('.sitelogo').removeClass('menu-onscroll');
      $('.api-news').removeClass('menu-onscroll');
      $('.api-directory').removeClass('menu-onscroll');
      $('.addapi').removeClass('menu-onscroll');
      $('.dashboard-top').removeClass('extend_div');
      $('.secondary-add-an-api').removeClass('menu-offscroll');
      $('.action-icons').removeClass('menu-onscroll');
      $('.socialmediashare').removeClass('menu-offscroll');
      $('.addanapi').removeClass('menu-offscroll');
      $('.menuicons').removeClass('menu-offscroll');
      $('.top-action-icons').removeClass('menu-onscroll');
      $('.secondary-search-onscroll').removeClass('menu-onscroll');
      if ($('#api-node-form .submit-api, #pw-versioning-node-version-form, #resource-node-form .submit-sdk, #library-node-form .submit-library, #how-to-source-code-node-form .submit-howto, #framework-node-form .submit-framework, #mashup-node-form .submit-mashup').length) {
        $('.multiprogressdiv').removeClass('navbar-fixed-top');
        $('.multiprogressdiv').css({
          position: 'relative',
          top: '0',
          padding: '20px 40px',
          'border-bottom':'none',
        });
        $('span.multipage-button input.multipage-link-next').css({
          position: 'absolute',
          top: '20px',
          right: '24px',
        });

        if ($('#api-node-form .submit-api, #pw-versioning-node-version-form .submit-api').length) {
          submitWidth = $('#api-node-form .submit-api, #pw-versioning-node-version-form .submit-api').outerWidth();
        }
        else if ($('#resource-node-form .submit-sdk').length) {
          submitWidth = $('#resource-node-form .submit-sdk').outerWidth();
        }
        else if ($('#library-node-form .submit-library').length) {
          submitWidth = $('#library-node-form .submit-library').outerWidth();
        }
        else if ($('#framework-node-form .submit-framework').length) {
          submitWidth = $('#framework-node-form .submit-framework').outerWidth();
        }
        else if ($('#how-to-source-code-node-form .submit-howto').length) {
          submitWidth = $('#how-to-source-code-node-form .submit-howto').outerWidth();
        }
        else if ($('#mashup-node-form .submit-mashup').length) {
          submitWidth = $('#mashup-node-form .submit-mashup').outerWidth();
        }
        continueWidth = $('span.multipage-button input.multipage-link-next').outerWidth();
        if (continueWidth > submitWidth) {
          submitWidth = continueWidth + 25;
        }
        else {
          submitWidth = submitWidth + 25;
        }
        $('#edit-save-for-later-button').css({
          position: 'absolute',
          top: '20px',
          right: submitWidth + 'px',
        });
        $('#api-node-form .submit-api, #pw-versioning-node-version-form .submit-api, #resource-node-form .submit-sdk, #library-node-form .submit-library, #how-to-source-code-node-form .submit-howto, #framework-node-form .submit-framework, #mashup-node-form .submit-mashup').css({
          position: 'absolute',
          top: '20px',
          'min-width': '145px',
          'width': 'auto',
          right: '24px',
          height: '40px',
          'background-color': '#8AD100',
        });
        $('span.multipage-button input.multipage-link-next, #edit-save-for-later-button').css("z-index",1000);
        $('#api-node-form .submit-api, #pw-versioning-node-version-form .submit-api, #resource-node-form .submit-sdk, #library-node-form .submit-library, #how-to-source-code-node-form .submit-howto, #framework-node-form .submit-framework, #mashup-node-form .submit-mashup').css("z-index",1000);
        //$('#api-node-form span.multipage-button input.multipage-link-previous').css( "z-index", 1 );
        //$('#api-node-form span.multipage-button input.multipage-link-previous').css({
        //  position: 'absolute',
        //  top: '72px',
        //  right: '315px',
        //});
        $('div.note_api').css({
          display: 'block',
        });
      }
      if ($('#maxiapi').hasClass('active') || $('#maxidirectory').hasClass('active')) {
        $('#top-menus-wrapper').css({'position':'absolute','width':'100%'});
      }
      else {
        $('#top-menus-wrapper').css({'position':'relative','width':'100%'});
      }
    }

    if (customWidth < 480) {
      if ($(window).scrollTop() > secondaryNavTopPosition) {
        $('.multiprogressdiv').css({
          position: 'fixed',
          top: '47px',
          padding: '20px 45px',
        });
      }
      else {
        $('.multiprogressdiv').css({
          position: 'relative',
          top: '0',
          padding: '0',
        });
      }
    }

  });
})(jQuery);

/**
 * Social Media Pupops
 */
(function ($) {
  Drupal.behaviors.social_media_popup = {
    attach: function (context, settings) {

      var base_url = $(location).attr('href');
      var pagetitle = document.title;
      var isContains = pagetitle.indexOf('|') > -1;

      if (isContains == true) {
        // Replace | ProgrammableWeb From title
        var arr = pagetitle.split('|');
        pagetitle = arr[0];
      }
      // Open Popup comman function
      function popupwindow(url, title, w, h) {
        wLeft = window.screenLeft ? window.screenLeft : window.screenX;
        wTop = window.screenTop ? window.screenTop : window.screenY;

        var left = wLeft + (window.innerWidth / 2) - (w / 2);
        var top = wTop + (window.innerHeight / 2) - (h / 2);
        return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
      }

      // Share link popups
      $('.facebook_popup', context).click(function (e) {
        var appId = '165736220169630';
        var title = $(this).attr('title');
        var url = 'http://facebook.com/sharer.php?appId=' + appId + '&u=' + base_url;
        popupwindow(url, '', 700, 600);
        return false;
      });

      $('.twitter_popup', context).click(function (e) {
        var url = 'http://twitter.com/intent/tweet?title=' + pagetitle + '&url=' + base_url;
        popupwindow(url, '', 700, 600);
        return false;
      });

      $('.linkedin_popup', context).click(function (e) {
        var url = 'http://www.linkedin.com/shareArticle?mini=true&title=' + pagetitle + '&url=' + base_url + '&summary=' + $(this).attr('title') + '&source=ProgrammableWeb';
        popupwindow(url, '', 900, 400);
        return false;
      });

      $('.googleplus_popup', context).click(function (e) {
        var url = 'https://plus.google.com/share?title=' + pagetitle + '&url=' + base_url;
        popupwindow(url, '', 700, 600);
        return false;
      });

      $('.reddit_popup', context).click(function (e) {
        var url = 'http://reddit.com/submit?title=' + pagetitle + '&url=' + base_url;
        popupwindow(url, '', 700, 500);
        return false;
      });

      $('.email_popup', context).click(function (e) {
        var url = 'mailto:?Subject=Check this out on ProgrammableWeb.com' + '&body=Hey , I thought you might be interested in reading this on ProgrammableWeb.com ' + base_url;
        window.location.assign(url);
        return false;
      });
    }
  }
})(jQuery);

;/*})'"*/
;/*})'"*/
/**
 * Created by jyothikilaru on 13/09/16.
 */
(function ($) {
    Drupal.behaviors.pw_gtm = {
        attach: function (context, settings) {
            if (Drupal.settings.common !== undefined && Drupal.settings.common.pageCategory !== undefined) {
                // in the config we have made the dataLayer object so we are only going to push this info
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({'event': 'pageload'});
                dataLayer.push({'pageCategory': Drupal.settings.common.pageCategory});
                window.pageCategory = Drupal.settings.common.pageCategory;
                var google_tag_params = {
                    section: Drupal.settings.common.pageCategory,
                    pagetype: ' ',
                    membertype: ' '
                };
                if (Drupal.settings.common.contentType !== undefined) {
                    dataLayer.push({'contentType': Drupal.settings.common.contentType});
                    google_tag_params.contenttype = Drupal.settings.common.contentType;
                    window.contentType = Drupal.settings.common.contentType;
                }
                if (Drupal.settings.common.publishDate !== undefined) {
                    dataLayer.push({'publishDate': Drupal.settings.common.publishDate});
                    google_tag_params.publishdate = Drupal.settings.common.publishDate;
                    window.publishDate = Drupal.settings.common.publishDate;
                }
                if (Drupal.settings.common.author !== undefined) {
                    dataLayer.push({'author': Drupal.settings.common.author});
                    google_tag_params.author = Drupal.settings.common.author;
                    window.author = Drupal.settings.common.author;
                }
                /*     if (Drupal.settings.common.nodeTitle !== undefined) {
                 dataLayer.push({'nodeTitle': title});
                 google_tag_params.nodeTitle = title;
                 }*/
            }
            /*(function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(), event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src =
                    '//www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-5T6CSN'); */
        }
    }
})(jQuery);
;/*})'"*/
;/*})'"*/
/*

Tooltipster 3.3.0 | 2014-11-08
A rockin' custom tooltip jQuery plugin

Developed by Caleb Jacob under the MIT license http://opensource.org/licenses/MIT

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

;(function ($, window, document) {

	var pluginName = "tooltipster",
		defaults = {
			animation: 'fade',
			arrow: true,
			arrowColor: '',
			autoClose: true,
			content: null,
			contentAsHTML: false,
			contentCloning: true,
			debug: true,
			delay: 200,
			minWidth: 0,
			maxWidth: null,
			functionInit: function(origin, content) {},
			functionBefore: function(origin, continueTooltip) {
				continueTooltip();
			},
			functionReady: function(origin, tooltip) {},
			functionAfter: function(origin) {},
			hideOnClick: false,
			icon: '(?)',
			iconCloning: true,
			iconDesktop: false,
			iconTouch: false,
			iconTheme: 'tooltipster-icon',
			interactive: false,
			interactiveTolerance: 350,
			multiple: false,
			offsetX: 0,
			offsetY: 0,
			onlyOne: false,
			position: 'top',
			positionTracker: false,
			positionTrackerCallback: function(origin){
				// the default tracker callback will close the tooltip when the trigger is
				// 'hover' (see https://github.com/iamceege/tooltipster/pull/253)
				if(this.option('trigger') == 'hover' && this.option('autoClose')) {
					this.hide();
				}
			},
			restoration: 'current',
			speed: 350,
			timer: 0,
			theme: 'tooltipster-default',
			touchDevices: true,
			trigger: 'hover',
			updateAnimation: true
		};
	
	function Plugin(element, options) {
		
		// list of instance variables
		
		this.bodyOverflowX;
		// stack of custom callbacks provided as parameters to API methods
		this.callbacks = {
			hide: [],
			show: []
		};
		this.checkInterval = null;
		// this will be the user content shown in the tooltip. A capital "C" is used because there is also a method called content()
		this.Content;
		// this is the original element which is being applied the tooltipster plugin
		this.$el = $(element);
		// this will be the element which triggers the appearance of the tooltip on hover/click/custom events.
		// it will be the same as this.$el if icons are not used (see in the options), otherwise it will correspond to the created icon
		this.$elProxy;
		this.elProxyPosition;
		this.enabled = true;
		this.options = $.extend({}, defaults, options);
		this.mouseIsOverProxy = false;
		// a unique namespace per instance, for easy selective unbinding
		this.namespace = 'tooltipster-'+ Math.round(Math.random()*100000);
		// Status (capital S) can be either : appearing, shown, disappearing, hidden
		this.Status = 'hidden';
		this.timerHide = null;
		this.timerShow = null;
		// this will be the tooltip element (jQuery wrapped HTML element)
		this.$tooltip;
		
		// for backward compatibility
		this.options.iconTheme = this.options.iconTheme.replace('.', '');
		this.options.theme = this.options.theme.replace('.', '');
		
		// launch
		
		this._init();
	}
	
	Plugin.prototype = {
		
		_init: function() {
			
			var self = this;
			
			// disable the plugin on old browsers (including IE7 and lower)
			if (document.querySelector) {
				
				// note : the content is null (empty) by default and can stay that way if the plugin remains initialized but not fed any content. The tooltip will just not appear.
				
				// let's save the initial value of the title attribute for later restoration if need be.
				var initialTitle = null;
				// it will already have been saved in case of multiple tooltips
				if (self.$el.data('tooltipster-initialTitle') === undefined) {
					
					initialTitle = self.$el.attr('title');
					
					// we do not want initialTitle to have the value "undefined" because of how jQuery's .data() method works
					if (initialTitle === undefined) initialTitle = null;
					
					self.$el.data('tooltipster-initialTitle', initialTitle);
				}
				
				// if content is provided in the options, its has precedence over the title attribute.
				// Note : an empty string is considered content, only 'null' represents the absence of content.
				// Also, an existing title="" attribute will result in an empty string content
				if (self.options.content !== null){
					self._content_set(self.options.content);
				}
				else {
					self._content_set(initialTitle);
				}
				
				var c = self.options.functionInit.call(self.$el, self.$el, self.Content);
				if(typeof c !== 'undefined') self._content_set(c);
				
				self.$el
					// strip the title off of the element to prevent the default tooltips from popping up
					.removeAttr('title')
					// to be able to find all instances on the page later (upon window events in particular)
					.addClass('tooltipstered');

				// detect if we're changing the tooltip origin to an icon
				// note about this condition : if the device has touch capability and self.options.iconTouch is false, you'll have no icons event though you may consider your device as a desktop if it also has a mouse. Not sure why someone would have this use case though.
				if ((!deviceHasTouchCapability && self.options.iconDesktop) || (deviceHasTouchCapability && self.options.iconTouch)) {
					
					// TODO : the tooltip should be automatically be given an absolute position to be near the origin. Otherwise, when the origin is floating or what, it's going to be nowhere near it and disturb the position flow of the page elements. It will imply that the icon also detects when its origin moves, to follow it : not trivial.
					// Until it's done, the icon feature does not really make sense since the user still has most of the work to do by himself
					
					// if the icon provided is in the form of a string
					if(typeof self.options.icon === 'string'){
						// wrap it in a span with the icon class
						self.$elProxy = $('<span class="'+ self.options.iconTheme +'"></span>');
						self.$elProxy.text(self.options.icon);
					}
					// if it is an object (sensible choice)
					else {
						// (deep) clone the object if iconCloning == true, to make sure every instance has its own proxy. We use the icon without wrapping, no need to. We do not give it a class either, as the user will undoubtedly style the object on his own and since our css properties may conflict with his own
						if (self.options.iconCloning) self.$elProxy = self.options.icon.clone(true);
						else self.$elProxy = self.options.icon;
					}
					
					self.$elProxy.insertAfter(self.$el);
				}
				else {
					self.$elProxy = self.$el;
				}
				
				// for 'click' and 'hover' triggers : bind on events to open the tooltip. Closing is now handled in _showNow() because of its bindings.
				// Notes about touch events :
					// - mouseenter, mouseleave and clicks happen even on pure touch devices because they are emulated. deviceIsPureTouch() is a simple attempt to detect them.
					// - on hybrid devices, we do not prevent touch gesture from opening tooltips. It would be too complex to differentiate real mouse events from emulated ones.
					// - we check deviceIsPureTouch() at each event rather than prior to binding because the situation may change during browsing
				if (self.options.trigger == 'hover') {
					
					// these binding are for mouse interaction only
					self.$elProxy
						.on('mouseenter.'+ self.namespace, function() {
							if (!deviceIsPureTouch() || self.options.touchDevices) {
								self.mouseIsOverProxy = true;
								self._show();
							}
						})
						.on('mouseleave.'+ self.namespace, function() {
							if (!deviceIsPureTouch() || self.options.touchDevices) {
								self.mouseIsOverProxy = false;
							}
						});
					
					// for touch interaction only
					if (deviceHasTouchCapability && self.options.touchDevices) {
						
						// for touch devices, we immediately display the tooltip because we cannot rely on mouseleave to handle the delay
						self.$elProxy.on('touchstart.'+ self.namespace, function() {
							self._showNow();
						});
					}
				}
				else if (self.options.trigger == 'click') {
					
					// note : for touch devices, we do not bind on touchstart, we only rely on the emulated clicks (triggered by taps)
					self.$elProxy.on('click.'+ self.namespace, function() {
						if (!deviceIsPureTouch() || self.options.touchDevices) {
							self._show();
						}
					});
				}
			}
		},
		
		// this function will schedule the opening of the tooltip after the delay, if there is one
		_show: function() {
			
			var self = this;
			
			if (self.Status != 'shown' && self.Status != 'appearing') {
				
				if (self.options.delay) {
					self.timerShow = setTimeout(function(){
						
						// for hover trigger, we check if the mouse is still over the proxy, otherwise we do not show anything
						if (self.options.trigger == 'click' || (self.options.trigger == 'hover' && self.mouseIsOverProxy)) {
							self._showNow();
						}
					}, self.options.delay);
				}
				else self._showNow();
			}
		},
		
		// this function will open the tooltip right away
		_showNow: function(callback) {
			
			var self = this;
			
			// call our constructor custom function before continuing
			self.options.functionBefore.call(self.$el, self.$el, function() {
				
				// continue only if the tooltip is enabled and has any content
				if (self.enabled && self.Content !== null) {
				
					// save the method callback and cancel hide method callbacks
					if (callback) self.callbacks.show.push(callback);
					self.callbacks.hide = [];
					
					//get rid of any appearance timer
					clearTimeout(self.timerShow);
					self.timerShow = null;
					clearTimeout(self.timerHide);
					self.timerHide = null;
					
					// if we only want one tooltip open at a time, close all auto-closing tooltips currently open and not already disappearing
					if (self.options.onlyOne) {
						$('.tooltipstered').not(self.$el).each(function(i,el) {
							
							var $el = $(el),
								nss = $el.data('tooltipster-ns');
							
							// iterate on all tooltips of the element
							$.each(nss, function(i, ns){
								var instance = $el.data(ns),
									// we have to use the public methods here
									s = instance.status(),
									ac = instance.option('autoClose');
								
								if (s !== 'hidden' && s !== 'disappearing' && ac) {
									instance.hide();
								}
							});
						});
					}
					
					var finish = function() {
						self.Status = 'shown';
						
						// trigger any show method custom callbacks and reset them
						$.each(self.callbacks.show, function(i,c) { c.call(self.$el); });
						self.callbacks.show = [];
					};
					
					// if this origin already has its tooltip open
					if (self.Status !== 'hidden') {
						
						// the timer (if any) will start (or restart) right now
						var extraTime = 0;
						
						// if it was disappearing, cancel that
						if (self.Status === 'disappearing') {
							
							self.Status = 'appearing';
							
							if (supportsTransitions()) {
								
								self.$tooltip
									.clearQueue()
									.removeClass('tooltipster-dying')
									.addClass('tooltipster-'+ self.options.animation +'-show');
								
								if (self.options.speed > 0) self.$tooltip.delay(self.options.speed);
								
								self.$tooltip.queue(finish);
							}
							else {
								// in case the tooltip was currently fading out, bring it back to life
								self.$tooltip
									.stop()
									.fadeIn(finish);
							}
						}
						// if the tooltip is already open, we still need to trigger the method custom callback
						else if(self.Status === 'shown') {
							finish();
						}
					}
					// if the tooltip isn't already open, open that sucker up!
					else {
						
						self.Status = 'appearing';
						
						// the timer (if any) will start when the tooltip has fully appeared after its transition
						var extraTime = self.options.speed;
						
						// disable horizontal scrollbar to keep overflowing tooltips from jacking with it and then restore it to its previous value
						self.bodyOverflowX = $('body').css('overflow-x');
						$('body').css('overflow-x', 'hidden');
						
						// get some other settings related to building the tooltip
						var animation = 'tooltipster-' + self.options.animation,
							animationSpeed = '-webkit-transition-duration: '+ self.options.speed +'ms; -webkit-animation-duration: '+ self.options.speed +'ms; -moz-transition-duration: '+ self.options.speed +'ms; -moz-animation-duration: '+ self.options.speed +'ms; -o-transition-duration: '+ self.options.speed +'ms; -o-animation-duration: '+ self.options.speed +'ms; -ms-transition-duration: '+ self.options.speed +'ms; -ms-animation-duration: '+ self.options.speed +'ms; transition-duration: '+ self.options.speed +'ms; animation-duration: '+ self.options.speed +'ms;',
							minWidth = self.options.minWidth ? 'min-width:'+ Math.round(self.options.minWidth) +'px;' : '',
							maxWidth = self.options.maxWidth ? 'max-width:'+ Math.round(self.options.maxWidth) +'px;' : '',
							pointerEvents = self.options.interactive ? 'pointer-events: auto;' : '';
						
						// build the base of our tooltip
						self.$tooltip = $('<div class="tooltipster-base '+ self.options.theme +'" style="'+ minWidth +' '+ maxWidth +' '+ pointerEvents +' '+ animationSpeed +'"><div class="tooltipster-content"></div></div>');
						
						// only add the animation class if the user has a browser that supports animations
						if (supportsTransitions()) self.$tooltip.addClass(animation);
						
						// insert the content
						self._content_insert();
						
						// attach
						self.$tooltip.appendTo('body');
						
						// do all the crazy calculations and positioning
						self.reposition();
						
						// call our custom callback since the content of the tooltip is now part of the DOM
						self.options.functionReady.call(self.$el, self.$el, self.$tooltip);
						
						// animate in the tooltip
						if (supportsTransitions()) {
							
							self.$tooltip.addClass(animation + '-show');
							
							if(self.options.speed > 0) self.$tooltip.delay(self.options.speed);
							
							self.$tooltip.queue(finish);
						}
						else {
							self.$tooltip.css('display', 'none').fadeIn(self.options.speed, finish);
						}
						
						// will check if our tooltip origin is removed while the tooltip is shown
						self._interval_set();
						
						// reposition on scroll (otherwise position:fixed element's tooltips will move away form their origin) and on resize (in case position can/has to be changed)
						$(window).on('scroll.'+ self.namespace +' resize.'+ self.namespace, function() {
							self.reposition();
						});
						
						// auto-close bindings
						if (self.options.autoClose) {
							
							// in case a listener is already bound for autoclosing (mouse or touch, hover or click), unbind it first
							$('body').off('.'+ self.namespace);
							
							// here we'll have to set different sets of bindings for both touch and mouse
							if (self.options.trigger == 'hover') {
								
								// if the user touches the body, hide
								if (deviceHasTouchCapability) {
									// timeout 0 : explanation below in click section
									setTimeout(function() {
										// we don't want to bind on click here because the initial touchstart event has not yet triggered its click event, which is thus about to happen
										$('body').on('touchstart.'+ self.namespace, function() {
											self.hide();
										});
									}, 0);
								}
								
								// if we have to allow interaction
								if (self.options.interactive) {
									
									// touch events inside the tooltip must not close it
									if (deviceHasTouchCapability) {
										self.$tooltip.on('touchstart.'+ self.namespace, function(event) {
											event.stopPropagation();
										});
									}
									
									// as for mouse interaction, we get rid of the tooltip only after the mouse has spent some time out of it
									var tolerance = null;
									
									self.$elProxy.add(self.$tooltip)
										// hide after some time out of the proxy and the tooltip
										.on('mouseleave.'+ self.namespace + '-autoClose', function() {
											clearTimeout(tolerance);
											tolerance = setTimeout(function(){
												self.hide();
											}, self.options.interactiveTolerance);
										})
										// suspend timeout when the mouse is over the proxy or the tooltip
										.on('mouseenter.'+ self.namespace + '-autoClose', function() {
											clearTimeout(tolerance);
										});
								}
								// if this is a non-interactive tooltip, get rid of it if the mouse leaves
								else {
									self.$elProxy.on('mouseleave.'+ self.namespace + '-autoClose', function() {
										self.hide();
									});
								}
								
								// close the tooltip when the proxy gets a click (common behavior of native tooltips)
								if (self.options.hideOnClick) {
									
									self.$elProxy.on('click.'+ self.namespace + '-autoClose', function() {
										self.hide();
									});
								}
							}
							// here we'll set the same bindings for both clicks and touch on the body to hide the tooltip
							else if(self.options.trigger == 'click'){
								
								// use a timeout to prevent immediate closing if the method was called on a click event and if options.delay == 0 (because of bubbling)
								setTimeout(function() {
									$('body').on('click.'+ self.namespace +' touchstart.'+ self.namespace, function() {
										self.hide();
									});
								}, 0);
								
								// if interactive, we'll stop the events that were emitted from inside the tooltip to stop autoClosing
								if (self.options.interactive) {
									
									// note : the touch events will just not be used if the plugin is not enabled on touch devices
									self.$tooltip.on('click.'+ self.namespace +' touchstart.'+ self.namespace, function(event) {
										event.stopPropagation();
									});
								}
							}
						}
					}
					
					// if we have a timer set, let the countdown begin
					if (self.options.timer > 0) {
						
						self.timerHide = setTimeout(function() {
							self.timerHide = null;
							self.hide();
						}, self.options.timer + extraTime);
					}
				}
			});
		},
		
		_interval_set: function() {
			
			var self = this;
			
			self.checkInterval = setInterval(function() {
				
				// if the tooltip and/or its interval should be stopped
				if (
						// if the origin has been removed
						$('body').find(self.$el).length === 0
						// if the elProxy has been removed
					||	$('body').find(self.$elProxy).length === 0
						// if the tooltip has been closed
					||	self.Status == 'hidden'
						// if the tooltip has somehow been removed
					||	$('body').find(self.$tooltip).length === 0
				) {
					// remove the tooltip if it's still here
					if (self.Status == 'shown' || self.Status == 'appearing') self.hide();
					
					// clear this interval as it is no longer necessary
					self._interval_cancel();
				}
				// if everything is alright
				else {
					// compare the former and current positions of the elProxy to reposition the tooltip if need be
					if(self.options.positionTracker){
						
						var p = self._repositionInfo(self.$elProxy),
							identical = false;
						
						// compare size first (a change requires repositioning too)
						if(areEqual(p.dimension, self.elProxyPosition.dimension)){
							
							// for elements with a fixed position, we track the top and left properties (relative to window)
							if(self.$elProxy.css('position') === 'fixed'){
								if(areEqual(p.position, self.elProxyPosition.position)) identical = true;
							}
							// otherwise, track total offset (relative to document)
							else {
								if(areEqual(p.offset, self.elProxyPosition.offset)) identical = true;
							}
						}
						
						if(!identical){
							self.reposition();
							self.options.positionTrackerCallback.call(self, self.$el);
						}
					}
				}
			}, 200);
		},
		
		_interval_cancel: function() {
			clearInterval(this.checkInterval);
			// clean delete
			this.checkInterval = null;
		},
		
		_content_set: function(content) {
			// clone if asked. Cloning the object makes sure that each instance has its own version of the content (in case a same object were provided for several instances)
			// reminder : typeof null === object
			if (typeof content === 'object' && content !== null && this.options.contentCloning) {
				content = content.clone(true);
			}
			this.Content = content;
		},
		
		_content_insert: function() {
			
			var self = this,
				$d = this.$tooltip.find('.tooltipster-content');
			
			if (typeof self.Content === 'string' && !self.options.contentAsHTML) {
				$d.text(self.Content);
			}
			else {
				$d
					.empty()
					.append(self.Content);
			}
		},
		
		_update: function(content) {
			
			var self = this;
			
			// change the content
			self._content_set(content);
			
			if (self.Content !== null) {
				
				// update the tooltip if it is open
				if (self.Status !== 'hidden') {
					
					// reset the content in the tooltip
					self._content_insert();
					
					// reposition and resize the tooltip
					self.reposition();
					
					// if we want to play a little animation showing the content changed
					if (self.options.updateAnimation) {
						
						if (supportsTransitions()) {
							
							self.$tooltip.css({
								'width': '',
								'-webkit-transition': 'all ' + self.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
								'-moz-transition': 'all ' + self.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
								'-o-transition': 'all ' + self.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
								'-ms-transition': 'all ' + self.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
								'transition': 'all ' + self.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms'
							}).addClass('tooltipster-content-changing');
							
							// reset the CSS transitions and finish the change animation
							setTimeout(function() {
								
								if(self.Status != 'hidden'){
									
									self.$tooltip.removeClass('tooltipster-content-changing');
									
									// after the changing animation has completed, reset the CSS transitions
									setTimeout(function() {
										
										if(self.Status !== 'hidden'){
											self.$tooltip.css({
												'-webkit-transition': self.options.speed + 'ms',
												'-moz-transition': self.options.speed + 'ms',
												'-o-transition': self.options.speed + 'ms',
												'-ms-transition': self.options.speed + 'ms',
												'transition': self.options.speed + 'ms'
											});
										}
									}, self.options.speed);
								}
							}, self.options.speed);
						}
						else {
							self.$tooltip.fadeTo(self.options.speed, 0.5, function() {
								if(self.Status != 'hidden'){
									self.$tooltip.fadeTo(self.options.speed, 1);
								}
							});
						}
					}
				}
			}
			else {
				self.hide();
			}
		},
		
		_repositionInfo: function($el) {
			return {
				dimension: {
					height: $el.outerHeight(false),
					width: $el.outerWidth(false)
				},
				offset: $el.offset(),
				position: {
					left: parseInt($el.css('left')),
					top: parseInt($el.css('top'))
				}
			};
		},
		
		hide: function(callback) {
			
			var self = this;
			
			// save the method custom callback and cancel any show method custom callbacks
			if (callback) self.callbacks.hide.push(callback);
			self.callbacks.show = [];
			
			// get rid of any appearance timeout
			clearTimeout(self.timerShow);
			self.timerShow = null;
			clearTimeout(self.timerHide);
			self.timerHide = null;
			
			var finishCallbacks = function() {
				// trigger any hide method custom callbacks and reset them
				$.each(self.callbacks.hide, function(i,c) { c.call(self.$el); });
				self.callbacks.hide = [];
			};
			
			// hide
			if (self.Status == 'shown' || self.Status == 'appearing') {
				
				self.Status = 'disappearing';
				
				var finish = function() {
					
					self.Status = 'hidden';
					
					// detach our content object first, so the next jQuery's remove() call does not unbind its event handlers
					if (typeof self.Content == 'object' && self.Content !== null) {
						self.Content.detach();
					}
					
					self.$tooltip.remove();
					self.$tooltip = null;
					
					// unbind orientationchange, scroll and resize listeners
					$(window).off('.'+ self.namespace);
					
					$('body')
						// unbind any auto-closing click/touch listeners
						.off('.'+ self.namespace)
						.css('overflow-x', self.bodyOverflowX);
					
					// unbind any auto-closing click/touch listeners
					$('body').off('.'+ self.namespace);
					
					// unbind any auto-closing hover listeners
					self.$elProxy.off('.'+ self.namespace + '-autoClose');
					
					// call our constructor custom callback function
					self.options.functionAfter.call(self.$el, self.$el);
					
					// call our method custom callbacks functions
					finishCallbacks();
				};
				
				if (supportsTransitions()) {
					
					self.$tooltip
						.clearQueue()
						.removeClass('tooltipster-' + self.options.animation + '-show')
						// for transitions only
						.addClass('tooltipster-dying');
					
					if(self.options.speed > 0) self.$tooltip.delay(self.options.speed);
					
					self.$tooltip.queue(finish);
				}
				else {
					self.$tooltip
						.stop()
						.fadeOut(self.options.speed, finish);
				}
			}
			// if the tooltip is already hidden, we still need to trigger the method custom callback
			else if(self.Status == 'hidden') {
				finishCallbacks();
			}
			
			return self;
		},
		
		// the public show() method is actually an alias for the private showNow() method
		show: function(callback) {
			this._showNow(callback);
			return this;
		},
		
		// 'update' is deprecated in favor of 'content' but is kept for backward compatibility
		update: function(c) {
			return this.content(c);
		},
		content: function(c) {
			// getter method
			if(typeof c === 'undefined'){
				return this.Content;
			}
			// setter method
			else {
				this._update(c);
				return this;
			}
		},
		
		reposition: function() {
			
			var self = this;
			
			// in case the tooltip has been removed from DOM manually
			if ($('body').find(self.$tooltip).length !== 0) {
				
				// reset width
				self.$tooltip.css('width', '');
				
				// find variables to determine placement
				self.elProxyPosition = self._repositionInfo(self.$elProxy);
				var arrowReposition = null,
					windowWidth = $(window).width(),
					// shorthand
					proxy = self.elProxyPosition,
					tooltipWidth = self.$tooltip.outerWidth(false),
					tooltipInnerWidth = self.$tooltip.innerWidth() + 1, // this +1 stops FireFox from sometimes forcing an additional text line
					tooltipHeight = self.$tooltip.outerHeight(false);
				
				// if this is an <area> tag inside a <map>, all hell breaks loose. Recalculate all the measurements based on coordinates
				if (self.$elProxy.is('area')) {
					var areaShape = self.$elProxy.attr('shape'),
						mapName = self.$elProxy.parent().attr('name'),
						map = $('img[usemap="#'+ mapName +'"]'),
						mapOffsetLeft = map.offset().left,
						mapOffsetTop = map.offset().top,
						areaMeasurements = self.$elProxy.attr('coords') !== undefined ? self.$elProxy.attr('coords').split(',') : undefined;
					
					if (areaShape == 'circle') {
						var areaLeft = parseInt(areaMeasurements[0]),
							areaTop = parseInt(areaMeasurements[1]),
							areaWidth = parseInt(areaMeasurements[2]);
						proxy.dimension.height = areaWidth * 2;
						proxy.dimension.width = areaWidth * 2;
						proxy.offset.top = mapOffsetTop + areaTop - areaWidth;
						proxy.offset.left = mapOffsetLeft + areaLeft - areaWidth;
					}
					else if (areaShape == 'rect') {
						var areaLeft = parseInt(areaMeasurements[0]),
							areaTop = parseInt(areaMeasurements[1]),
							areaRight = parseInt(areaMeasurements[2]),
							areaBottom = parseInt(areaMeasurements[3]);
						proxy.dimension.height = areaBottom - areaTop;
						proxy.dimension.width = areaRight - areaLeft;
						proxy.offset.top = mapOffsetTop + areaTop;
						proxy.offset.left = mapOffsetLeft + areaLeft;
					}
					else if (areaShape == 'poly') {
						var areaXs = [],
							areaYs = [],
							areaSmallestX = 0,
							areaSmallestY = 0,
							areaGreatestX = 0,
							areaGreatestY = 0,
							arrayAlternate = 'even';
						
						for (var i = 0; i < areaMeasurements.length; i++) {
							var areaNumber = parseInt(areaMeasurements[i]);
							
							if (arrayAlternate == 'even') {
								if (areaNumber > areaGreatestX) {
									areaGreatestX = areaNumber;
									if (i === 0) {
										areaSmallestX = areaGreatestX;
									}
								}
								
								if (areaNumber < areaSmallestX) {
									areaSmallestX = areaNumber;
								}
								
								arrayAlternate = 'odd';
							}
							else {
								if (areaNumber > areaGreatestY) {
									areaGreatestY = areaNumber;
									if (i == 1) {
										areaSmallestY = areaGreatestY;
									}
								}
								
								if (areaNumber < areaSmallestY) {
									areaSmallestY = areaNumber;
								}
								
								arrayAlternate = 'even';
							}
						}
					
						proxy.dimension.height = areaGreatestY - areaSmallestY;
						proxy.dimension.width = areaGreatestX - areaSmallestX;
						proxy.offset.top = mapOffsetTop + areaSmallestY;
						proxy.offset.left = mapOffsetLeft + areaSmallestX;
					}
					else {
						proxy.dimension.height = map.outerHeight(false);
						proxy.dimension.width = map.outerWidth(false);
						proxy.offset.top = mapOffsetTop;
						proxy.offset.left = mapOffsetLeft;
					}
				}
				
				// our function and global vars for positioning our tooltip
				var myLeft = 0,
					myLeftMirror = 0,
					myTop = 0,
					offsetY = parseInt(self.options.offsetY),
					offsetX = parseInt(self.options.offsetX),
					// this is the arrow position that will eventually be used. It may differ from the position option if the tooltip cannot be displayed in this position
					practicalPosition = self.options.position;
				
				// a function to detect if the tooltip is going off the screen horizontally. If so, reposition the crap out of it!
				function dontGoOffScreenX() {
				
					var windowLeft = $(window).scrollLeft();
					
					// if the tooltip goes off the left side of the screen, line it up with the left side of the window
					if((myLeft - windowLeft) < 0) {
						arrowReposition = myLeft - windowLeft;
						myLeft = windowLeft;
					}
					
					// if the tooltip goes off the right of the screen, line it up with the right side of the window
					if (((myLeft + tooltipWidth) - windowLeft) > windowWidth) {
						arrowReposition = myLeft - ((windowWidth + windowLeft) - tooltipWidth);
						myLeft = (windowWidth + windowLeft) - tooltipWidth;
					}
				}
				
				// a function to detect if the tooltip is going off the screen vertically. If so, switch to the opposite!
				function dontGoOffScreenY(switchTo, switchFrom) {
					// if it goes off the top off the page
					if(((proxy.offset.top - $(window).scrollTop() - tooltipHeight - offsetY - 12) < 0) && (switchFrom.indexOf('top') > -1)) {
						practicalPosition = switchTo;
					}
					
					// if it goes off the bottom of the page
					if (((proxy.offset.top + proxy.dimension.height + tooltipHeight + 12 + offsetY) > ($(window).scrollTop() + $(window).height())) && (switchFrom.indexOf('bottom') > -1)) {
						practicalPosition = switchTo;
						myTop = (proxy.offset.top - tooltipHeight) - offsetY - 12;
					}
				}
				
				if(practicalPosition == 'top') {
					var leftDifference = (proxy.offset.left + tooltipWidth) - (proxy.offset.left + proxy.dimension.width);
					myLeft = (proxy.offset.left + offsetX) - (leftDifference / 2);
					myTop = (proxy.offset.top - tooltipHeight) - offsetY - 12;
					dontGoOffScreenX();
					dontGoOffScreenY('bottom', 'top');
				}
				
				if(practicalPosition == 'top-left') {
					myLeft = proxy.offset.left + offsetX;
					myTop = (proxy.offset.top - tooltipHeight) - offsetY - 12;
					dontGoOffScreenX();
					dontGoOffScreenY('bottom-left', 'top-left');
				}
				
				if(practicalPosition == 'top-right') {
					myLeft = (proxy.offset.left + proxy.dimension.width + offsetX) - tooltipWidth;
					myTop = (proxy.offset.top - tooltipHeight) - offsetY - 12;
					dontGoOffScreenX();
					dontGoOffScreenY('bottom-right', 'top-right');
				}
				
				if(practicalPosition == 'bottom') {
					var leftDifference = (proxy.offset.left + tooltipWidth) - (proxy.offset.left + proxy.dimension.width);
					myLeft = proxy.offset.left - (leftDifference / 2) + offsetX;
					myTop = (proxy.offset.top + proxy.dimension.height) + offsetY + 12;
					dontGoOffScreenX();
					dontGoOffScreenY('top', 'bottom');
				}
				
				if(practicalPosition == 'bottom-left') {
					myLeft = proxy.offset.left + offsetX;
					myTop = (proxy.offset.top + proxy.dimension.height) + offsetY + 12;
					dontGoOffScreenX();
					dontGoOffScreenY('top-left', 'bottom-left');
				}
				
				if(practicalPosition == 'bottom-right') {
					myLeft = (proxy.offset.left + proxy.dimension.width + offsetX) - tooltipWidth;
					myTop = (proxy.offset.top + proxy.dimension.height) + offsetY + 12;
					dontGoOffScreenX();
					dontGoOffScreenY('top-right', 'bottom-right');
				}
				
				if(practicalPosition == 'left') {
					myLeft = proxy.offset.left - offsetX - tooltipWidth - 12;
					myLeftMirror = proxy.offset.left + offsetX + proxy.dimension.width + 12;
					var topDifference = (proxy.offset.top + tooltipHeight) - (proxy.offset.top + proxy.dimension.height);
					myTop = proxy.offset.top - (topDifference / 2) - offsetY;
					
					// if the tooltip goes off boths sides of the page
					if((myLeft < 0) && ((myLeftMirror + tooltipWidth) > windowWidth)) {
						var borderWidth = parseFloat(self.$tooltip.css('border-width')) * 2,
							newWidth = (tooltipWidth + myLeft) - borderWidth;
						self.$tooltip.css('width', newWidth + 'px');
						
						tooltipHeight = self.$tooltip.outerHeight(false);
						myLeft = proxy.offset.left - offsetX - newWidth - 12 - borderWidth;
						topDifference = (proxy.offset.top + tooltipHeight) - (proxy.offset.top + proxy.dimension.height);
						myTop = proxy.offset.top - (topDifference / 2) - offsetY;
					}
					
					// if it only goes off one side, flip it to the other side
					else if(myLeft < 0) {
						myLeft = proxy.offset.left + offsetX + proxy.dimension.width + 12;
						arrowReposition = 'left';
					}
				}
				
				if(practicalPosition == 'right') {
					myLeft = proxy.offset.left + offsetX + proxy.dimension.width + 12;
					myLeftMirror = proxy.offset.left - offsetX - tooltipWidth - 12;
					var topDifference = (proxy.offset.top + tooltipHeight) - (proxy.offset.top + proxy.dimension.height);
					myTop = proxy.offset.top - (topDifference / 2) - offsetY;
					
					// if the tooltip goes off boths sides of the page
					if(((myLeft + tooltipWidth) > windowWidth) && (myLeftMirror < 0)) {
						var borderWidth = parseFloat(self.$tooltip.css('border-width')) * 2,
							newWidth = (windowWidth - myLeft) - borderWidth;
						self.$tooltip.css('width', newWidth + 'px');
						
						tooltipHeight = self.$tooltip.outerHeight(false);
						topDifference = (proxy.offset.top + tooltipHeight) - (proxy.offset.top + proxy.dimension.height);
						myTop = proxy.offset.top - (topDifference / 2) - offsetY;
					}
						
					// if it only goes off one side, flip it to the other side
					else if((myLeft + tooltipWidth) > windowWidth) {
						myLeft = proxy.offset.left - offsetX - tooltipWidth - 12;
						arrowReposition = 'right';
					}
				}
				
				// if arrow is set true, style it and append it
				if (self.options.arrow) {
	
					var arrowClass = 'tooltipster-arrow-' + practicalPosition;
					
					// set color of the arrow
					if(self.options.arrowColor.length < 1) {
						var arrowColor = self.$tooltip.css('background-color');
					}
					else {
						var arrowColor = self.options.arrowColor;
					}
					
					// if the tooltip was going off the page and had to re-adjust, we need to update the arrow's position
					if (!arrowReposition) {
						arrowReposition = '';
					}
					else if (arrowReposition == 'left') {
						arrowClass = 'tooltipster-arrow-right';
						arrowReposition = '';
					}
					else if (arrowReposition == 'right') {
						arrowClass = 'tooltipster-arrow-left';
						arrowReposition = '';
					}
					else {
						arrowReposition = 'left:'+ Math.round(arrowReposition) +'px;';
					}
					
					// building the logic to create the border around the arrow of the tooltip
					if ((practicalPosition == 'top') || (practicalPosition == 'top-left') || (practicalPosition == 'top-right')) {
						var tooltipBorderWidth = parseFloat(self.$tooltip.css('border-bottom-width')),
							tooltipBorderColor = self.$tooltip.css('border-bottom-color');
					}
					else if ((practicalPosition == 'bottom') || (practicalPosition == 'bottom-left') || (practicalPosition == 'bottom-right')) {
						var tooltipBorderWidth = parseFloat(self.$tooltip.css('border-top-width')),
							tooltipBorderColor = self.$tooltip.css('border-top-color');
					}
					else if (practicalPosition == 'left') {
						var tooltipBorderWidth = parseFloat(self.$tooltip.css('border-right-width')),
							tooltipBorderColor = self.$tooltip.css('border-right-color');
					}
					else if (practicalPosition == 'right') {
						var tooltipBorderWidth = parseFloat(self.$tooltip.css('border-left-width')),
							tooltipBorderColor = self.$tooltip.css('border-left-color');
					}
					else {
						var tooltipBorderWidth = parseFloat(self.$tooltip.css('border-bottom-width')),
							tooltipBorderColor = self.$tooltip.css('border-bottom-color');
					}
					
					if (tooltipBorderWidth > 1) {
						tooltipBorderWidth++;
					}
					
					var arrowBorder = '';
					if (tooltipBorderWidth !== 0) {
						var arrowBorderSize = '',
							arrowBorderColor = 'border-color: '+ tooltipBorderColor +';';
						if (arrowClass.indexOf('bottom') !== -1) {
							arrowBorderSize = 'margin-top: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						else if (arrowClass.indexOf('top') !== -1) {
							arrowBorderSize = 'margin-bottom: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						else if (arrowClass.indexOf('left') !== -1) {
							arrowBorderSize = 'margin-right: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						else if (arrowClass.indexOf('right') !== -1) {
							arrowBorderSize = 'margin-left: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						arrowBorder = '<span class="tooltipster-arrow-border" style="'+ arrowBorderSize +' '+ arrowBorderColor +';"></span>';
					}
					
					// if the arrow already exists, remove and replace it
					self.$tooltip.find('.tooltipster-arrow').remove();
					
					// build out the arrow and append it		
					var arrowConstruct = '<div class="'+ arrowClass +' tooltipster-arrow" style="'+ arrowReposition +'">'+ arrowBorder +'<span style="border-color:'+ arrowColor +';"></span></div>';
					self.$tooltip.append(arrowConstruct);
				}
				
				// position the tooltip
				self.$tooltip.css({'top': Math.round(myTop) + 'px', 'left': Math.round(myLeft) + 'px'});
			}
			
			return self;
		},
		
		enable: function() {
			this.enabled = true;
			return this;
		},
		
		disable: function() {
			// hide first, in case the tooltip would not disappear on its own (autoClose false)
			this.hide();
			this.enabled = false;
			return this;
		},
		
		destroy: function() {
			
			var self = this;
			
			self.hide();
			
			// remove the icon, if any
			if (self.$el[0] !== self.$elProxy[0]) {
				self.$elProxy.remove();
			}
			
			self.$el
				.removeData(self.namespace)
				.off('.'+ self.namespace);
			
			var ns = self.$el.data('tooltipster-ns');
			
			// if there are no more tooltips on this element
			if(ns.length === 1){
				
				// optional restoration of a title attribute
				var title = null;
				if (self.options.restoration === 'previous'){
					title = self.$el.data('tooltipster-initialTitle');
				}
				else if(self.options.restoration === 'current'){
					
					// old school technique to stringify when outerHTML is not supported
					title =
						(typeof self.Content === 'string') ?
						self.Content :
						$('<div></div>').append(self.Content).html();
				}
				
				if (title) {
					self.$el.attr('title', title);
				}
				
				// final cleaning
				self.$el
					.removeClass('tooltipstered')
					.removeData('tooltipster-ns')
					.removeData('tooltipster-initialTitle');
			}
			else {
				// remove the instance namespace from the list of namespaces of tooltips present on the element
				ns = $.grep(ns, function(el, i){
					return el !== self.namespace;
				});
				self.$el.data('tooltipster-ns', ns);
			}
			
			return self;
		},
		
		elementIcon: function() {
			return (this.$el[0] !== this.$elProxy[0]) ? this.$elProxy[0] : undefined;
		},
		
		elementTooltip: function() {
			return this.$tooltip ? this.$tooltip[0] : undefined;
		},
		
		// public methods but for internal use only
		// getter if val is ommitted, setter otherwise
		option: function(o, val) {
			if (typeof val == 'undefined') return this.options[o];
			else {
				this.options[o] = val;
				return this;
			}
		},
		status: function() {
			return this.Status;
		}
	};
	
	$.fn[pluginName] = function () {
		
		// for using in closures
		var args = arguments;
		
		// if we are not in the context of jQuery wrapped HTML element(s) :
		// this happens when calling static methods in the form $.fn.tooltipster('methodName'), or when calling $(sel).tooltipster('methodName or options') where $(sel) does not match anything
		if (this.length === 0) {
			
			// if the first argument is a method name
			if (typeof args[0] === 'string') {
				
				var methodIsStatic = true;
				
				// list static methods here (usable by calling $.fn.tooltipster('methodName');)
				switch (args[0]) {
					
					case 'setDefaults':
						// change default options for all future instances
						$.extend(defaults, args[1]);
						break;
					
					default:
						methodIsStatic = false;
						break;
				}
				
				// $.fn.tooltipster('methodName') calls will return true
				if (methodIsStatic) return true;
				// $(sel).tooltipster('methodName') calls will return the list of objects event though it's empty because chaining should work on empty lists
				else return this;
			}
			// the first argument is undefined or an object of options : we are initalizing but there is no element matched by selector
			else {
				// still chainable : same as above
				return this;
			}
		}
		// this happens when calling $(sel).tooltipster('methodName or options') where $(sel) matches one or more elements
		else {
			
			// method calls
			if (typeof args[0] === 'string') {
				
				var v = '#*$~&';
				
				this.each(function() {
					
					// retrieve the namepaces of the tooltip(s) that exist on that element. We will interact with the first tooltip only.
					var ns = $(this).data('tooltipster-ns'),
						// self represents the instance of the first tooltipster plugin associated to the current HTML object of the loop
						self = ns ? $(this).data(ns[0]) : null;
					
					// if the current element holds a tooltipster instance
					if (self) {
						
						if (typeof self[args[0]] === 'function') {
							// note : args[1] and args[2] may not be defined
							var resp = self[args[0]](args[1], args[2]);
						}
						else {
							throw new Error('Unknown method .tooltipster("' + args[0] + '")');
						}
						
						// if the function returned anything other than the instance itself (which implies chaining)
						if (resp !== self){
							v = resp;
							// return false to stop .each iteration on the first element matched by the selector
							return false;
						}
					}
					else {
						throw new Error('You called Tooltipster\'s "' + args[0] + '" method on an uninitialized element');
					}
				});
				
				return (v !== '#*$~&') ? v : this;
			}
			// first argument is undefined or an object : the tooltip is initializing
			else {
				
				var instances = [],
					// is there a defined value for the multiple option in the options object ?
					multipleIsSet = args[0] && typeof args[0].multiple !== 'undefined',
					// if the multiple option is set to true, or if it's not defined but set to true in the defaults
					multiple = (multipleIsSet && args[0].multiple) || (!multipleIsSet && defaults.multiple),
					// same for debug
					debugIsSet = args[0] && typeof args[0].debug !== 'undefined',
					debug = (debugIsSet && args[0].debug) || (!debugIsSet && defaults.debug);
				
				// initialize a tooltipster instance for each element if it doesn't already have one or if the multiple option is set, and attach the object to it
				this.each(function () {
					
					var go = false,
						ns = $(this).data('tooltipster-ns'),
						instance = null;
					
					if (!ns) {
						go = true;
					}
					else if (multiple) {
						go = true;
					}
					else if (debug) {
						console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.');
					}
					
					if (go) {
						instance = new Plugin(this, args[0]);
						
						// save the reference of the new instance
						if (!ns) ns = [];
						ns.push(instance.namespace);
						$(this).data('tooltipster-ns', ns)
						
						// save the instance itself
						$(this).data(instance.namespace, instance);
					}
					
					instances.push(instance);
				});
				
				if (multiple) return instances;
				else return this;
			}
		}
	};
	
	// quick & dirty compare function (not bijective nor multidimensional)
	function areEqual(a,b) {
		var same = true;
		$.each(a, function(i, el){
			if(typeof b[i] === 'undefined' || a[i] !== b[i]){
				same = false;
				return false;
			}
		});
		return same;
	}
	
	// detect if this device can trigger touch events
	var deviceHasTouchCapability = !!('ontouchstart' in window);
	
	// we'll assume the device has no mouse until we detect any mouse movement
	var deviceHasMouse = false;
	$('body').one('mousemove', function() {
		deviceHasMouse = true;
	});
	
	function deviceIsPureTouch() {
		return (!deviceHasMouse && deviceHasTouchCapability);
	}
	
	// detecting support for CSS transitions
	function supportsTransitions() {
		var b = document.body || document.documentElement,
			s = b.style,
			p = 'transition';
		
		if(typeof s[p] == 'string') {return true; }

		v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
		p = p.charAt(0).toUpperCase() + p.substr(1);
		for(var i=0; i<v.length; i++) {
			if(typeof s[v[i] + p] == 'string') { return true; }
		}
		return false;
	}
})( jQuery, window, document );

;/*})'"*/
;/*})'"*/
(function ($) {
  $(document).bind('flagGlobalAfterLinkUpdate', function(event, data) {
    var flag_title = $(data.newLink).find('a').attr("title");
    $("span.flag-wrapper a").tooltipster({
      content: '<a href="/faq#Track"><span class="tooltip-icon"></span></a>' + flag_title,
      animation: 'fade',
      delay: 200,
      theme: 'tooltipster-light',
      touchDevices: false,
      trigger: 'hover',
      interactive: true,
      contentAsHTML: true,
      position: 'top',
      functionReady: function(){
        var offset = $(this).offset();
        offset.top = offset.top - 46;
        $(".tooltipster-base").offset({ top: offset.top });
      },
    });
  });
  $(document).ready(function() {
    $("span.flag-wrapper a").each(function() {
      $(this).tooltipster({
        delay: 200,
        content: '<a href="/faq#Track"><span class="tooltip-icon"></span></a>' + $(this).attr("title"),
        theme: 'tooltipster-light',
        touchDevices: false,
        trigger: 'hover',
        contentAsHTML: true,
        position: 'top',
        interactive: true,
        speed: 250,
        functionReady: function(){
          var offset = $(this).offset();
          offset.top = offset.top - 46;
          $(".tooltipster-base").offset({ top: offset.top });
        },
      });
    });
    $("span.inlineFollowa a").each(function() {
      $(this).tooltipster({
        delay: 200,
        content: '<a href="/faq#Track"><span class="tooltip-icon"></span></a>' + $(this).attr("title"),
        theme: 'tooltipster-light',
        touchDevices: false,
        trigger: 'hover',
        contentAsHTML: true,
        position: 'top',
        interactive: true,
        speed: 250,
        functionReady: function(){
          var offset = $(this).offset();
          offset.top = offset.top - 46;
          $(".tooltipster-base").offset({ top: offset.top });
        },
      });
    });
    $('#node-track a').each(function() {
      $(this).tooltipster({
        delay: 200,
        content: '<a href="/faq#Track"><span class="tooltip-icon"></span></a>' + $(this).attr("title"),
        theme: 'tooltipster-light',
        touchDevices: false,
        trigger: 'hover',
        contentAsHTML: true,
        position: 'top',
        interactive: true,
        speed: 250,
        functionReady: function(){
          var offset = $(this).offset();
          offset.top = offset.top - 46;
          $(".tooltipster-base").offset({ top: offset.top });
        },
      });
    });
    $('.clone-version-button1 a').each(function() {
      $(this).tooltipster({
        delay: 200,
        content: $(this).attr("title"),
        theme: 'tooltipster-light',
        touchDevices: false,
        trigger: 'hover',
        contentAsHTML: true,
        position: 'top',
        interactive: true,
        speed: 250,
        functionReady: function() {
          var offset = $(this).offset();
          offset.top = offset.top - 46;
          $(".tooltipster-base").offset({ top: offset.top });
        },
      });
    });
    $('.pw-api-help-tooltip-wrapper').each(function() {
      $(this).tooltipster({
        delay: 200,
        content: $(this).attr("title"),
        theme: 'tooltipster-light',
        touchDevices: false,
        trigger: 'hover',
        contentAsHTML: true,
        position: 'right',
        interactive: true,
        speed: 250,
        functionReady: function() {
          var offset = $(this).offset();
          offset.top = offset.top - parseInt($(".tooltipster-base").outerHeight())/2;
          $(".tooltipster-base").offset({ top: offset.top });
        },
      });
    });

    $( "#quicktabs-right_sidebar_api_client .views-field-php a" ).each(function() {
      $(this).tooltipster({
        delay: 200,
        content: '<a href="/faq#Track"><span class="tooltip-icon"></span></a>' + $(this).attr("title"),
        theme: 'tooltipster-light',
        touchDevices: false,
        trigger: 'hover',
        contentAsHTML: true,
        position: 'top',
        interactive: true,
        speed: 250,
        functionReady: function(){
          var offset = $(this).offset();
          offset.top = offset.top - 46;
          $(".tooltipster-base").offset({ top: offset.top });
        },
      });
    });
  });
})(jQuery);

;/*})'"*/
;/*})'"*/
