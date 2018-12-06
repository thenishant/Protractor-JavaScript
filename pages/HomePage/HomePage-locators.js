module.exports = {
    shopByCategoryDropDown : element(by.css("li[class='dropdown full-wid hvr-drop']")),
    fruitAndVegetablesMenu: element(by.linkText('Fruits & Vegetables')),
    itemInCart : element(by.id("totalNumberOfCartItems")),
    searchbar : element(by.model("vm.searchPhrase")),
    searchBarButton : element(by.className("btn btn-default bb-search"))
}