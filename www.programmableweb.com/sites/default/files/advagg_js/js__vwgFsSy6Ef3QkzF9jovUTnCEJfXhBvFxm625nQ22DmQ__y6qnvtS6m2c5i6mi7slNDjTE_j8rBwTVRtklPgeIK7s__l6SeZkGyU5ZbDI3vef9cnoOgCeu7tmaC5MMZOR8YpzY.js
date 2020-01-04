(function($) {
  $(window).load(function() {
    if(Drupal.settings.pw_social !== undefined) {
        pwGatedContentRecordBecomeMemberRegister();
        pwGatedContentRecordSocialLogin();
    }
  });

  function pwGatedContentRecordSocialLogin() {
    var pw_gated_content_social_register = Drupal.settings.pw_social.socialpwgatedcontentVarSet;
    var pw_gated_content_social_title = Drupal.settings.pw_social.socialPwGatedContentTitle;
    var pw_gated_content_social_user = Drupal.settings.pw_social.socialPwgatedContentRegisteredUser;
    if (pw_gated_content_social_register == 'socialpwgatedcontent') {
      ga('PWPageView.send', {
        hitType: 'event',
        eventCategory: 'Authenticated User' + ' Gated Content',
        eventAction:'Social Login Success ',
        eventLabel:  "Social Login #"+ pw_gated_content_social_title + "#uid=" + pw_gated_content_social_user,
        nonInteraction: true
      });
    }
  }

  function pwGatedContentRecordBecomeMemberRegister() {
    if( Drupal.settings.pw_social !== undefined) {
    var  pw_gated_content_normal_register = Drupal.settings.pw_social.pwgatedcontentregisterVarSet;
    var pw_gated_content_node_title = Drupal.settings.pw_social.pwgatedcontentregistertitleVarSet;
    if(pw_gated_content_normal_register) {
      ga('PWPageView.send', {
        hitType: 'event',
        eventCategory: 'Authenticated User' + ' Gated Content',
        eventAction: 'Registeration Successful',
        eventLabel: "Registered#" + pw_gated_content_node_title + "#uid=" + pw_gated_content_normal_register,
        nonInteraction: true
      });
    }
  }
  }
})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {
  Drupal.behaviors.pwad_script = {
    attach: function (context, settings) {
      $('.field-name-field-article-body', context).once('pwad-script-once', function () {
        if ($(".field-name-field-article-body .field-items .field-item > p").length > 2) {
          if ($(".field-name-field-article-body .field-items .field-item > p:eq(1)").length) {
            pText = $(".field-name-field-article-body .field-items .field-item > p:eq(1)").text();
            if ($(".field-name-field-article-body .field-items .field-item > p:eq(1) img").length) {
              if ($(".field-name-field-article-body .field-items .field-item > p").length > 3) {
                if ($(".field-name-field-article-body .field-items .field-item > p:eq(2)").length) {
                  if ($(".field-name-field-article-body .field-items .field-item > p:eq(2) img").length == 0) {
                    if ($(".field-name-field-article-body .field-items .field-item > p:eq(2)").parents('#paralinks').length == 0) {
                      pText = $(".field-name-field-article-body .field-items .field-item > p:eq(2)").text();
                      if (pText.length > 250) {
                        $ga_script_ad = $(".field-name-field-article-body .field-items .field-item > p:eq(2)").after('<div class="article_add"><div class="adzerk-native-ads" id="apis" zone="184836"><div class="native-ads-container"><div class="ads-logo">Promoted Listings</div></div><div class="premium-ad" divname="ad1">&nbsp;</div></div></div>');
                      }
                    }
                  }
                }
              }
            }
            else if ($(".field-name-field-article-body .field-items .field-item > p:eq(1)").parents('#paralinks').length) {
              if ($(".field-name-field-article-body .field-items .field-item > p").length > 3) {
                if ($(".field-name-field-article-body .field-items .field-item > p:eq(2)").length) {
                  if ($(".field-name-field-article-body .field-items .field-item > p:eq(2) img").length == 0) {
                    if ($(".field-name-field-article-body .field-items .fied-item > p:eq(2)").parents('#paralinks').length == 0) {
                      pText = $(".field-name-field-article-body .field-items .field-item > p:eq(2)").text();
                      if (pText.length > 250) {
                        $ga_script_ad = $(".field-name-field-article-body .field-items .field-item > p:eq(2)").after('<div class="article_add"><div class="adzerk-native-ads" id="apis" zone="184836"><div class="native-ads-container"><div class="ads-logo">Promoted Listings</div></div><div class="premium-ad" divname="ad1">&nbsp;</div></div></div>');
                      }
                    }
                  }
                }
              }
            }
            else if (pText.length < 250) {
              if ($(".field-name-field-article-body .field-items .field-item > p").length > 3) {
                if ($(".field-name-field-article-body .field-items .field-item > p:eq(2)").length) {
                  if ($(".field-name-field-article-body .field-items .field-item > p:eq(2) img").length == 0) {
                    if ($(".field-name-field-article-body .field-items .fied-item > p:eq(2)").parents('#paralinks').length == 0) {
                      pText = $(".field-name-field-article-body .field-items .field-item > p:eq(2)").text();
                      if (pText.length > 250) {
                        $ga_script_ad = $(".field-name-field-article-body .field-items .field-item > p:eq(2)").after('<div class="article_add"><div class="adzerk-native-ads" id="apis" zone="184836"><div class="native-ads-container"><div class="ads-logo">Promoted Listings</div></div><div class="premium-ad" divname="ad1">&nbsp;</div></div></div>');
                      }
                    }
                  }
                }
              }
            }
            else {
              pText = $(".field-name-field-article-body .field-items .field-item > p:eq(1)").text();
              if (pText.length > 250) {
                $ga_script_ad = $(".field-name-field-article-body .field-items .field-item > p:eq(1)").after('<div class="article_add"><div class="adzerk-native-ads" id="apis" zone="184836"><div class="native-ads-container"><div class="ads-logo">Promoted Listings</div></div><div class="premium-ad" divname="ad1">&nbsp;</div></div></div>');
              }
            }
          }
          else if ($(".field-name-field-article-body .field-items .field-item > p").length > 3) {
            if ($(".field-name-field-article-body .field-items .field-item > p:eq(2)").length) {
              if ($(".field-name-field-article-body .field-items .field-item > p:eq(2) img").length == 0) {
                if ($(".field-name-field-article-body .field-items .fied-item > p:eq(2)").parents('#paralinks').length == 0) {
                  pText = $(".field-name-field-article-body .field-items .field-item > p:eq(2)").text();
                  if (pText.length > 250) {
                    $ga_script_ad = $(".field-name-field-article-body .field-items .field-item > p:nth-child(2)").after('<div class="article_add"><div class="adzerk-native-ads" id="apis" zone="184836"><div class="native-ads-container"><div class="ads-logo">Promoted Listings</div></div><div class="premium-ad" divname="ad1">&nbsp;</div></div></div>');
                  }
                }
              }
            }
          }
          else {
            pText = $(".field-name-field-article-body .field-items .field-item > p:eq(1)").text();
            if (pText.length > 250) {
              $ga_script_ad = $(".field-name-field-article-body .field-items .field-item > p:eq(1)").after('<div class="article_add"><div class="adzerk-native-ads" id="apis" zone="184836"><div class="native-ads-container"><div class="ads-logo">Promoted Listings</div></div><div class="premium-ad" divname="ad1">&nbsp;</div></div></div>');
            }
          }
        }
        else if ($(".field-name-field-article-body .field-items .field-item > div:eq(1)").length > 2) {
          if ($(".field-name-field-article-body .field-items .field-item > div:eq(1)").length) {
            divText = $(".field-name-field-article-body .field-items .field-item > div:eq(1)").text();
            if ($(".field-name-field-article-body .field-items .field-item > div:eq(1) img").length) {
              if ($(".field-name-field-article-body .field-items .field-item > div").length > 3) {
                if ($(".field-name-field-article-body .field-items .field-item > div:eq(2)").length) {
                  if ($(".field-name-field-article-body .field-items .field-item > div:eq(2) img").length == 0) {
                    if ($(".field-name-field-article-body .field-items .field-item > div:eq(2)").parents('#paralinks').length == 0) {
                      divText = $(".field-name-field-article-body .field-items .field-item > div:eq(2)").text();
                      if (divText.length > 250) {
                        $ga_script_ad = $(".field-name-field-article-body .field-items .field-item > div:eq(2)").after('<div class="article_add"><div class="adzerk-native-ads" id="apis" zone="184836"><div class="native-ads-container"><div class="ads-logo">Promoted Listings</div></div><div class="premium-ad" divname="ad1">&nbsp;</div></div></div>');
                      }
                    }
                  }
                }
              }
            }
            else if ($(".field-name-field-article-body .field-items .field-item > div:eq(1)").parents('#paralinks').length) {
              if ($(".field-name-field-article-body .field-items .field-item > div").length > 3) {
                if ($(".field-name-field-article-body .field-items .field-item > div:eq(2)").length) {
                  if ($(".field-name-field-article-body .field-items .field-item > div:eq(2) img").length == 0) {
                    if ($(".field-name-field-article-body .field-items .fied-item > div:eq(2)").parents('#paralinks').length == 0) {
                      divText = $(".field-name-field-article-body .field-items .field-item > div:eq(2)").text();
                      if (divText.length > 250) {
                        $ga_script_ad = $(".field-name-field-article-body .field-items .field-item > div:eq(2)").after('<div class="article_add"><div class="adzerk-native-ads" id="apis" zone="184836"><div class="native-ads-container"><div class="ads-logo">Promoted Listings</div></div><div class="premium-ad" divname="ad1">&nbsp;</div></div></div>');
                      }
                    }
                  }
                }
              }
            }
            else if (divText.length < 250) {
              if ($(".field-name-field-article-body .field-items .field-item > div").length > 3) {
                if ($(".field-name-field-article-body .field-items .field-item > div:eq(2)").length) {
                  if ($(".field-name-field-article-body .field-items .field-item > div:eq(2) img").length == 0) {
                    if ($(".field-name-field-article-body .field-items .fied-item > div:eq(2)").parents('#paralinks').length == 0) {
                      divText = $(".field-name-field-article-body .field-items .field-item > div:eq(2)").text();
                      if (divText.length > 250) {
                        $ga_script_ad = $(".field-name-field-article-body .field-items .field-item > div:eq(2)").after('<div class="article_add"><div class="adzerk-native-ads" id="apis" zone="184836"><div class="native-ads-container"><div class="ads-logo">Promoted Listings</div></div><div class="premium-ad" divname="ad1">&nbsp;</div></div></div>');
                      }
                    }
                  }
                }
              }
            }
            else {
              divText = $(".field-name-field-article-body .field-items .field-item > div:eq(1)").text();
              if (divText.length > 250) {
                $ga_script_ad = $(".field-name-field-article-body .field-items .field-item > div:eq(1)").after('<div class="article_add"><div class="adzerk-native-ads" id="apis" zone="184836"><div class="native-ads-container"><div class="ads-logo">Promoted Listings</div></div><div class="premium-ad" divname="ad1">&nbsp;</div></div></div>');
              }
            }
          }
          else if ($(".field-name-field-article-body .field-items .field-item > div").length > 3) {
            if ($(".field-name-field-article-body .field-items .field-item > div:eq(2)").length) {
              if ($(".field-name-field-article-body .field-items .field-item > div:eq(2) img").length == 0) {
                if ($(".field-name-field-article-body .field-items .fied-item > div:eq(2)").parents('#paralinks').length == 0) {
                  divText = $(".field-name-field-article-body .field-items .field-item > div:eq(2)").text();
                  if (divText.length > 250) {
                    $ga_script_ad = $(".field-name-field-article-body .field-items .field-item > div:nth-child(2)").after('<div class="article_add"><div class="adzerk-native-ads" id="apis" zone="184836"><div class="native-ads-container"><div class="ads-logo">Promoted Listings</div></div><div class="premium-ad" divname="ad1">&nbsp;</div></div></div>');
                  }
                }
              }
            }
          }
          else {
            divText = $(".field-name-field-article-body .field-items .field-item > div:eq(1)").text();
            if (divText.length > 250) {
              $ga_script_ad = $(".field-name-field-article-body .field-items .field-item > div:eq(1)").after('<div class="article_add"><div class="adzerk-native-ads" id="apis" zone="184836"><div class="native-ads-container"><div class="ads-logo">Promoted Listings</div></div><div class="premium-ad" divname="ad1">&nbsp;</div></div></div>');
            }
          }
        }
      });
    }
  }
})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {
  Drupal.behaviors.customscript = {
    attach: function (context, settings) {
      var flag = 0;
      $('.pw_adblock', context).once('pw_ad', function() {
        var checkit = window.check_var;
        if (checkit === undefined) {
          window.check_var = 1;
        }
        else {
          var timeoutId;
          clearTimeout(timeoutId);
          timeoutId = setTimeout(afterpwadready, 8000);
        }
      });
      function afterpwadready(){
        var adblock = $('.pw_adblock');
        if (adblock.length >= 1) {
          if (adblock.height() <= 20) {
            if(flag == 0)
            {
              dataLayer.push({
                'event': 'adBlock',
                'adBlockDetected': "Adblocker Detected"
              });
              flag = 1;
            }
          }
          else {
            if (flag == 0) {
              dataLayer.push({
                'event': 'adBlock',
                'adBlockDetected': "No Adblocker Detected"
              });
              flag = 1;
            }
          }
        }
      }
    }
  };
})(jQuery);

;/*})'"*/
;/*})'"*/
var p = "http", d = "static";
if (document.location.protocol == "https:") {
  p += "s";
  d = "engine";
}
var z = document.createElement("script");
z.type = "text/javascript";
z.async = true;
z.defer = true;
z.src = "/sites/default/files/cef/engine.adzerk.net/ados.js";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(z, s);

//alert('before');
if (Drupal.settings.adzerkVarSet !== undefined && Drupal.settings.adzerkVarSet.primary_category !== undefined) {
  var primary_category = Drupal.settings.adzerkVarSet.primary_category;
}

if (Drupal.settings.adzerkVarSet !== undefined && Drupal.settings.adzerkVarSet.primary_audience !== undefined) {
  var primary_audience = Drupal.settings.adzerkVarSet.primary_audience;
}
if (Drupal.settings.adzerkVarSet !== undefined && Drupal.settings.adzerkVarSet.primary_channel !== undefined) {
  var primary_channel = Drupal.settings.adzerkVarSet.primary_channel;
}
if (Drupal.settings.adzerkVarSet !== undefined && Drupal.settings.adzerkVarSet.secondary_category !== undefined) {
  var secondary_category = Drupal.settings.adzerkVarSet.secondary_category;
}
if (Drupal.settings.adzerkVarSet !== undefined && Drupal.settings.adzerkVarSet.related_companies !== undefined) {
  var related_companies = Drupal.settings.adzerkVarSet.related_companies;
}
if (Drupal.settings.adzerkVarSet !== undefined && Drupal.settings.adzerkVarSet.related_languages !== undefined) {
  var related_languages = Drupal.settings.adzerkVarSet.related_languages;
}
if (Drupal.settings.adzerkVarSet !== undefined && Drupal.settings.adzerkVarSet.products !== undefined) {
  var products = Drupal.settings.adzerkVarSet.products;
}

/*var primary_channel = Drupal.settings.adzerkVarSet.primary_channel;
var primary_category = Drupal.settings.adzerkVarSet.primary_category;
var secondary_category = Drupal.settings.adzerkVarSet.secondary_category;
var related_companies = Drupal.settings.adzerkVarSet.related_companies;
var related_languages = Drupal.settings.adzerkVarSet.related_languages;
var products = Drupal.settings.adzerkVarSet.products;*/

var homepage = "homepage";

var ados = ados || {};
ados.run = ados.run || [];
ados.run.push(function () {

  /* load placement for account: Programmable Web, site: Programmable Web, size: 728x90 - Leaderboard, zone: Top Leaderboard*/
  if (window.innerWidth <= 780) {
    if (!(jQuery('body.page-api-university').length) && !(jQuery('body.page-all-api-university').length)) {
      jQuery('.top-endor-commer-wrapper').hide();
      if (window.innerWidth <= 767) {
        jQuery('.region-content').css('padding-top', '67px');
        if (jQuery('.page-node-add-api,.page-node-add-mashup,.page-node-add-resource,.page-node-add-library,.page-node-add-framework,.page-node-add-how-to-source-code').length) {
          jQuery('.region-content').css('padding-top', '0');
          jQuery('.page-node-add-api h1.page-header,.page-node-add-mashup h1.page-header,.page-node-add-resource h1.page-header,.page-node-add-library h1.page-header, .page-node-add-framework h1.page-header,.page-node-add-how-to-source-code h1.page-header').css('padding-top', '73px');
        }
      }
    }
  }
  else {
    ados_add_placement(9550, 57566, "azk16406", 4).setZone(63094).setProperties({
      "company": [related_companies],
      "language": [related_languages],
      "audience": [primary_audience],
      "channel": [primary_channel],
      "products": [products]
    });
  }

  if (window.innerWidth >= 780) {

  }
  else {
    ados_add_placement(9550, 57566, "azk16407", 23).setZone(63094).setProperties({
      "company": [related_companies],
      "language": [related_languages],
      "audience": [primary_audience],
      "channel": [primary_channel],
      "products": [products]
    });

  }

  /* load placement for account: Programmable Web, site: Programmable Web, size: 728x90 - Leaderboard, zone: Bottom Leaderboard*/
  if (window.innerWidth <= 780) {
    jQuery('.bottom-ad-wrapper').hide();
  }
  else {
    if (!jQuery('body.front').length) {
      ados_add_placement(9550, 57566, "azk99048", 4).setZone(63095).setProperties({
        "company": [related_companies],
        "language": [related_languages],
        "audience": [primary_audience],
        "channel": [primary_channel],
        "products": [products]
      });
    }
    else {
      ados_add_placement(9550, 57566, "azk99048", 4).setZone(63095).setCampaignId(697213);
    }
  }
  if (window.innerWidth <= 780) {

  }
  else {
    if (!jQuery('body.front').length) {
      ados_add_placement(9550, 57566, "azk99049", 23).setZone(63095).setProperties({
        "company": [related_companies],
        "language": [related_languages],
        "audience": [primary_audience],
        "channel": [primary_channel],
        "products": [products]
      });
    }
    else {
      ados_add_placement(9550, 57566, "azk99049", 23).setZone(63095).setCampaignId(697213);
    }

  }

  // Share thru ads on homepage
  // ados_add_placement(9550, 306915, "azk75274", 2670).setZone(137548).setFlightCreativeId(1090025);
  // ados_add_placement(9550, 306915, "azk752742", 2670).setZone(137548).setFlightCreativeId(1105906);
  // ados_add_placement(9550, 306915, "azk752743", 2670).setZone(137548).setFlightCreativeId(1105907);

  // Share thru ads on category summary page
  // ados_add_placement(9550, 306915, "azk752744", 2670).setZone(137549).setFlightCreativeId(1090025);

  // Share thru ads on category articles page
  // ados_add_placement(9550, 306915, "azk752745", 2670).setZone(137550).setFlightCreativeId(1090025);
  // ados_add_placement(9550, 306915, "azk752746", 2670).setZone(137550).setFlightCreativeId(1105906);
  // ados_add_placement(9550, 306915, "azk752747", 2670).setZone(137550).setFlightCreativeId(1105907);

  /* load placement for account: Programmable Web, site: Programmable Web, size: 300x250 - for Home Page */
  ados_add_placement(9550, 306915, "azk83139", 5);

  /* load placement for account: Programmable Web, site: Programmable Web, size: 300x250 - Medium Rectangle, zone: Top MRec*/
  if (!jQuery('body.front').length) {
    ados_add_placement(9550, 57566, "azk5965", [5, 43]).setZone(63096).setProperties({
      "company": [related_companies],
      "language": [related_languages],
      "audience": [primary_audience],
      "channel": [primary_channel],
      "products": [products]
    });
  }
  else {
    ados_add_placement(9550, 57566, "azk5965", [5, 43]).setZone(63096).setCampaignId(697213);
  }

  /* load placement for account: ProgrammableWeb, site: Programmable Web, size: 300x70 - 300 x 70, zone: Sidebar 300x70*/

  ados_add_placement(9550, 57566, "azk26869", 983).setZone(125622).setProperties({
    "company": [related_companies],
    "language": [related_languages],
    "audience": [primary_audience],
    "channel": [primary_channel],
    "products": [products]
  });

  /* load placement for account: Programmable Web, site: Programmable Web, size: 300x250 - Medium Rectangle or 300x600 Half Page, zone: Bottom MRec*/

  if (window.innerWidth <= 790 && window.innerWidth >= 767) {
    if (!jQuery('body.front').length) {
      ados_add_placement(9550, 57566, "azk19861", 71).setZone(63097).setProperties({
        "company": [related_companies],
        "language": [related_languages],
        "audience": [primary_audience],
        "channel": [primary_channel],
        "products": [products]
      });
    }
    else {
      ados_add_placement(9550, 57566, "azk5965", 71).setZone(63097).setCampaignId(697213);
    }
  }
  else if (window.innerWidth <= 940 && window.innerWidth >= 791) {
    if (!jQuery('body.front').length) {
      ados_add_placement(9550, 57566, "azk19861", 18).setZone(63097).setProperties({
      "company": [related_companies],
      "language": [related_languages],
      "audience": [primary_audience],
      "channel": [primary_channel],
      "products": [products]
    });
    }
    else {
      ados_add_placement(9550, 57566, "azk19861", 18).setZone(63097).setCampaignId(697213);
    }
  }
  else {
    if (!jQuery('body.front').length) {
      ados_add_placement(9550, 57566, "azk19861", 5).setZone(63097).setProperties({
        "company": [related_companies],
        "language": [related_languages],
        "audience": [primary_audience],
        "channel": [primary_channel],
        "products": [products]
      });
    } else {
      ados_add_placement(9550, 57566, "azk19861", 5).setZone(63097).setCampaignId(697213);
    }
  }
  if (jQuery('body.front').length) {
    ados_setKeywords(homepage);
  }
  else {
    ados_setKeywords(primary_category + ", " + secondary_category);
  }

  ados_load();

});

;/*})'"*/
;/*})'"*/
/**
 * Created by neeravm on 11/22/14.
 */

 (function ($) {
  Drupal.behaviors.pw_adzerk_native_api_ads = {
    attach: function (context, settings) {
      var pageCategory;

      if (Drupal.settings.common !== undefined && Drupal.settings.common.pageCategory !== undefined) {
        pageCategory = Drupal.settings.common.pageCategory;
      }
      else if (Drupal.settings.search !== undefined && Drupal.settings.search.pageCategory !== undefined) {
        pageCategory = Drupal.settings.search.pageCategory;
      }

      if (pageCategory === undefined) {
        $.each($('.adzerk-native-ads', context), function (index, value) {
          $(this).hide();
        });
        return;
      }

      $('.adzerk-native-ads', context).once('pw_adzerk_native_api_ads').each (function (index, value) {
        var element = $(this);
        var zoneId = element.attr('zone');

        // If zoneId is not defined, then return.
        if (zoneId === undefined) {
          return;
        }

        var placements = [];
        var divNames = [];
        $.each(element.find('.premium-ad'), function (index, value) {
          var div = $(this);
          var divName = div.attr('divname');
          divNames.push(divName);

            // If divName is not defined then return.
            if (divName === undefined) {
              return;
            }

            placements.push({
              divName: divName,
              networkId: 9550,
              siteId: 57566,
              adTypes: [121],
              zoneIds: [parseInt(zoneId)]
            });
          });

        // If there is no proper placement defined, then return.
        if (placements.length === 0) {
          return;
        }

        var inputData = {
          placements: placements,
          keywords: pageCategory
        };

        var settings = {
          data: JSON.stringify(inputData),
          dataType: 'json',
          headers: {
            "content-type": 'application/json'
          },
          type: 'POST',
          success: function (data) {
            var hasAds = false;

            for (var prop in data.decisions) {
              if (data.decisions.hasOwnProperty(prop)) {
                if ($.inArray(prop, divNames) >= 0) {
                  if (data.decisions[prop.toString()] && data.decisions[prop.toString()].contents.length) {
                    var innerHTML = '';
                    for (var i = 0; i < data.decisions[prop.toString()].contents.length; i++) {
                      innerHTML += data.decisions[prop.toString()].contents[i].body;
                    }

                    if (innerHTML) {
                      element.find("[divname='" + prop.toString() + "']").append(innerHTML);
                      hasAds = true;
                      if (data.decisions[prop.toString()].impressionUrl !== undefined) {
                        $.get(data.decisions[prop.toString()].impressionUrl);
                      }
                    }
                  }
                  else if (!data.decisions[prop.toString()]) {
                    element.find("[divname='" + prop.toString() + "']").remove();
                  }
                }
              }
            }

            if (hasAds) {
              var header = element.closest('.view-id-related_apis').find('.view-header').addClass('header-has-ad');
              element.addClass('container-has-ad');
              element.show();
            }
            else {
              element.hide();
            }
            if ($("#myTabContent .tab-pane.in.active").length) {
              $("#myTabContent .tab-pane.in.active").once('pw-accordion-data', function() {
                var tabID = $("#myTabContent .tab-pane.in.active").attr("id");
                $('#myTab-accordion #' + tabID + '-collapse .panel-body').html($('#myTabContent #' + tabID).html());
                $('#myTab-accordion #' + tabID + '-collapse .panel-body img[data-src][data-src!=""]').lazyloader();
                $('#myTab-accordion #' + tabID + '-collapse .panel-body img[style][style!=""]').removeAttr('style');
              });
            }
          }
        };

        $.ajax('//engine.adzerk.net/api/v2', settings);
      });
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
  });
})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {
  Drupal.behaviors.pw_api_university_report = {
    attach: function (context, settings) {
      var apiu_report_path = window.location.pathname;
      var pathArray = window.location.pathname.split( '/' );
        var pwPageLevel = pathArray;
        // Get the Landing Page Count
        if ((apiu_report_path == '/api-university') || (apiu_report_path == '/api-university/api-provider-training') || (apiu_report_path == '/api-university/api-basics') || (apiu_report_path == '/api-university/api-developer-training') || (apiu_report_path == '/api-university/apis-for-executives')) {
          pw_apiu_get_landing_page_count();
        } else if (pwPageLevel[1] == "news") {
          //Check if the page belongs to story and Series
          pw_get_story_series_pages();
        } else if (pwPageLevel[1] == "api-university") {
          // Check if the page belongs to APIU Series home Page
          pw_apiu_series_home_page(apiu_report_path);
        } else {
          window.apiu = '#notapiu';
        }
      function pw_get_story_series_pages() {
        $('.field-name-field-article-body', context).once('pw_api_university', function () {
          var apiu_university_story = Drupal.settings.apiureportVarSet.apiu_university_story;
          if (typeof apiu_university_story == 'string') {
            if (apiu_university_story !== '"No"') {
              window.apiu = '#story';
             /* dataLayer.push({
                'event': 'apiu_story_event',
                'apiu_story_variable': 1
              });*/
            } else window.apiu = '#notapiu';
          }
          var apiu_university_series = Drupal.settings.apiureportVarSet.apiu_series_performance;
          if (typeof apiu_university_series == 'string') {
            if (apiu_university_series !== '') {
              window.apiu = '#story#' + apiu_university_series;
            }
          }
        });
      }
      // Function to get the last part of url : Determining APIU Series Home Page
      function getLastPart(url) {
        var parts = url.split("/");
        return (url.lastIndexOf('/') !== url.length - 1 ? parts[parts.length - 1] : parts[parts.length - 2]);
      }
      // Function to check if it belongs to APIU Series Home Page
      function pw_apiu_series_home_page(apiu_report_path) {
        $('.apiu-banner-logo', context).once('pw_api_university', function () {
          var str = apiu_report_path;
          var api_university_exists = str.indexOf("api-university");
          var lastparturl = getLastPart(str);
          if (api_university_exists == 1) {
            if (lastparturl !== 'api-university' || lastparturl !== 'api-provider-training' || lastparturl !== 'api-basics' || lastparturl !== 'api-developer-training' || lastparturl !== 'apis-for-executives') {
              var apiu_series_home_page = Drupal.settings.apiureportVarSet.apiu_series_home_page;
              if (apiu_series_home_page == lastparturl) {
                window.apiu = '#series-home-page';
               /* dataLayer.push({
                  'event': 'apiu_series_landing_event',
                  'apiu_series_landing_page': apiu_series_home_page
                });*/
              }
            }
          }
        });
      }
      // Check if the page belongs to APIU Landing Page
      function pw_apiu_get_landing_page_count() {
        $('.apiu-banner-logo', context).once('pw_api_university', function () {
            var apiu_university_landing = Drupal.settings.apiureportVarSet.apiu_university_landing;
            if(typeof apiu_university_landing == 'number') {
              window.apiu = '#landing';
            /*  dataLayer.push({
                'event': 'apiu_landingpage_event',
                'apiu_landing_page': apiu_university_landing
              });*/
            }
        });
      }
    }
  }
})(jQuery);
;/*})'"*/
;/*})'"*/
(function ($) {
  $("form#klaviyo-lists-user-subscribe-form").find(".g-recaptcha").hide();
  $('#edit-klaviyo-form-klaviyo-programmableweb-today-email').keydown(function() {
    // $('#block-klaviyo-lists-1-klaviyo button[type="submit"]').hide();
    $("form#klaviyo-lists-user-subscribe-form").find("p.help-block").css({"display":"inline","width":"auto"});
    $("form#klaviyo-lists-user-subscribe-form").find("iframe").css({"height":"auto","width":"auto"});
    $("form#klaviyo-lists-user-subscribe-form").find(".g-recaptcha").show();
  });
  $("#edit-klaviyo-form-submit").click(function(e) {
    e.preventDefault();
    $emailValue = $('#edit-klaviyo-form-klaviyo-programmableweb-today-email').val();
    // Check if form exists
    if ($("#edit-klaviyo-form-submit").length) {
      // Check if value is not empty and valid
      if (($emailValue) && (pwEmailValidate($emailValue))) {
        // Check if email is of pattern [0-9]@yahoo.com
        if (!pwInvalidEmailValidate($emailValue)) {
          $("#klaviyo-lists-user-subscribe-form")[0].submit();
        }
        else {
          return false;
        }
      }
      else {
        $('.messages.error.error-pwt').remove();
        $('#block-klaviyo-lists-1-klaviyo').append('<div class="messages error error-pwt">Please enter Valid Email Address</div>');
      }
    }
  });
  // Function to check for Spam Accounts from Yahoo Email ID
  function pwInvalidEmailValidate(emailAddress){
    // Any email address with pattern
    // var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    // Email address with [0-9]@yahoo.com
    var expr = /^([0-9_\-\.][a-zA-Z0-9_\-\.]+)@(yahoo+)\.([a-zA-Z]{2,5})$/;
    return expr.test(emailAddress);
  }
  // Function to check if Email Address is valid
  function pwEmailValidate(emailAddress) {
    var EMAIL_REGEXP = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
    return EMAIL_REGEXP.test(emailAddress)
  }
})(jQuery);

;/*})'"*/
;/*})'"*/
!function ($) {

    "use strict";

    function accordionGroupTemplate(parentId, $heading){
        var tabSelector = $heading.attr('data-target'),
            active = $heading.parent().is('.active');

        if (!tabSelector) {
            tabSelector = $heading.attr('href');
            tabSelector = tabSelector && tabSelector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
        }

        var $tabContent = $(tabSelector),
            groupId = $tabContent.attr('id') + '-collapse';


        return '<div class="panel panel-default">' +
            '   <div class="panel-heading">' +
            '      <h4 class="panel-title">' +
            '        <a class="' + (active ? '' : 'collapsed') + '" data-toggle="collapse" data-parent="#' + parentId + '" href="#' + groupId + '">' +
            '           ' + $heading.html() +
            '        </a>' +
            '      </h4>' +
            '   </div>' +
            '   <div id="' + groupId + '" class="panel-collapse collapse ' + (active ? 'in' : '') + '">' +
            '       <div class="panel-body">' +
            '           ' + $tabContent.html() +
            '       </div>' +
            '   </div>' +
            '</div>';
    }

    function accordionTemplate(id, $headings, clazz){
        var accordionTemplate = '<div class="panel-group ' + clazz + '" id="' + id +'">';
        $headings.each(function(){
            var $heading = $(this);
            accordionTemplate += accordionGroupTemplate(id, $heading);
        });
        accordionTemplate += '</div>';
        return accordionTemplate;
    }


    /* TAB-COLLAPSE PLUGIN DEFINITION
     * ===================== */

    $.fn.tabCollapse = function (options) {
        return this.each(function () {
            var $this = $(this),
                $headings =  $this.find('li:not(.dropdown) [data-toggle="tab"], li:not(.dropdown) [data-toggle="pill"]');
            options = $.extend({}, $.fn.tabCollapse.defaults, options);
            var accordionHtml = accordionTemplate($this.attr('id') + '-accordion', $headings, options.accordionClass);
            $this.after(accordionHtml);
            $this.addClass(options.tabsClass);
            $this.siblings('.tab-content').addClass(options.tabsClass);
        })
    };

    $.fn.tabCollapse.defaults = {
        accordionClass: 'visible-xs',
        tabsClass: 'hidden-xs'
    }

}(window.jQuery);
;/*})'"*/
;/*})'"*/
(function ($) {
    // Remove placeholder from search box
    $('.navbar-collapse-search .form-type-textfield #edit-term--3').removeAttr('placeholder');
  /*$('#myTab').tabCollapse();
  $('a[data-toggle="tab"]').live('click', function() {
    var aHref = $(this).attr('href');
    alert(aHref);
    $('#myTab li').each(function() {
      $(this).removeClass('active');
    });
    $('#myTab a[data-toggle="tab"][href="' + aHref + '"]').parent('li').addClass('active');
  });*/
})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {
  $(document).ready(function() {
    var windowWidth = $(window).width();
    var mobileDevice = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));

    if (windowWidth > 991) {
      if ($('#block-pw-common-pw-blank-main-menu').length) {
        $.ajax({
          url: "/pw-load-main-menu",
          success: function(result) {
            $('#block-pw-common-pw-blank-main-menu').replaceWith(result);
          }
        });
      }
    }
  });
  $(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth > 991) {
      if ($('#block-pw-common-pw-blank-main-menu').length) {
        $.ajax({
          url: "/pw-load-main-menu",
          success: function(result) {
            $('#block-pw-common-pw-blank-main-menu').replaceWith(result);
          }
        });
      }
    }
  });
  $(document).ajaxComplete(function(event, xhr, settings) {
    if (settings.url == '/pw-load-main-menu') {
      if ($('#om-menu-top-most-menu').length) {
        // OM Maximenu Initialize
        $('#om-maximenu-top-most-menu li.om-leaf .om-maximenu-content').removeClass('om-maximenu-content-nofade');
        //$('#om-maximenu-top-most-menu li.om-leaf').hover(pwOmFadeIn, pwOmFadeOut); //native jquery
        $('#om-maximenu-top-most-menu li.om-leaf').hoverIntent({
          over: pwOmFadeIn,
          timeout: 250,
          out: pwOmFadeOut
        });
        function pwOmFadeIn(){ $('.om-maximenu-content.closed', this).fadeIn('fast'); }
        function pwOmFadeOut(){ $('.om-maximenu-content.closed', this).fadeOut("fast"); }

        // Quicktabs Initialize
        $.extend(true, Drupal.settings, Drupal.settings);
        $('.quicktabs-wrapper').once(function(){
          Drupal.quicktabs.prepare(this);
        });

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
        if (!("lazyloader" in Drupal.settings)) {
          Drupal.settings.lazyloader = [];
          Drupal.settings.lazyloader.loadImageDelay = 50;
        }
        // $('#om-menu-top-most-menu img[data-src][data-src!=""]').lazyloader();
        $('img[data-src][data-src!=""]').lazyloader();
      }
    }
  });
})(jQuery);

;/*})'"*/
;/*})'"*/
/**
 * @file
 * Cookie Compliance Javascript.
 */

(function ($) {
  'use strict';
  var euCookieComplianceBlockCookies;

  Drupal.behaviors.eu_cookie_compliance_popup = {
    attach: function (context, settings) {
      $('body', context).once('eu-cookie-compliance', function () {
        // If configured, check JSON callback to determine if in EU.
        if (Drupal.settings.eu_cookie_compliance.popup_eu_only_js) {
          if (Drupal.eu_cookie_compliance.showBanner()) {
            var url = Drupal.settings.basePath + Drupal.settings.pathPrefix + 'eu-cookie-compliance-check';
            var data = {};
            $.getJSON(url, data, function (data) {
              // If in the EU, show the compliance banner.
              if (data.in_eu) {
                Drupal.eu_cookie_compliance.execute();
              }

              // If not in EU, set an agreed cookie automatically.
              else {
                Drupal.eu_cookie_compliance.setStatus(2);
              }
            });
          }
        }

        // Otherwise, fallback to standard behavior which is to render the banner.
        else {
          Drupal.eu_cookie_compliance.execute();
        }
      });
    }
  };

  Drupal.eu_cookie_compliance = {};

  Drupal.eu_cookie_compliance.execute = function () {
    try {
      if (!Drupal.settings.eu_cookie_compliance.popup_enabled) {
        return;
      }

      if (!Drupal.eu_cookie_compliance.cookiesEnabled()) {
        return;
      }

      Drupal.eu_cookie_compliance.updateCheck();
      var status = Drupal.eu_cookie_compliance.getCurrentStatus();
      if ((status === 0 && Drupal.settings.eu_cookie_compliance.method === 'default') || status === null) {
        if (!Drupal.settings.eu_cookie_compliance.disagree_do_not_show_popup || status === null) {
          // Detect mobile here and use mobile_popup_html_info, if we have a mobile device.
          if (window.matchMedia('(max-width: ' + Drupal.settings.eu_cookie_compliance.mobile_breakpoint + 'px)').matches && Drupal.settings.eu_cookie_compliance.use_mobile_message) {
            Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.mobile_popup_html_info);
          }
          else {
            Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.popup_html_info);
          }

          Drupal.eu_cookie_compliance.attachAgreeEvents();
        }
      }
      else if (status === 1 && Drupal.settings.eu_cookie_compliance.popup_agreed_enabled) {
        Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.popup_html_agreed);
        Drupal.eu_cookie_compliance.attachHideEvents();
      }
      else if (status === 2 && Drupal.settings.eu_cookie_compliance.withdraw_enabled) {
        Drupal.eu_cookie_compliance.createWithdrawBanner(Drupal.settings.eu_cookie_compliance.withdraw_markup);
        Drupal.eu_cookie_compliance.attachWithdrawEvents();
      }
    }
    catch (e) {
    }
  };

  Drupal.eu_cookie_compliance.createWithdrawBanner = function (html) {
    var $html = $('<div></div>').html(html);
    var $banner = $('.eu-cookie-withdraw-banner', $html);
    $html.attr('id', 'sliding-popup');
    $html.addClass('eu-cookie-withdraw-wrapper');

    if (!Drupal.settings.eu_cookie_compliance.popup_use_bare_css) {
      $banner.height(Drupal.settings.eu_cookie_compliance.popup_height)
          .width(Drupal.settings.eu_cookie_compliance.popup_width);
    }
    $html.hide();
    var height = 0;
    if (Drupal.settings.eu_cookie_compliance.popup_position) {
      $html.prependTo('body');
      height = $html.outerHeight();

      $html.show()
          .addClass('sliding-popup-top')
          .addClass('clearfix')
          .css({ top: -1 * height });
      // For some reason, the tab outerHeight is -10 if we don't use a timeout
      // function to reveal the tab.
      setTimeout(function () {
        $html.animate({ top: -1 * height }, Drupal.settings.eu_cookie_compliance.popup_delay, null, function () {
          $html.trigger('eu_cookie_compliance_popup_open');
        });
      }.bind($html, height), 0);
    }
    else {
      if (Drupal.settings.eu_cookie_compliance.better_support_for_screen_readers) {
        $html.prependTo('body');
      }
      else {
        $html.appendTo('body');
      }
      height = $html.outerHeight();
      $html.show()
          .addClass('sliding-popup-bottom')
          .css({ bottom: -1 * height });
      // For some reason, the tab outerHeight is -10 if we don't use a timeout
      // function to reveal the tab.
      setTimeout(function () {
        $html.animate({ bottom: -1 * height }, Drupal.settings.eu_cookie_compliance.popup_delay, null, function () {
          $html.trigger('eu_cookie_compliance_popup_open');
        });
      }.bind($html, height), 0);
    }
  };

  Drupal.eu_cookie_compliance.toggleWithdrawBanner = function () {
    var $wrapper = $('#sliding-popup');
    var $tab = $('.eu-cookie-withdraw-tab');
    var $bannerIsShowing = Drupal.settings.eu_cookie_compliance.popup_position ? parseInt($wrapper.css('top')) === 0 : parseInt($wrapper.css('bottom')) === 0;
    var topBottom = (Drupal.settings.eu_cookie_compliance.popup_position ? 'top' : 'bottom');
    var height = $wrapper.outerHeight();
    if (Drupal.settings.eu_cookie_compliance.popup_position) {
      if ($bannerIsShowing) {
        $wrapper.animate({'top' : -1 * height}, Drupal.settings.eu_cookie_compliance.popup_delay);
      }
      else {
        $wrapper.animate({'top' : 0}, Drupal.settings.eu_cookie_compliance.popup_delay);
      }
    }
    else {
      if ($bannerIsShowing) {
        $wrapper.animate({'bottom' : -1 * height}, Drupal.settings.eu_cookie_compliance.popup_delay);
      }
      else {
        $wrapper.animate({'bottom' : 0}, Drupal.settings.eu_cookie_compliance.popup_delay);
      }
    }
  };

  Drupal.eu_cookie_compliance.createPopup = function (html) {
    // This fixes a problem with jQuery 1.9.
    var $popup = $('<div></div>').html(html);
    $popup.attr('id', 'sliding-popup');
    if (!Drupal.settings.eu_cookie_compliance.popup_use_bare_css) {
      $popup.height(Drupal.settings.eu_cookie_compliance.popup_height)
          .width(Drupal.settings.eu_cookie_compliance.popup_width);
    }

    $popup.hide();
    var height = 0;
    if (Drupal.settings.eu_cookie_compliance.popup_position) {
      $popup.prependTo('body');
      height = $popup.outerHeight();
      $popup.show()
        .attr({ 'class': 'sliding-popup-top clearfix' })
        .css({ top: -1 * height })
        .animate({ top: 0 }, Drupal.settings.eu_cookie_compliance.popup_delay, null, function () {
          $popup.trigger('eu_cookie_compliance_popup_open');
        });
    }
    else {
      if (Drupal.settings.eu_cookie_compliance.better_support_for_screen_readers) {
        $popup.prependTo('body');
      }
      else {
        $popup.appendTo('body');
      }

      height = $popup.outerHeight();
      $popup.show()
        .attr({ 'class': 'sliding-popup-bottom' })
        .css({ bottom: -1 * height })
        .animate({ bottom: 0 }, Drupal.settings.eu_cookie_compliance.popup_delay, null, function () {
          $popup.trigger('eu_cookie_compliance_popup_open');
        });
    }
  };

  Drupal.eu_cookie_compliance.attachAgreeEvents = function () {
    var clickingConfirms = Drupal.settings.eu_cookie_compliance.popup_clicking_confirmation;
    var scrollConfirms = Drupal.settings.eu_cookie_compliance.popup_scrolling_confirmation;

    $('.agree-button').click(Drupal.eu_cookie_compliance.acceptAction);
    $('.decline-button').click(Drupal.eu_cookie_compliance.declineAction);

    if (clickingConfirms) {
      $('a, input[type=submit], button[type=submit]').not('.popup-content *').bind('click.euCookieCompliance', Drupal.eu_cookie_compliance.acceptAction);
    }

    if (scrollConfirms) {
      var alreadyScrolled = false;
      var scrollHandler = function () {
        if (alreadyScrolled) {
          Drupal.eu_cookie_compliance.acceptAction();
          $(window).off('scroll', scrollHandler);
        }
        else {
          alreadyScrolled = true;
        }
      };

      $(window).bind('scroll', scrollHandler);
    }

    $('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction);
  };

  Drupal.eu_cookie_compliance.attachHideEvents = function () {
    var popupHideAgreed = Drupal.settings.eu_cookie_compliance.popup_hide_agreed;
    var clickingConfirms = Drupal.settings.eu_cookie_compliance.popup_clicking_confirmation;
    $('.hide-popup-button').click(function () {
      Drupal.eu_cookie_compliance.changeStatus(2);
    }
    );
    if (clickingConfirms) {
      $('a, input[type=submit], button[type=submit]').unbind('click.euCookieCompliance');
    }

    if (popupHideAgreed) {
      $('a, input[type=submit], button[type=submit]').bind('click.euCookieComplianceHideAgreed', function () {
        Drupal.eu_cookie_compliance.changeStatus(2);
      });
    }

    $('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction);
  };

  Drupal.eu_cookie_compliance.attachWithdrawEvents = function () {
    $('.eu-cookie-withdraw-button').click(Drupal.eu_cookie_compliance.withdrawAction);
    $('.eu-cookie-withdraw-tab').click(Drupal.eu_cookie_compliance.toggleWithdrawBanner);
  };

  Drupal.eu_cookie_compliance.acceptAction = function () {
    var agreedEnabled = Drupal.settings.eu_cookie_compliance.popup_agreed_enabled;
    var nextStatus = 1;
    if (!agreedEnabled) {
      Drupal.eu_cookie_compliance.setStatus(1);
      nextStatus = 2;
    }

    if (!euCookieComplianceHasLoadedScripts) {
      euCookieComplianceLoadScripts();
    }

    if (typeof euCookieComplianceBlockCookies !== 'undefined') {
      clearInterval(euCookieComplianceBlockCookies);
    }

    Drupal.eu_cookie_compliance.changeStatus(nextStatus);
  };

  Drupal.eu_cookie_compliance.declineAction = function () {
    Drupal.eu_cookie_compliance.setStatus(0);
    var popup = $('#sliding-popup');
    if (popup.hasClass('sliding-popup-top')) {
      popup.animate({ top: popup.outerHeight() * -1 }).trigger('eu_cookie_compliance_popup_close');
    }
    else {
      popup.animate({ bottom: popup.outerHeight() * -1 }).trigger('eu_cookie_compliance_popup_close');
    }
  };

  Drupal.eu_cookie_compliance.withdrawAction = function () {
    Drupal.eu_cookie_compliance.setStatus(0);

    location.reload();
  };

  Drupal.eu_cookie_compliance.moreInfoAction = function () {
    if (Drupal.settings.eu_cookie_compliance.disagree_do_not_show_popup) {
      Drupal.eu_cookie_compliance.setStatus(0);
      $('#sliding-popup').trigger('eu_cookie_compliance_popup_close').remove();
    }
    else {
      if (Drupal.settings.eu_cookie_compliance.popup_link_new_window) {
        window.open(Drupal.settings.eu_cookie_compliance.popup_link);
      }
      else {
        window.location.href = Drupal.settings.eu_cookie_compliance.popup_link;
      }
    }
  };

  Drupal.eu_cookie_compliance.getCurrentStatus = function () {
    var cookieName = (typeof eu_cookie_compliance_cookie_name === 'undefined' || eu_cookie_compliance_cookie_name === '') ? 'cookie-agreed' : eu_cookie_compliance_cookie_name;
    var value = $.cookie(cookieName);
    value = parseInt(value);
    if (isNaN(value)) {
      value = null;
    }

    return value;
  };

  Drupal.eu_cookie_compliance.changeStatus = function (value) {
    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    var reloadPage = Drupal.settings.eu_cookie_compliance.reload_page;
    if (status === value) {
      return;
    }

    if (Drupal.settings.eu_cookie_compliance.popup_position) {
      $('.sliding-popup-top').animate({ top: $('#sliding-popup').outerHeight() * -1 }, Drupal.settings.eu_cookie_compliance.popup_delay, function () {
        if (status === null && !reloadPage) {
          $('#sliding-popup').html(Drupal.settings.eu_cookie_compliance.popup_html_agreed).animate({ top: 0 }, Drupal.settings.eu_cookie_compliance.popup_delay);
          Drupal.eu_cookie_compliance.attachHideEvents();
        }
        else if (status === 1) {
          $('#sliding-popup').trigger('eu_cookie_compliance_popup_close').remove();
        }
      });
    }
    else {
      $('.sliding-popup-bottom').animate({ bottom: $('#sliding-popup').outerHeight() * -1 }, Drupal.settings.eu_cookie_compliance.popup_delay, function () {
        if (status === null && !reloadPage) {
          $('#sliding-popup').html(Drupal.settings.eu_cookie_compliance.popup_html_agreed).animate({ bottom: 0 }, Drupal.settings.eu_cookie_compliance.popup_delay);
          Drupal.eu_cookie_compliance.attachHideEvents();
        }
        else if (status === 1) {
          $('#sliding-popup').trigger('eu_cookie_compliance_popup_close').remove();
        }
      });
    }

    if (reloadPage) {
      location.reload();
    }

    if (value === 2 && Drupal.settings.eu_cookie_compliance.withdraw_enabled) {
      Drupal.eu_cookie_compliance.createWithdrawBanner(Drupal.settings.eu_cookie_compliance.withdraw_markup);
      Drupal.eu_cookie_compliance.attachWithdrawEvents();
    }

    Drupal.eu_cookie_compliance.setStatus(value);
  };

  Drupal.eu_cookie_compliance.setStatus = function (status) {
    var date = new Date();
    var domain = Drupal.settings.eu_cookie_compliance.domain ? Drupal.settings.eu_cookie_compliance.domain : '';
    var path = Drupal.settings.basePath;
    var cookieName = (typeof eu_cookie_compliance_cookie_name === 'undefined' || eu_cookie_compliance_cookie_name === '') ? 'cookie-agreed' : eu_cookie_compliance_cookie_name;
    if (path.length > 1) {
      var pathEnd = path.length - 1;
      if (path.lastIndexOf('/') === pathEnd) {
        path = path.substring(0, pathEnd);
      }
    }

    var cookieSession = parseInt(Drupal.settings.eu_cookie_compliance.cookie_session);
    if (cookieSession) {
      $.cookie(cookieName, status, { path: path, domain: domain });
    }
    else {
      var lifetime = parseInt(Drupal.settings.eu_cookie_compliance.cookie_lifetime);
      date.setDate(date.getDate() + lifetime);
      $.cookie(cookieName, status, { expires: date, path: path, domain: domain });
    }
    $(document).trigger('eu_cookie_compliance.changeStatus', [status]);

    // Store consent if applicable.
    if (Drupal.settings.eu_cookie_compliance.store_consent && ((status === 1 && Drupal.settings.eu_cookie_compliance.popup_agreed_enabled) || (status === 2  && !Drupal.settings.eu_cookie_compliance.popup_agreed_enabled))) {
      var url = Drupal.settings.basePath + Drupal.settings.pathPrefix + 'eu-cookie-compliance/store_consent/banner';
      $.post(url, {}, function (data) { });
    }
  };

  Drupal.eu_cookie_compliance.hasAgreed = function () {
    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    return (status === 1 || status === 2);
  };

  Drupal.eu_cookie_compliance.showBanner = function () {
    var showBanner = false;
    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    if ((status === 0 && Drupal.settings.eu_cookie_compliance.method === 'default') || status === null) {
      if (!Drupal.settings.eu_cookie_compliance.disagree_do_not_show_popup || status === null) {
        showBanner = true;
      }
    }
    else if (status === 1 && Drupal.settings.eu_cookie_compliance.popup_agreed_enabled) {
      showBanner = true;
    }

    return showBanner;
  };

  Drupal.eu_cookie_compliance.cookiesEnabled = function () {
    var cookieEnabled = navigator.cookieEnabled;
    if (typeof navigator.cookieEnabled === 'undefined' && !cookieEnabled) {
      document.cookie = 'testCookie';
      cookieEnabled = (document.cookie.indexOf('testCookie') !== -1);
    }

    return cookieEnabled;
  };

  // This code upgrades the cookie agreed status when upgrading for an old version.
  Drupal.eu_cookie_compliance.updateCheck = function () {
    var legacyCookie = 'cookie-agreed-' + Drupal.settings.eu_cookie_compliance.popup_language;
    var domain = Drupal.settings.eu_cookie_compliance.domain ? Drupal.settings.eu_cookie_compliance.domain : '';
    var path = Drupal.settings.basePath;
    var cookie = $.cookie(legacyCookie);
    var date = new Date();
    var cookieName = (typeof eu_cookie_compliance_cookie_name === 'undefined' || eu_cookie_compliance_cookie_name === '') ? 'cookie-agreed' : eu_cookie_compliance_cookie_name;

    // jQuery.cookie 1.0 (bundled with Drupal) returns null,
    // jQuery.cookie 1.4.1 (bundled with some themes) returns undefined.
    // We had a 1.4.1 related bug where the value was set to 'null' (string).
    if (cookie !== undefined && cookie !== null && cookie !== 'null') {
      date.setDate(date.getDate() + parseInt(Drupal.settings.eu_cookie_compliance.cookie_lifetime));
      $.cookie(cookieName, cookie, { expires: date, path:  path, domain: domain });

      // Use removeCookie if the function exists.
      if (typeof $.removeCookie !== 'undefined') {
        $.removeCookie(legacyCookie);
      }
      else {
        $.cookie(legacyCookie, null, { path: path, domain: domain });
      }
    }
  };

  // Load blocked scripts if the user has agreed to being tracked.
  var euCookieComplianceHasLoadedScripts = false;
  $(function () {
    if (Drupal.eu_cookie_compliance.hasAgreed()
        || (Drupal.eu_cookie_compliance.getCurrentStatus() === null && Drupal.settings.eu_cookie_compliance.method !== 'opt_in')
    ) {
      euCookieComplianceLoadScripts();
      euCookieComplianceHasLoadedScripts = true;
    }
  });

  // Block cookies when the user hasn't agreed.
  Drupal.behaviors.eu_cookie_compliance_popup_block_cookies = {
    initialized: false,
    attach: function (context, settings) {
      if (!Drupal.behaviors.eu_cookie_compliance_popup_block_cookies.initialized && settings.eu_cookie_compliance) {
        Drupal.behaviors.eu_cookie_compliance_popup_block_cookies.initialized = true;
        if ((settings.eu_cookie_compliance.method === 'opt_in' && (Drupal.eu_cookie_compliance.getCurrentStatus() === null || !Drupal.eu_cookie_compliance.hasAgreed()))
          || (settings.eu_cookie_compliance.method === 'opt_out' && !Drupal.eu_cookie_compliance.hasAgreed() && Drupal.eu_cookie_compliance.getCurrentStatus() !== null)
        ) {
          // Split the white-listed cookies.
          var euCookieComplianceWhitelist = settings.eu_cookie_compliance.whitelisted_cookies.split(/\r\n|\n|\r/g);

          // Add the EU Cookie Compliance cookie.
          euCookieComplianceWhitelist.push((typeof settings.eu_cookie_compliance.cookie_name === 'undefined' || settings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed' : settings.eu_cookie_compliance.cookie_name);
          euCookieComplianceBlockCookies = setInterval(function () {
            // Load all cookies from jQuery.
            var cookies = $.cookie();

            // Check each cookie and try to remove it if it's not white-listed.
            for (var i in cookies) {
              var remove = true;
              var hostname = window.location.hostname;
              var cookieRemoved = false;
              var index = 0;

              // Skip the PHP session cookie.
              if (i.indexOf('SESS') === 0 || i.indexOf('SSESS') === 0) {
                remove = false;
              }

              // Check if the cookie is white-listed.
              for (var item in euCookieComplianceWhitelist) {
                if (i === euCookieComplianceWhitelist[item]) {
                  remove = false;
                }
              }

              // Remove the cookie if it's not white-listed.
              if (remove) {
                while (!cookieRemoved && hostname !== '') {
                  // Attempt to remove.
                  cookieRemoved = $.removeCookie(i, { domain: '.' + hostname, path: '/' });
                  if (!cookieRemoved) {
                    cookieRemoved = $.removeCookie(i, { domain: hostname, path: '/' });
                  }

                  index = hostname.indexOf('.');

                  // We can be on a sub-domain, so keep checking the main domain as well.
                  hostname = (index === -1) ? '' : hostname.substring(index + 1);
                }
              }
            }
          }, 5000);
        }
      }
    }
  }

})(jQuery);

;/*})'"*/
;/*})'"*/
