!function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.target=(null==e?void 0:e.target)||"#BootstrapCookieBanner",this.showBanner=!1,this.$bannerWrapper=document.querySelector(this.target),this.$bannerAlert=this.$bannerWrapper.querySelector(this.target+" .alert"),this.isSimpleConsentMode=null==e||!e.isSimpleConsentMode||(null==e?void 0:e.isSimpleConsentMode),this.cookiePreferenceName="__bscookie_preferences";var o=!(null==e||!e.acceptedByDefault)&&(null==e?void 0:e.acceptedByDefault);this.cookiePreferences={analytics:o,advertisement:o,functionality:o,necessary:!0},this.$bannerWrapper&&this.$bannerAlert&&bootstrap&&null!==(n=bootstrap)&&void 0!==n&&n.Alert&&this.init()}var n,o,r;return n=t,(o=[{key:"init",value:function(){this.bootstrapCookieAlert=new bootstrap.Alert(this.$bannerAlert),this.$acceptButton=this.$bannerWrapper.querySelector(this.target+' [data-bscookie="accept"]'),this.checkBanner(),this.showBanner&&(this.$bannerWrapper.classList.remove("d-none"),this.isSimpleConsentMode?this.handleSimpleConsentMode():this.handleAdvancedConsentMode())}},{key:"handleSimpleConsentMode",value:function(){var e=this;this.$acceptButton.addEventListener("click",(function(t){window.localStorage.setItem(e.cookiePreferenceName,JSON.stringify(e.cookiePreferences)),e.closeBanner()}))}},{key:"handleAdvancedConsentMode",value:function(){}},{key:"checkBanner",value:function(){var e=window.localStorage.getItem(this.cookiePreferenceName);this.showBanner=!e}},{key:"closeBanner",value:function(){this.bootstrapCookieAlert.close()}}])&&e(n.prototype,o),r&&e(n,r),t}();window.bootstrapCookieBanner=new t}();