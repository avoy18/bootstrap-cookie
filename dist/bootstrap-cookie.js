!function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var n=function(){function n(e){var t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.target=(null==e?void 0:e.target)||"#BootstrapCookieBanner",this.showBanner=!1,this.$bannerWrapper=document.querySelector(this.target),this.$bannerAlert=this.$bannerWrapper.querySelector(this.target+" .alert"),this.isSimpleConsentMode=null==e||!e.isSimpleConsentMode||(null==e?void 0:e.isSimpleConsentMode),this.cookiePreferenceName="__bscookie_preferences";var o=!(null==e||!e.isTrackingAllowed)&&(null==e?void 0:e.isTrackingAllowed);this.cookiePreferences={analytics:o,advertisement:o,functionality:o,necessary:!0},this.$bannerWrapper&&this.$bannerAlert&&bootstrap&&null!==(t=bootstrap)&&void 0!==t&&t.Alert&&this.init()}var t,o,r;return t=n,(o=[{key:"init",value:function(){this.bootstrapCookieAlert=new bootstrap.Alert(this.$bannerAlert),this.$acceptButton=this.$bannerWrapper.querySelector(this.target+' [data-bscookie="accept"]'),this.checkBanner(),this.showBanner&&(this.$bannerWrapper.classList.remove("d-none"),this.isSimpleConsentMode?this.handleSimpleConsentMode():this.handleAdvancedConsentMode())}},{key:"handleSimpleConsentMode",value:function(){var e=this;this.$acceptButton.addEventListener("click",(function(n){window.localStorage.setItem(e.cookiePreferenceName,JSON.stringify(e.cookiePreferences)),e.closeBanner()}))}},{key:"handleAdvancedConsentMode",value:function(){}},{key:"checkBanner",value:function(){var e=window.localStorage.getItem(this.cookiePreferenceName);this.showBanner=!e}},{key:"closeBanner",value:function(){this.bootstrapCookieAlert.close()}}])&&e(t.prototype,o),r&&e(t,r),n}();window.bootstrapCookieBanner=new n}();