let homePage = require('../pages/HomePage/HomePage.js');
let basePage = require("../pages/BasePage.js");
let itemPage = require("../pages/ItemPage/ItemPage.js");
let homePagelocators = require("../pages/HomePage/HomePage-locators.js")

describe("Add item to cart", function () {
    it('User should be able to add an item via category', function (done) {
        homePage.tapOnCategoryList();
        homePage.tapOnFruitAndVegetablesMenu();
        itemPage.addItemToCart();
        itemPage.changeLocation();
        expect(homePagelocators.itemInCart.getText()).toEqual("1 items");
        done();
    });

    it('User should be able to add an another item via search', function (done) {
        homePage.searchForItem("Fruit");
        itemPage.addItemToCart();
        expect(homePagelocators.itemInCart.getText()).toEqual("2 items");
        done();
    });
});