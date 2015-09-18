(function(){

var app = angular.module('site', []);

app.controller('MenuController', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    // scroll page to element id of menu item (#item)
    $scope.gotoItem = function(id) {
      // set this to the id we are going to
      $location.hash(id);
      $anchorScroll.yOffset = 65;
      $anchorScroll();
    };
  }]);

app.directive('slideShow', function(){
	return {
		restrict: 'E',
		templateUrl: "./ng/snippets/slide-show.html"
	};
});

app.directive('navBar', function(){
	return {
		restrict: 'E',
		templateUrl: './ng/snippets/nav-bar.html'
	};
});

app.directive('pageContent', ['filename', function(filename){
	
	return {
		restrict: 'E',
		templateUrl: filename
	};
}]);

app.directive('pageSections', function(){
	var getData = function(url){
		// var data = $http.get(url).
		// then(function(response) {
		// 	// success
		// }, function(response) {
		// 	alert("error: cannot get page data");
		// });
		return url;
	};

	return {
		restrict: 'E',
		templateUrl: './ng/snippets/page-sections.html',
		controller: function(){
			this.sections = info;
		},
		controllerAs: 'page'
	};
});

// This probably needs to be put into a JSON file...
var info = [
{
	id: "why",
	name: "Why",
	content: "./ng/content/why.html"
},
{
	id: "stuff",
	name: "Stuff",
	content: "./ng/content/stuff.html"
},
{
	id: "about",
	name: "Some History",
	content: "./ng/content/about.html"
},
{
	id: "contact",
	name: "Get in Touch",
	content: "./ng/content/contact.html"
}
];

// end closure
})();
