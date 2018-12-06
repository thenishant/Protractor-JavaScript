class BasePage {
    getPageTitle() {
        return browser.getTitle();
    }
}

module.exports = new BasePage();