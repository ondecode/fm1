var myApp = angular.module('myApp',['rzModule', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap', 'ui.select', 'uiSlider', 'ng-fusioncharts']);

//myApp.directive('myDirective', function() {});
//myApp.factory('myService', function() {});

myApp.controller('MyCtrl',['$scope', '$filter', function ($scope, $filter) {

/*
$scope.runSliderConfig = {
     min:  0,
     max:  120,
     step: 10,
   };
   $scope.swimSliderConfig = {
     min:  0,
     max:  120,
     step: 10,
   };
   $scope.sliderRanges = {
     runMin: 0,
     runMax: 120,
     swimMin: 0,
     swimMax: 120
   }; */
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
    /*
    console.log('item.min_price: ' + item.min_price);
    console.log('$scope.lower_price_bound: ' + $scope.lower_price_bound); */
    return (item.rangoprecio >= $scope.minRangeSlider.minValue && item.rangoprecio <= $scope.minRangeSlider.maxValue);
  };

  $scope.priceRange = function(item) {
    /*
    console.log('item.min_price: ' + item.min_price);
    console.log('$scope.lower_price_bound: ' + $scope.lower_price_bound); */
    return (item.rangoprecio >= $scope.lower_price_bound && item.rangoprecio <= $scope.upper_price_bound);
  };
    $scope.test = "Yes";
    $scope.proyectos = [
      {
        "locacion" : "Querétaro, México.",
        "cantidad" : "20 viviendas",
        "tipopropiedad" : "Residencial",
        "rangoprecio" : 1475500.00,
        "img" : "/2.jpg"
      },
      {
        "locacion" : "Ciudad de México, México.",
        "cantidad" : "120 apartamentos",
        "tipopropiedad" : "Uso mixto",
        "rangoprecio" : 4175000.00,
        "img" : "/2-1.jpg"
      },
      {
        "locacion" : "Guanajuato, México.",
        "cantidad" : "15 viviendas",
        "tipopropiedad" : "Residencial",
        "rangoprecio" : 2495500.00,
        "img" : "/2-2.jpg"
      },
      {
        "locacion" : "Aguascalientes, México.",
        "cantidad" : "70 viviendas",
        "tipopropiedad" : "Residencial",
        "rangoprecio" : 1175000.00,
        "img" : "/3.jpg"
      },
      {
        "locacion" : "Ciudad de México, México.",
        "cantidad" : "140 apartamentos",
        "tipopropiedad" : "Uso mixto",
        "rangoprecio" : 4095500.00,
        "img" : "/4.jpg"
      },
      {
        "locacion" : "Ciudad de México, México.",
        "cantidad" : "80 apartamentos",
        "tipopropiedad" : "Apartamentos",
        "rangoprecio" : 2895500.00,
        "img" : "/47.jpg"
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

}]);


//filter Multiple...
myApp.filter('filterMultiple',['$filter',function ($filter) {
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
  }
}]);

myApp.filter('unique', function() {
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


/*

myApp.filter('hourMinFilter', function () {
  return function (value) {
    if (value === 120) return 'All'
    var h = parseInt(value / 60);
    var m = parseInt(value % 60);
    var hStr = (h > 0) ? h + 'hr'  : '';
    var mStr = (m > 0) ? m + 'min' : '';
    var glue = (hStr && mStr) ? ' ' : '';
    return hStr + glue + mStr;
  };
});

myApp.filter('rangeFilter', function() {
  return function(items, sliderRanges ) {
    
    var filtered = [];
    var runMin = parseInt(sliderRanges.runMin);
    var runMax = parseInt(sliderRanges.runMax);
    var swimMin = parseInt(sliderRanges.swimMin);
    var swimMax = parseInt(sliderRanges.swimMax);

    angular.forEach(items, function(item) {
      if((item.run_time >= runMin && item.run_time <= runMax) && (item.swim_time >= swimMin && item.swim_time <= swimMax)) {
        filtered.push(item);
      }
    });
    
    return filtered;
  };
});
*/