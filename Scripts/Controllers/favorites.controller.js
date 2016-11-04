/// <reference path="../angular.js" />


angular.module("chatModule")
    .controller("FavoritesController", [
        "$scope",
        "channelsApi",
        "messagesApi",
        function ($scope, channelsApi, messagesApi) {
            $scope.title = "Favorites";
            $scope.getFavorites();

            $scope.unsubscribe = function (ids) {
                var index = $scope.models.favorites.indexOf(ids);
                $scope.models.favorites.splice(index, 1);

                $scope.getFavorites();
                $scope.save();
            }


        }
    ]);