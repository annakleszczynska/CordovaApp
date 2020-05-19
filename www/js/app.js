var myapp = angular.module('app', ['pascalprecht.translate','ngRoute']);


myapp.config(function($routeProvider){
    $routeProvider.
    when("/",{
        templateUrl : "main.html",
    }).
    when("/AboutUs",{
        templateUrl : "about-us.html",
    }).
    otherwise ({
        redirectTo: '/'
    });
});

myapp.config(function ($translateProvider) {
    $translateProvider
    .registerAvailableLanguageKeys(['de', 'en'], {
        'en*': 'en',
        'de*': 'de',
        '*':'en'    //sets the prefered language, if the device lang is not supported
        })
    .useStaticFilesLoader({
        prefix: 'i18n/locale-',
        suffix: '.json'
    }) 
    // remove the warning from console log by putting the sanitize strategy
    .useSanitizeValueStrategy('sanitizeParameters')
    .determinePreferredLanguage();
});

myapp.controller('LanguageCtrl', function ($scope, $rootScope, $translate) {
    $rootScope.lang = $translate.proposedLanguage();
    $scope.changeLanguage = function (key) {
        $rootScope.lang = key;
        $translate.use(key);
        console.log("called");
    };
});


