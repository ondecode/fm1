'use strict';

/**
 * @ngdoc overview
 * @name fm1App
 * @description
 * # fm1App
 *
 * Main module of the application.
 */

angular
.module('app', [
    'rzModule',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngAnimate', 
    'mgcrea.ngStrap',
    'ui.select',
    'chart.js'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: '/views/about.html',
        controller: 'AboutCtrl'
      });
  });
