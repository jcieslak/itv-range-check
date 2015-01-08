'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  // .directive('enter', function() {
  // 	// sample dyrektywa!!!!
  // 	return {
  // 		restrict: 'A',
  // 		link: function(scope, element) {
  // 				element.bind('mouseenter', function() {
  // 					console.log('Im inside1!!!!');
  // 				})
  // 			}
  		
  // 	}
  // })
  // .directive('leave', function() {
  // 	return function(scope, element) {
  // 		element.bind("mouseleave", function() {
  // 			console.log('im leaving on a jet plane!');
  // 	});
  // }
  // })
  .directive('numberOnlyInput', function () {
    return {
        restrict: 'EA',
        template: '<input name="{{inputName}}" ng-model="inputValue" />',
        scope: {
            inputValue: '=',
            inputName: '='
        },
        link: function (scope) {
            scope.$watch('inputValue', function(newValue,oldValue) {
                var arr = String(newValue).split("");
                if (arr.length === 0) return;
                if (arr.length === 1 && (arr[0] == '-' || arr[0] === '.' )) return;
                if (arr.length === 2 && newValue === '-.') return;
                if (isNaN(newValue)) {
                    scope.inputValue = oldValue;
                }
            });
        }
    };
});



