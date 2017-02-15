'use strict';

/**
 * @ngdoc function
 * @name fm1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fm1App
 */
angular.module('fm1App')
  .controller('MainCtrl',['$scope', '$filter','$http','mapaSVG' , function ($scope, $filter,$http, mapaSVG) {

    $scope.user = {propiedad: ''};
        
        $scope.set = function(new_title) {
            this.user.propiedad = new_title;
        }

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
        "img" : "/3.jpg",
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

    $scope.getProjects = function(id, owner){
      try{
        return $scope.mgi[id].filter(function(project){
          return project.belongsTo.indexOf(owner) !== -1;
        });
      }catch(err){
        return [];
      }
    }

    $scope.owners = [{ id: 'mgi', name: 'MGI' }, { id: 'foinversion', name: 'FOINVERSION'}];

    $scope.getOwnerName = function(id){
      return $scope.owners.filter(function(o){ return o.id === id; }).name;
    }

    $scope.mgi = {
      "ags":[
      {
        "proyecto": "Tres Arroyos",
        "cantidad": 227,
        "tipoinmueble":"Viviendas",
        "belongsTo": ['mgi']
      },
      {
        "proyecto": "Golf la Vista",
        "cantidad": 45,
        "tipoinmueble":"Viviendas",
        "belongsTo": ['mgi']
      },
      {
        "proyecto": "Fátima",
        "cantidad": 14,
        "tipoinmueble":"Viviendas",
        "belongsTo": ['mgi']
      },
      {
        "proyecto": "El Arroyo del Bosque",
        "cantidad": 261,
        "tipoinmueble":"Viviendas",
        "belongsTo": ['mgi']
      }
      ],
      "bcn":[
      {
        "proyecto": "Inmobiliaria Riveras de Alamar",
        "cantidad": 220,
        "tipoinmueble":"Viviendas",
        "belongsTo": ['mgi']
      },
      {
        "proyecto": "Inmobiliaria Jardines de Calafia",
        "cantidad": 500,
        "tipoinmueble":"Viviendas",
        "belongsTo": ['mgi']
      }
      ],
      "df":[
      /*{
        "proyecto": "Condominio Dr. Márquez",
        "cantidad": 1729,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },*/
      /*{
        "proyecto": "Inmobiliaria Edificadora",
        "cantidad": 1729,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },*/
      {
        "proyecto": "Rincón Tetelpan",
        "cantidad": 29,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Residencial Plaza Oriente",
        "cantidad": 320,
        "tipoinmueble": "Departamentos",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Condominios Tacuba",
        "cantidad": 40,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Residencial Desierto de los Leones",
        "cantidad": 20,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Inmobiliaria Veracruzana",
        "cantidad": 12,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Inmobiliaria ERICAR-Santiago de la Vega",
        "cantidad": 38,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Inmobiliaria ERICAR-San Miguel Chapultepec",
        "cantidad": 96,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Residencial Concordia",
        "cantidad": 220,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Residencial Xochicalco",
        "cantidad": 260,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Marroquí del Centro",
        "cantidad": 88,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Visión - Eje Central",
        "cantidad": 84,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Puerta Bicentenario",
        "cantidad": 172,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Edificaciones MD",
        "cantidad": 120,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      /*{
        "proyecto": "Insurgentes - Londres",
        "cantidad": 1729,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },*/
      {
        "proyecto": "Eduardo Molina",
        "cantidad": 709,
        "tipoinmueble": "Departamentos",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "1171 Central Residencial",
        "cantidad": 35,
        "tipoinmueble": "Departamentos",
        "belongsTo": ["foinversion"]
      },
      {
        "proyecto": "BC 68",
        "cantidad": 20,
        "tipoinmueble": "Departamentos",
        "belongsTo": ["foinversion"]
      }
      ],
      "gua": [
      {
        "proyecto": "San Ignacio",
        "cantidad": 880,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      }
      ],
      "jal":[
      {
        "proyecto": "Multicas Tlaquepaque",
        "cantidad": 468,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Villas Hacienda Zapopan",
        "cantidad": 153,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Guadalajara Dorada",
        "cantidad": 23,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Inmobiliaria Dorada Tlaquepaque",
        "cantidad": 12,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Inmobiliaria CHMD",
        "cantidad": 23,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "SANIA",
        "cantidad": 126,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["foinversion"]
      }
      ],
      "mex":[
      {
        "proyecto": "Fraccionamiento Aurora",
        "cantidad": 25000,
        "tipoinmueble": "Lotes",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Fraccionamiento Esperanza",
        "cantidad": 5000,
        "tipoinmueble": "Lotes",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Centro Urbano Independencia",
        "cantidad": 800,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Centro Urbano Ciudad Labor",
        "cantidad": 2500,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Inmobiliaria Villas de las Manzanas",
        "cantidad": 1000,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Centro Comercial Plaza de las Flores",
        "cantidad": 564,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Desarrollo Urbano de Aragón",
        "cantidad": 3500,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Promotora de Servicios Públicos",
        "cantidad": 1500,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Lic. Mauricio Rivera",
        "cantidad": 140,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Jesús Castillo Gutiérrez",
        "cantidad": 88,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Inmobiliaria Dorada",
        "cantidad": 48,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Arquitecto Víctor Mora Ramos",
        "cantidad": 6,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Carlos Minvielle Lagos",
        "cantidad": 8,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Eulalia Enríquez Ramos",
        "cantidad": 48,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Inmobiliaria Lomas de Coacalco",
        "cantidad": 868,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Magdalena Atlipac",
        "cantidad": 160,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Bosques de San Vicente",
        "cantidad": 100,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Villa de las Flores",
        "cantidad": 60,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Villas de la Paz",
        "cantidad": 272,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Lomas de Coacalco",
        "cantidad": 1200,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Real de Santa Clara",
        "cantidad": 260,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Real de la Loma",
        "cantidad": 70,
        "tipoinmueble": "Viviendas",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Ahuehuetes",
        "cantidad": 1,
        "tipoinmueble": "Centro Comercial",
        "belongsTo": ["foinversion"]
      }
      ],
      "mor":[
      {
        "proyecto": "Corporativo Cuernavaca",
        "cantidad": 160,
        "tipoinmueble": "Oficinas",
        "belongsTo": ["mgi"]
      }
      ],
      "pue": [
      {
        "proyecto": "II Sur",
        "cantidad": 184,
        "tipoinmueble": "Departamentos",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "PVP",
        "cantidad": 150,
        "tipoinmueble": "Departamentos",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Vista Zur Towers",
        "cantidad": 184,
        "tipoinmueble": "Departamentos",
        "belongsTo": ["foinversion"]
      }
      ],
      "que":[
      {
        "proyecto": "El Pueblito",
        "cantidad": 120,
        "tipoinmueble": "Departamentos",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Milenio III",
        "cantidad": 83,
        "tipoinmueble": "Departamentos",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Cima Towers",
        "cantidad": 157,
        "tipoinmueble": "Departamentos",
        "belongsTo": ["mgi"]
      },
      {
        "proyecto": "Torres Zennit",
        "cantidad": 120,
        "tipoinmueble": "Departamentos",
        "belongsTo": ["foinversion"]
      }
      ],
      "gro":[
      {
        "proyecto": "El Palmar",
        "cantidad": 6,
        "tipoinmueble": "Villas",
        "belongsTo": ["foinversion"]
      },
      {
        "proyecto": "Punta los Riscos",
        "cantidad": 16,
        "tipoinmueble": "Departamentos",
        "belongsTo": ["foinversion"]
      }
      ]
    };
    /*#ags, #bcn, #bcs, #cam, #chp, #chh, #coa, #col, #df, #dur, #gua, #gro, #hid, #jal, #mex, #mic, #mor,
    #nay, #nl, #oax, #pue, #que, #qro, #slp, #sin, #son, #tab, #tam, #tla, #ver, #yuc, #zac
    $http.get("http://192.168.1.83/Ondecode/fm1/consultarestados.php")
   .then(function (response) {$scope.estados = response.data.estados;});*/
    $scope.estados = [
      {
        "id": "ags",
        "nom": "Aguascalientes"
      },
      {
        "id": "bcn",
        "nom": "Baja California"
      },
      {
        "id": "jal",
        "nom": "Jalisco"
      },
      {
        "id": "gua",
        "nom": "Guanajuato"
      },
      {
        "id": "que",
        "nom": "Querétaro"
      },
      {
        "id": "mex",
        "nom": "Estado de México"
      },
      {
        "id": "df",
        "nom": "Ciudad de México"
      },
      {
        "id": "gro",
        "nom": "Guerrero"
      },
      {
        "id": "mor",
        "nom": "Morelos"
      },
      {
        "id": "pue",
        "nom": "Puebla"
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

.filter('unique', function() {
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