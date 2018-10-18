describe('angularjs homepage todo list', function() {
  browser.get('https://angularjs.org');
    title = browser.getTitle();

  it('validate browser title', function() {
  	title.then(function(text){
  		expect(title).toEqual("AngularJS — Superheroic JavaScript MVW Framework");
  	});
  });
});