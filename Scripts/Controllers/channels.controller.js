/// <reference path="../angular.js" />

angular.module("chatModule")
.controller("ChannelsController", [
    "$scope",
    "channelsApi",
    "messagesApi",
    "$routeParams",

    function ($scope, channelsApi, messagesApi, $routeParams) {
        //$scope.title = "Channel";
        $scope.newMessage = {}
        $scope.channel = {}
        $scope.messages = {}


       

        $scope.$watch("models.channels", function () {
            $scope.channel = $scope.models.channels.filter(function (channel) {
                return channel.id == $routeParams.id;
            })[0];
        });

        console.log($scope.channel);

        $scope.addMessage = function () {
            $scope.newMessage.channelId = $scope.channel.id;
            messagesApi.addMessage($scope.newMessage)
                .then(function (data) {
                    $scope.channel.messages.push(data);
                    $scope.newMessage = {};
                    //$scope.go("/");
                });
        }

        $scope.updateChannel = function () {
            channelsApi.updateChannel($scope.channel)
                .then(function (channel) {
                    $scope.post = channel;
                    $scope.go("/");
                });
        }
    }
]);