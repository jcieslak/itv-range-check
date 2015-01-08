'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])

   .factory('servicesFactory', function() {
      return {
         get : function () {
            var servicesDictionary = {
               10 : "Internet",
               11 : "Internet światłowodowy",
               20 : "TV analogowa",
               21 : "TV cyfrowa",
               40 : "Telefon"
            }
            return servicesDictionary;
         }

      }
   })

	.factory('availabilityFactory', function () {
		return {
			get: function () {

            // we can have wildcards on
            // 
            // street name and number level -> {"name":"*","number":["*"]}
            // this means that services are available in whole city
            // 
            // number level only --> {"name": "street-name", "number": {"*"}}
            // this means that services are available all numbers on given street name


// wies
// wies bez ulic z numerami
// 

// miasto
// cala ulica
// polowa ulicy tak polowa ulicy inaczej

// cala miejscowosc
var db = 
{
   "Bednary" : {
      "Bitwy nad Bzurą" : [
         {
            "numbers": ['1,2,3,4,5'],
            "services": [10,11,20,21,30,40]
         },
         {
            "numbers": ['6'],
            "services": [10,11,20]
         }
      ],


      "*": [
         {
            "numbers": ["*"],
            "services": [10,11,20]
         }
      ]
   },
   "Sochaczew" : "*",
   "Skierniewice": "*",
};


            var mockData = [
            {
               "city":{
                  "name":"Bednary",
                  "street":[
                     {
                        "name":"*",
                        "number": ["*"],
                        "services": [10,11,20,21,40]
                     }
                  ]
               }
            },

            {
               "city":{
                  "name":"Łowicz",
                  "street":[
                     {
                        "name":"Chełmońskiego",
                        "number":[
                           "1",
                           "2",
                           "3"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Chełmońskiego",
                        "number":[
                           "4",
                           "5",
                           "6"
                        ],
                        "services": [10]
                     }


                  ]
               }
            },
            {
               "city":{
                  "name":"Sochaczew",
                  "street":[
                     {
                        "number":[
                           "1",
                           "2",
                           "3"
                        ],
                        "services": [10,11,20,21,40]
                     }
                  ]
               }
            },
            {
               "city":{
                  "name":"Skierniewice",
                  "street":[
                     {
                        "name":"19-go Lutego",
                        "number":[
                           "1",
                           "2",
                           "3",
                           "4",
                           "5",
                           "6",
                           "10",
                           "12"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"25-lecia PRL",
                        "number":[
                           "4",
                           "8"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Armi Krajowej",
                        "number":[
                           "47",
                           "49",
                           "51",
                           "53",
                           "55",
                           "57",
                           "59"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Asnyka",
                        "number":[
                           "3",
                           "5",
                           "7",
                           "9",
                           "78",
                           "84"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Buczka",
                        "number":[
                           "2",
                           "4",
                           "6",
                           "8",
                           "10"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Iwaszkiewicza",
                        "number":[
                           "2",
                           "4",
                           "5",
                           "6",
                           "7",
                           "8",
                           "9",
                           "10",
                           "11",
                           "12",
                           "14",
                           "16"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Kapitana Hali",
                        "number":[
                           "1",
                           "2",
                           "4",
                           "6"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Leśmiana",
                        "number":[
                           "1",
                           "3"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Mszczonowska",
                        "number":[
                           "21",
                           "23",
                           "25",
                           "27",
                           "31"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Norwida",
                        "number":[
                           "2",
                           "3",
                           "4",
                           "5",
                           "6",
                           "7",
                           "8",
                           "9",
                           "11",
                           "13"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Orkana",
                        "number":[
                           "3",
                           "5",
                           "7",
                           "8",
                           "10",
                           "12"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Pomologiczna",
                        "number":[
                           "1",
                           "9",
                           "11"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Prusa",
                        "number":[
                           "1",
                           "3",
                           "3",
                           "4",
                           "5",
                           "6",
                           "8",
                           "8a"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Sucharskiego",
                        "number":[
                           "1",
                           "2",
                           "3",
                           "4",
                           "5",
                           "6",
                           "7",
                           "8",
                           "9",
                           "10",
                           "11",
                           "13",
                           "14",
                           "15",
                           "16",
                           "18"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Sobieskiego",
                        "number":[
                           "5",
                           "7",
                           "7a",
                           "11a",
                           "13",
                           "13a"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Szarych Szeregów",
                        "number":"3"
                     },
                     {
                        "name":"Tetmajera",
                        "number":[
                           "1",
                           "2",
                           "3",
                           "4",
                           "5",
                           "6"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Wagnera",
                        "number":[
                           "1",
                           "4",
                           "6"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Wańkowicza",
                        "number":[
                           "1",
                           "2",
                           "3",
                           "4",
                           "5",
                           "6",
                           "8",
                           "10",
                           "11",
                           "12",
                           "14"
                        ],
                        "services": [10,11,20,21,40]
                     },
                     {
                        "name":"Zawadzkiego",
                        "number":[
                           "2a",
                           "2b",
                           "2c",
                           "8"
                        ],
                        "services": [10,11,20,21,40]
                     }
                  ]
               }
            }
            ];

				return mockData;
				
			},

		};
	}).
	value('version', '0.1');
