'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'availabilityFactory', function($scope, availabilityFactory) {
	
	var debug = true;
	$scope.onlyNumbers = /^\d+$/;
  	$scope.selectedFilter = {};
  	$scope.available = false;
  	$scope.cityTickVisible = true;
  	$scope.streetTickVisible = false;
  	$scope.numberTickVisible = false;


	//get data from the external source
	$scope.availabilityData = availabilityFactory.get();

	//construct list of cities
	$scope.cities = [];	
	$scope.streetsDictionary = [];




	// populate cities and streets lists
	for (var j=0; j< $scope.availabilityData.length; j++) {
		var cityItem = $scope.availabilityData[j].city;
		
		$scope.cities.push(cityItem.name);
		
		if (cityItem.street != undefined) {
			$scope.streetsDictionary[cityItem.name] = [];

			for (var i=0; i<cityItem.street.length; i++) {
				var streetName = cityItem.street[i].name;
				$scope.streetsDictionary[cityItem.name].push(streetName);
			}
		}
	}

	// set default value in select box
	$scope.selectedFilter.city = $scope.cities[0];
	

	// function used while user is typing.
    // if other city was selected clean fields: street, number
	$scope.cleanSelection = function() {
		$scope.selectedFilter.street = '';
		$scope.selectedFilter.number = '';
		$scope.cityTickVisible = true;

		//sprawdzic czy aktualnie wybrana miejscowosc ma w ogole ulice czy tylko numery.
		for (var i=0; i<$scope.availabilityData.length; i++) {
			if ($scope.availabilityData[i].city.name === $scope.selectedFilter.city) {
				var cityItem = $scope.availabilityData[i].city;
				console.log(cityItem);
			
			
			}
		}

	}

	$scope.streetSelected = function() {
		$scope.streetTickVisible = true;
	}
	$scope.checkStreet = function(typed) {
		if (typed.length > 5) {
			$scope.streetTickVisible = true;
		}
		else {
			$scope.streetTickVisible = false;
		}
	}

	// check availability function
	$scope.checkAvailability = function(selectedFilter) {
		

		//check the city
		for (var i=0; i<$scope.availabilityData.length; i++) {
			if ($scope.availabilityData[i].city.name === $scope.selectedFilter.city) {
				var cityItem = $scope.availabilityData[i].city;
				console.log('we have found a city that match');
				
				//check the street
				for (var j=0;j<cityItem.street.length;j++) {
					if ($scope.selectedFilter.street === "") {
						delete $scope.selectedFilter.street;
					}
					if( cityItem.street[j].name === $scope.selectedFilter.street ) {
						
						var numbersArray = cityItem.street[j].number;
						
						// check if number contains wildcard - "*"
						if (numbersArray.indexOf("*") != -1) {
							$scope.available = true;
						}
						// if number does not contain wildcard - do regular search
						else {
							if (debug) {
								console.log('aktualne numery = ' + numbersArray);
								console.log('szukany number = ' + $scope.selectedFilter.number);								
							}
						
							var isIn = numbersArray.indexOf($scope.selectedFilter.number);
							if (isIn >= 0) {
								$scope.available = true;	
								break;
							}
							else {
								$scope.available = false;
							}
						}


					}
				}
			break;	
			}
			$scope.available = false;
		}
		
	}

  }])
  .controller('AdminCtrl', ['$scope', function($scope) {

  }]);
