
// String.startsWith function for IE11
if (!String.prototype.startsWith) {
    String.prototype.startsWith = (searchString, position) =>{
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}

var $ = require('jquery')
var jQuery = $
window.$ = $
window.jQuery = $

const angular = require('angular')
window.angular = angular
require('jquery-ui-dist/jquery-ui')
require('angular-material/angular-material.min.js')
require('angular-aria/angular-aria.min.js')
require('angular-animate/angular-animate.min.js')
require('angular-ui-router')


// model factories
const Book = require('./model/Book/index').Book

// views
const HomeModule = require('./views/home/index')


angular.module('schreiner', [

    // third party
    'ui.router',
    'ngMaterial',

    // views
    'schreiner.home',

])

    // model factories
    .factory('Book', Book)

    .config(['$mdAriaProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider', '$httpProvider', '$provide', '$stateProvider',
        ($mdAriaProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider, $httpProvider, $provide, $stateProvider) => {

            // ignore trailing slashes
            $urlMatcherFactoryProvider.caseInsensitive(true)
            $urlMatcherFactoryProvider.strictMode(false)
            $urlRouterProvider.otherwise('/')
            $locationProvider.html5Mode({
                enabled: true
            })

            HomeModule.HomeState($stateProvider)

            $mdAriaProvider.disableWarnings()

        }
    ])

    .run([
        () => {



        }])
