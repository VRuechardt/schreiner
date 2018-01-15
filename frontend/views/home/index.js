
const HomeModule = angular.module('schreiner.home', ['ui.router', require('./home.html')])
    .controller('HomeController', ['$scope', 'Book', ($scope, Book) => {

        Book.query().then(res => {
            $scope.books = res.data
        }, e => {
            $scope.error = e
            console.log(e)
        })

    }])

const HomeState = ($stateProvider) => {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController'
    })
}

export { HomeState }
export { HomeModule }
