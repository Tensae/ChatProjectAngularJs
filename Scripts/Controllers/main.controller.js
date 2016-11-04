/// <reference path="../angular.js" />

angular.module("chatModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "$http",
        "channelsApi",
        "messagesApi",
        "$routeParams",
        function ($scope, $location, $route, $http, channelsApi, messagesApi, $routeParams) {
            $scope.$route = $route;
            //$scope.nextAvailableId = 0;
            $scope.models = {
                channels: [],
                messages: [],
                message: [],
                favorites: []
            }


            setInterval(function () {
                channelsApi.getChannels($routeParams.id)
                    .then(function (data) {
                        $scope.models.channels = data;
                    });
            }, 1000)


            messagesApi.getMessages($routeParams.id)
            .then(function (data) {
                $scope.models.channel = data;

            });


            $scope.go = function (url) {
                $location.path(url);
            }



            //load  and save favorites in local storage
            $scope.save = function () {
                localStorage.setItem("favorites", JSON.stringify($scope.models.favorites));
            }

            $scope.load = function () {
                var favorites = localStorage.getItem("favorites");
                if (favorites)
                    $scope.models.favorites = JSON.parse(favorites);
                console.log($scope.models.favorites);
            }

            $scope.getFavorites = function () {
                angular.forEach($scope.models.channels, function (channel) {
                    if ($scope.models.favorites.indexOf(channel.id) != -1)
                        channel.subscribed = true;
                    else
                        channel.subscribed = false;
                });
                console.log($scope.models.favorites);
            }

            $scope.subscribe = function (id) {
                console.log($scope.models.favorites);
                if ($scope.models.favorites.indexOf(id) == -1) {
                    $scope.models.favorites.push(id);
                    console.log($scope.models.favorites);
                }
                $scope.save();
                $scope.getFavorites();
            }

            $scope.$watch("models.channels", function () {
                $scope.load();
                console.log($scope.models.favorites);
                $scope.getFavorites();
            })

        }
    ]);
