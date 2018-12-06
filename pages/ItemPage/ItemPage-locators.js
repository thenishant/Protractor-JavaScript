module.exports = {
    addFirstItemToCart : element(by.css("button[class='btn btn-add col-xs-9']")),
    fruitAndVegetablesMenu : element(by.linkText('Fruits & Vegetables')),
    changeLocationButton : element(by.linkText("Change Location")),
    selectCityList : element(by.className("btn btn-default form-control ui-select-toggle")),
    city : element(by.model("$select.search")),
    firstCityName : element(by.binding("city.name")),
    enterPincode : element(by.id("areaselect")),
    selectPinCode : element(by.className("dropdown-menu ng-isolate-scope")),
    continueButton : element(by.name("continue"))
}

