'use strict';

/**
 * @ngdoc directive
 * @name fm1App.directive:slideDown
 * @description
 * # slideDown
 */
angular.module('fm1App')
  .directive('slideDown', function () {
   return {
    restrict: 'A',
    scope: {
      target: '@slideDown'
    },
    link: function(scope, element, attrs){
      console.log(scope.target);
      var target = $(scope.target);
      $(element).on('click', function(){
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
              scrollTop: target.offset().top
            }, 1000);
        }
      });
    }
  }
  });
