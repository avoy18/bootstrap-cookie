class BootstrapCookieBanner {
  constructor(settings) {
    this.target = settings?.target || "#BootstrapCookieBanner";

    this.showBanner = false;

    this.$bannerWrapper = document.querySelector(this.target);

    this.$bannerAlert = this.$bannerWrapper.querySelector(
      this.target + " .alert"
    );

    this.isSimpleConsentMode = settings?.isSimpleConsentMode
      ? settings?.isSimpleConsentMode
      : true;

    this.cookiePreferenceName = "__bscookie_preferences";

    const isTrackingAllowed = settings?.isTrackingAllowed
      ? settings?.isTrackingAllowed
      : false;

    // default cookie preferences
    this.cookiePreferences = {
      analytics: isTrackingAllowed,
      advertisement: isTrackingAllowed,
      functionality: isTrackingAllowed,
      necessary: true,
    };

    // exit if the element was not found or the bootstrap Alert API is not available
    if (
      this.$bannerWrapper &&
      this.$bannerAlert &&
      bootstrap &&
      bootstrap?.Alert
    ) {
      this.init();
    }
  }

  init() {
    this.bootstrapCookieAlert = new bootstrap.Alert(this.$bannerAlert);

    this.$acceptButton = this.$bannerWrapper.querySelector(
      this.target + ' [data-bscookie="accept"]'
    );

    this.checkBanner();

    if (this.showBanner) {
      this.$bannerWrapper.classList.remove("d-none");

      if (this.isSimpleConsentMode) {
        this.handleSimpleConsentMode();
      } else {
        this.handleAdvancedConsentMode();
      }
    }
  }

  /**
   * Handles the simple consent banner
   */
  handleSimpleConsentMode() {
    this.$acceptButton.addEventListener("click", (e) => {
      window.localStorage.setItem(
        this.cookiePreferenceName,
        JSON.stringify(this.cookiePreferences)
      );

      this.closeBanner();
    });
  }

  handleAdvancedConsentMode() {}

  /**
   * This function checks if the banner should be visible to the user
   * based on wether or not they have interacted with it before
   */
  checkBanner() {
    const cookiePreferences = window.localStorage.getItem(
      this.cookiePreferenceName
    );

    this.showBanner = !cookiePreferences;
  }

  closeBanner() {
    this.bootstrapCookieAlert.close();
  }
}

window.bootstrapCookieBanner = new BootstrapCookieBanner();
