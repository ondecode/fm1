'use strict';

/**
 * @ngdoc directive
 * @name fm1App.directive:mapa
 * @description
 * # mapa
 */
angular.module('fm1App')
  .directive('mapa', ['$http','mapaSVG', function ($http, mapaSVG) {
  return {
    restrict: 'E',
    scope: {
      id: '@'
    },
    replace: true,
    template: '<div id="{{scope.id}}"></div>',
    link: function (scope, element, attrs) {
      //Prepare map attributes
      scope.estados = [
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
      window.onload = function () {
        var R = Raphael(scope.id);
        R.setViewBox(0, 0, 800, 600, true);
        R.setSize('100%', '100%');
        var attr = {
          fill: "#d1d1d1",
          //stroke: "#666",
          stroke: "#fff",
          "stroke-width": 1,
          "stroke-linejoin": "round"
        };
        var attrproy = {
          fill: "#d1d1d1",
          //stroke: "#666",
          stroke: "#fff",
          "stroke-width": 1,
          "stroke-linejoin": "round"
        }
        
        var mex = {};
        var pais = mapaSVG.getMapName('mex');

        for(var edos in pais){
          mex[edos] = R.path(pais[edos]).attr(attr);
        }
        
        var proys = {};
        var actual = null;
        var seleccionado = 0;
        var moved = 0;
        /*var holis = mapaSVG.prueba('Marianita <3');
        console.log(holis);*/

        for (var caso in mex) {
          proys[caso] = false;
        }

        angular.forEach(scope.estados, function (edo) {
          // console.log(edo.id);
          proys[edo.id] = true;
          mex[edo.id].animate({fill: "#CD92FF",stroke: "#fff"},500);
        });
        actual = "ags";
        //Recorre el vector que contiene a los estados, para verificar si tienen proyectos, y de ser así habilitarlos
        for (var estado in mex) {
          //En este caso el color #5c3082 es el color más parecido al morado del diseño original :D
          // y el #DFCFCF es el más parecido al blanco, franja naranja ea9847
          //color morado clarito para el hover CD92FF, color opcional para el fondo del mapa E8E3EA

          // En este caso le decimos al programa que asigne el morado a cada estado 
          mex[estado].color = Raphael.color("#5c3082");
          (function (edo, estado) {
            //Le damos un estilo de manita al mouse cuando esté sobre cualquier estado :D
            edo[0].style.cursor = "pointer";
            //Cuando el mouse está sobre algún estado
            edo[0].onmouseover = function () {
            // Esta parte es para ver si el usuario aún no comienza a navegar por el mapa, para qu emuestre la información de Aguascalientes
              if (moved == 0) {
                document.getElementById("df").style.display = "block";
              }
              if (seleccionado < 1) {
                moved++;
                if (proys[estado]) {
                  /*actual && */mex[actual].animate({fill: "#CD92FF", stroke: "#fff"}, 500) && (document.getElementById(actual).style.display = "");
                  edo.animate({fill: edo.color, stroke: "#fff"}, 500);
                  edo.toFront();
                  actual = estado;
                } else {
                  edo[0].style.cursor = "auto";
                  /*actual && */mex[actual].animate({fill: "#CD92FF", stroke: "#fff"}, 500) && (document.getElementById(actual).style.display = "");
                  edo.animate({fill: "#ababab", stroke: "#fff"}, 500);
                  edo.toFront();
                }
              } else {
                  if (estado != actual) {
                    if (proys[estado]) {
                      edo.animate({fill: "#CD92FF", stroke: "#fff"}, 500);
                      edo.toFront();
                    } else {
                      edo[0].style.cursor = "auto";
                      edo.animate({fill: "#ababab", stroke: "#fff"}, 500);
                      edo.toFront();
                    }
                  }
              }
            };
            edo[0].onmouseout = function () {
              if(seleccionado < 1){
                if(proys[estado]){
                  mex[estado].animate({fill: "#CD92FF",stroke: "#fff"},500);
                } 
              }
              if (estado != actual) {
                if(proys[estado]){
                  edo.animate({fill: "#CD92FF", stroke: "#fff"}, 500);
                  edo.toFront();
                } else{
                  edo.animate({fill: "#d1d1d1", stroke: "#fff"}, 500);
                  edo.toFront();
                }
              }
            };
            //que cuando recién cargue la página, que coloree a Aguascalientes
            if (estado == "df") {
              edo[0].onmouseover();
            }
            //animación al darle click
            edo[0].onclick = function () {
              if (proys[estado]) {
                seleccionado++;
                if (seleccionado > 1) {
                  if (estado != actual) {
                    document.getElementById(estado).style.display = "block";
                    /*actual &&*/ mex[actual].animate({fill: "#CD92FF", stroke: "#fff"}, 500) && (document.getElementById(actual).style.display = "");
                    edo.animate({fill: edo.color, stroke: "#ccc"}, 500);
                    edo.toFront();
                    actual = estado;
                  }
                } else {
                  /*actual &&*/ mex[actual].animate({fill: "#CD92FF", stroke: "#fff"}, 500) && (document.getElementById(actual).style.display = "block");
                  edo.animate({fill: edo.color, stroke: "#ccc"}, 500);
                  edo.toFront();
                  actual = estado;
                }
              }                       
            };
          })(mex[estado], estado);
        }
      };
    }
  };
}]);