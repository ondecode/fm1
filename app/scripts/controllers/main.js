'use strict';

/**
 * @ngdoc function
 * @name fm1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fm1App
 */
var app = angular.module('app')
  app.controller('MainCtrl',['$scope', 'filter', function ($scope, $filter) {

  $scope.labels = ["Medios", "Residencial", "Lotes", "Playa", "Comercial", "Oficinas", "Interés Social"];
    $scope.data = [23, 24, 2, 2, 2, 3, 8];
    $scope.minRangeSlider = {
        minValue: 0,
        maxValue: 5000000,
        options: {
            floor: 0, 
            ceil: 5000000,
            step: 100000,
          translate: function(value){
              return $filter('currency')(value, "$", 0);
            }
        }
    };

  $scope.filterrange = function(item) {
    return (item.rangoprecio >= $scope.minRangeSlider.minValue && item.rangoprecio <= $scope.minRangeSlider.maxValue);
  };

  $scope.priceRange = function(item) {
    return (item.rangoprecio >= $scope.lower_price_bound && item.rangoprecio <= $scope.upper_price_bound);
  };
    $scope.test = "Yes";
    $scope.proyectos = [
      {
        "nombre" : "Vista Zur Towers",
        "locacion" : "Puebla, México.",
        "cantidad" : "184 apartamentos",
        "tipopropiedad" : "Condominio",
        "rangoprecio" : 3872000.00,
        "img" : "/2.jpg",
        "link" : "about.html"
      },
      {
        "nombre" : "Garden Towers",
        "locacion" : "Puebla, México.",
        "cantidad" : "210 apartamentos",
        "tipopropiedad" : "Condominio",
        "rangoprecio" : 4703000.00,
        "img" : "/2-1.jpg",
        "link" : "gardentow.html"
      },
      {
        "nombre" : "Torres Andalucía",
        "locacion" : "Puebla, México.",
        "cantidad" : "280 apartamentos",
        "tipopropiedad" : "Condominio",
        "rangoprecio" : 2495500.00,
        "img" : "/2-2.jpg",
        "link" : "torresandalucia.html"
      },
      {
        "nombre" : "Sara Livings",
        "locacion" : "Ciudad de México, México.",
        "cantidad" : "220 apartamentos",
        "tipopropiedad" : "Condominio",
        "rangoprecio" : 1175000.00,
        "img" : "/3.jpg",
        "link" : "sara.html"
      },
      {
        "nombre" : "Terralta",
        "locacion" : "Querétaro, México.",
        "cantidad" : "310 apartamentos",
        "tipopropiedad" : "Fraccionamiento",
        "rangoprecio" : 4095500.00,
        "img" : "/4.jpg",
        "link" : "terralta.html"
      },
      {
        "nombre" : "Chapala 18",
        "locacion" : "Ciudad de México, México.",
        "cantidad" : "70 apartamentos",
        "tipopropiedad" : "Condominio",
        "rangoprecio" : 2895500.00,
        "img" : "/47.jpg",
        "link" : "Chapala.html"
      },
      {
        "nombre" : "Inspiria Coapa",
        "locacion" : "Ciudad de México, México.",
        "cantidad" : "188 apartamentos",
        "tipopropiedad" : "Condominio",
        "rangoprecio" : 2895500.00,
        "img" : "/47.jpg",
        "link" : "inspiria.html"
      }
    ];
    $scope.people = [
      {
        "name": "Carlos Minvielle Lagos",
        "img": "eugeniozam.jpg",
        "puesto": "Miembro Ejecutivo",
        "inforol" : "Presidente",
        "infopro": "45 años",
        "infosec": "45 años"
      },
      {
        "name": "Juan Pablo Morfín Yáñez",
        "img": "eugeniozam.jpg",
        "puesto": "Miembro Ejecutivo",
        "inforol" : "Presidente",
        "infopro": "45 años",
        "infosec": "45 años"
      },
      {
        "name": "Isaac Memun Elías",
        "img": "eugeniozam.jpg",
        "puesto": "Consejero",
        "inforol" : "Presidente",
        "infopro": "45 años",
        "infosec": "45 años"
      },
      {
        "name": "Salvador Cofiño Dávila",
        "img": "eugeniozam.jpg",
        "puesto": "Consejero",
        "inforol" : "Presidente",
        "infopro": "45 años",
        "infosec": "45 años"
      },
      {
        "name": "Armando Gómez Flores",
        "img": "eugeniozam.jpg",
        "puesto": "Consejero",
        "inforol" : "Presidente",
        "infopro": "45 años",
        "infosec": "45 años"
      }
    ];
  $scope.estados = [
      {
        "id": "ags",
        "img": "casa1.png",
        "nom": "Aguascalientes",
        "proyectos": 4,
        "desc": "Viviendas",
        "totaldesc": 597
      },
      {
        "id": "bcn",
        "img": "casa1.png",
        "nom": "Baja California",
        "proyectos": 2,
        "desc": "Viviendas",
        "totaldesc": 720
      },
      
      {
        "id": "df",
        "img": "casa1.png",
        "nom": "Ciudad de México",
        "proyectos": 19,
        "desc": "Viviendas",
        "totaldesc": 2279
      },
      
      {
        "id": "gua",
        "img": "casa1.png",
        "nom": "Guanajuato",
        "proyectos": 1,
        "desc": "Viviendas",
        "totaldesc": 880
      },
      {
        "id": "gro",
        "img": "casa1.png",
        "nom": "Guerrero",
        "proyectos": 2,
        "desc": "Viviendas",
        "totaldesc": 22
      },      
      {
        "id": "jal",
        "img": "casa1.png",
        "nom": "Jalisco",
        "proyectos": 6,
        "desc": "Viviendas",
        "totaldesc": 804
      },
      {
        "id": "mex",
        "img": "casa1.png",
        "nom": "Estado de México",
        "proyectos": 2,
        "desc": "Viviendas",
        "totaldesc":13192
      },
      
      {
        "id": "mor",
        "img": "casa1.png",
        "nom": "Morelos",
        "proyectos": 1,
        "desc": "Oficinas",
        "totaldesc": 192
      },
      
      {
        "id": "pue",
        "img": "casa1.png",
        "nom": "Puebla",
        "proyectos": 2,
        "desc": "Viviendas",
        "totaldesc": 334
      },
      {
        "id": "que",
        "img": "casa1.png",
        "nom": "Querétaro",
        "proyectos": 3,
        "desc": "Viviendas",
        "totaldesc": 360
      }      
    ];
  }]);
/*
  app.filter('filterMultiple',['$filter',function ($filter) {
  return function (items, keyObj) {
    var filterObj = {
              data:items,
              filteredData:[],
              applyFilter : function(obj,key){
                var fData = [];
                if(this.filteredData.length == 0)
                  this.filteredData = this.data;
                if(obj){
                  var fObj = {};
                  if(angular.isString(obj)){
                    fObj[key] = obj;
                    fData = fData.concat($filter('filter')(this.filteredData,fObj));
                  }else if(angular.isArray(obj)){
                    if(obj.length > 0){ 
                      for(var i=0;i<obj.length;i++){
                        if(angular.isString(obj[i])){
                          fObj[key] = obj[i];
                          fData = fData.concat($filter('filter')(this.filteredData,fObj));  
                        }
                      }
                      
                    }                   
                  }                 
                  if(fData.length > 0){
                    this.filteredData = fData;
                  }
                }
              }
        };

    if(keyObj){
      angular.forEach(keyObj,function(obj,key){
        filterObj.applyFilter(obj,key);
      });     
    }
    
    return filterObj.filteredData;
  };
}]);

app.filter('unique', function() {
    return function(input, key) {
        var unique = {};
        var uniqueList = [];
        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][key]] == "undefined"){
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
});
*/