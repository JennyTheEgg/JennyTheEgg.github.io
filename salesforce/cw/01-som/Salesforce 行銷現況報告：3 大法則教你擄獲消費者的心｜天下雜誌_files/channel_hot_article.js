webpackJsonp([20],{2:function(t,e,n){t.exports=n("atiC")},"VU/8":function(t,e){t.exports=function(t,e,n,r,i,o){var c,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(c=t,s=t.default);var l,u="function"==typeof s?s.options:s;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId=i),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=l):r&&(l=r),l){var d=u.functional,_=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(t,e){return l.call(e),_(t,e)}):u.beforeCreate=_?[].concat(_,l):[l]}return{esModule:c,exports:s,options:u}}},Vl4H:function(t,e,n){"use strict";e.a={methods:{getSrcSets:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"w",n=this,r=[];return t.forEach(function(t){var i=void 0,o=void 0;switch(e){case"w":o=t.w,i=n.getResizeUrl(t.url,t.w,null);break;case"h":o=t.h,i=n.getResizeUrl(t.url,null,t.h)}r.push(i+" "+o+e)}),r},getSrcSetAttr:function(t,e){var n=this.getSrcSets(t,e);return _.join(n,", ")},getResizeUrl:function(t,e,n,r){var i=encodeURIComponent(t),o={w:e,h:n,format:r},c=[];return _.each(o,function(t,e){void 0!==t&&null!==t&&c.push(e+"="+t)}),"https://image-resizer.cwg.tw/resize/uri/"+i+"/?"+_.join(c,"&")}}}},atiC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("c5ye"),i=n.n(r),o=new Vue({el:"#channel_hot_article",data:data_from_backend,components:{"new-article-channel-hot-component":i.a},mounted:function(){var t=this;this.addArticleView(),this.setTimer(),this.recommender.uc2i.tables.forEach(function(e){t.getUC2IRecommender(e)})},methods:{getUC2IRecommender:function(t){var e=this,n=e.recommender.uc2i.api+"/"+t+"?algo="+Object({MIX_APP_URL:"https://www.cw.com.tw",MIX_API_URL:"https://www.cw.com.tw/api",MIX_API_CWG_URL:"https://api.cwg.tw",MIX_IMAGE_RESIZER_URL:"https://image-resizer.cwg.tw/resize",MIX_PAYMENT_API_CWG_CID:"cw",MIX_JWT_REFRESH:"false",MIX_JWT_TTL:"7200",MIX_JWT_REFRESH_TTL:"1209600",MIX_JWT_VERSION:"1",NODE_ENV:"production"}).RECOMMENDER_ALGO;axios.get(n).then(function(n){n.data.success&&(e.uc2iArticles[t]=n.data.items)}).catch(function(t){console.error(t)})},addArticleView:function(){axios.post(this.post_article_view_api)},setTimer:function(){setTimeout(this.checkEtuHasResponse,1e4)},checkEtuHasResponse:function(){this.is_etu_response_times_up=!0}}});window.article_vue=o,e.default=o},c5ye:function(t,e,n){var r=n("VU/8")(n("vm8b"),n("yR8G"),!1,null,null,null);t.exports=r.exports},vm8b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Vl4H");e.default={props:["articles","recommendads","id","type"],watch:{articles:function(t,e){for(var n=0;n<t.length;n++){var r=t[n].url;t[n].url=-1!=r.search("cw.com.tw")?r+"&from_id="+this.id+"&from_index="+(n+1):r}this.recommendArticles=t;var i=this;this.$nextTick(function(){i.loaded=!0})}},mixins:[r.a],data:function(){return{recommendArticles:this.articles,loaded:!1}},updated:function(){var t=document.querySelectorAll("img.recommend.lazyload");lazyload(t)},computed:{imgBlank:function(){return"https://www.cw.com.tw/images/common/blank.png"},imgDefault:function(){return"https://www.cw.com.tw/images/placeholder.jpg"}},methods:{subTitleString:function(t,e,n){for(var r=0,i="",o=/[^\x00-\xff]/g,c="",s=t.replace(o,"**").length,a=0;a<s&&(null!=(c=t.charAt(a).toString()).match(o)?r+=2:r++,!(r>e));a++)i+=c;return n&&s>e&&(i+="..."),i},replaceEmptyPhoto:function(t){return t||this.imgDefault},getPhotoSrcSets:function(t){return this.getSrcSetAttr([{url:t,w:220},{url:t,w:420},{url:t,w:630}])}}}},yR8G:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card__group card__group--list"},t._l(t.recommendArticles.slice(0,3),function(e){return n("a",{key:e.article_id,staticClass:"card__item",attrs:{href:e.url,"gtm-name":"read_more",eventaction:"reco_channel_article"}},[n("span",{staticClass:"card__img lazyload__group",class:{finished:t.loaded}},[n("img",{staticClass:"recommend lazyload",attrs:{"data-sizes":"auto",src:t.imgBlank,"data-src":t.replaceEmptyPhoto(e.photo),"data-srcset":t.getPhotoSrcSets(t.replaceEmptyPhoto(e.photo)),alt:e.title}})]),t._v(" "),n("span",{staticClass:"card__body"},[n("span",{staticClass:"card__title"},[t._v(t._s(e.title))])])])}),0)},staticRenderFns:[]}}},[2]);