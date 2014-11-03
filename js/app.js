/*
    app.js: main application script
    this is an Angular application
 */

"use strict";

// create new angular module, empty array of things that this module depends on
angular.module('MovieApp', [])
    // create controller which takes function with parameter $scope
    // $scope creates a scope object that will be handed to controller function
    // $scope refers to what the views will be able to see
    .controller('MoviesController', function($scope) {
        // set scope to movies array
        $scope.movies = movies;
        $scope.searchString = "";
        $scope.sortCol = 'rank';
//        Use with orderBy filter
        $scope.sortReverse = false;

        $scope.sortBy = function(colName) {
//            add new property to sort by
            if ($scope.sortCol == colName) {
                $scope.sortReverse = !$scope.sortReverse;
            } else {
                $scope.sortReverse = false;
            }
            $scope.sortCol = colName;
        }

    });





