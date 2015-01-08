'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'availabilityFactory', 'servicesFactory', function($scope, availabilityFactory, servicesFactory) {
	
	var debug = true;

	// @TODO: house numbers can also contain letters.
	// $scope.onlyNumbers = /^\d+$/;
	$scope.onlyNumbers = /^[a-zA-Z\d]+$/;
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

	// check availability function is called when user fills 3 inputs in the form.
	$scope.checkAvailability = function(selectedFilter) {
		

		// go through the cities and select matched city
		for (var i=0; i<$scope.availabilityData.length; i++) {

			// if selected city equals city in the database
			if ($scope.availabilityData[i].city.name === $scope.selectedFilter.city) {
			
				// we have city that matches!
				var cityItem = $scope.availabilityData[i].city;
				console.log('our CITY match in the DB = ' + cityItem.name);
				
				// go through the streets associated with given city and select matched
				for (var j=0;j<cityItem.street.length;j++) {

					if (cityItem.street[j].name == "*") {
						$scope.services = $scope.translateServices(cityItem.street[j].services);
						$scope.available = true;
						break;
					} 

					// if selected street equals street in the database
					else if( cityItem.street[j].name === $scope.selectedFilter.street ) {

						// we have street that matches!
						var streetItem = cityItem.street[j];
						console.log('our STREET match in the DB = ' + streetItem.name);
						

						// go through numbrs associated with given city and street
						var streetNumbersArray = streetItem.number;
						


						// exception is that if numbers array contains * wildcard we just return available = true
						// this means that all numbers on given street are available 
						// check if number contains wildcard - "*"

						if (streetNumbersArray.indexOf("*") != -1) {

							$scope.available = true;
							$scope.services = streetItem.services;
							console.log($scope.services);

						}

						// if number does not contain wildcard - do regular search
						else {
							if (debug) {
								console.log('aktualne numery = ' + streetNumbersArray);
								console.log('szukany number = ' + $scope.selectedFilter.number);								
							}
							
							// number has been found in the numbers array --> return true and get available services;						
							var isIn = streetNumbersArray.indexOf($scope.selectedFilter.number);
							if (isIn >= 0) {
								$scope.available = true;	
								break;
							}
							else {
								$scope.available = false;
							}
						}


					}

					// if ($scope.selectedFilter.street === "") {
					// 	delete $scope.selectedFilter.street;
					// }

				}
			break;	
			}
			$scope.available = false;
		}
		
	}

	// function returns string service names instead of ids
	// it uses servicesFactory to do the translation
	$scope.translateServices = function(servicesArray) {
		var servicesDb = servicesFactory.get();

		var outputArray = [];
		for (i=0 ;i < servicesArray.length; i++) {
			outputArray.push(servicesDb[servicesArray[i]]);
		}
		console.log(outputArray);
		return outputArray.join(", ");
	}

  }])
  .controller('AdminCtrl', ['$scope', function($scope) {

  }]);
