let itemPageLocator = require('../ItemPage/ItemPage-locators.js');

class ItemPage {
    addItemToCart(){
        itemPageLocator.addFirstItemToCart.click();
    }

    changeLocation(){
        itemPageLocator.changeLocationButton.click();
        itemPageLocator.selectCityList.click();
        itemPageLocator.city.sendKeys("Bangalore");
        itemPageLocator.firstCityName.click();
        itemPageLocator.enterPincode.sendKeys("560001");
        itemPageLocator.selectPinCode.click();
        itemPageLocator.continueButton.click();
    }
}
module.exports = new ItemPage();