let basePage = require('../BasePage.js');
let homePageLocators = require('./HomePage-locators.js');

class WelcomePage {
    tapOnCategoryList(){
        homePageLocators.shopByCategoryDropDown.click();
    }

    tapOnFruitAndVegetablesMenu(){
        homePageLocators.fruitAndVegetablesMenu.click();
    }

    searchForItem(itemName){
        homePageLocators.searchbar.sendKeys(itemName);
        homePageLocators.searchBarButton.click();
    }
}
module.exports = new WelcomePage();