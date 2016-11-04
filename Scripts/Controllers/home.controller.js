/// <reference path="../angular.js" />

angular.module("chatModule")
    .controller("HomeController", [
        "$scope",
        "$http",
        "$routeParams",
        "channelsApi",
        "messagesApi",
        
        function ($scope, $http, channelsApi, messagesApi, $routeParams) {
            $scope.title = "Home";

           
           
            
        }
    ]);
