﻿/// <reference path="../angular.js" />

angular.module("chatModule")
    .service("messagesApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://dummyapi.kodalagom.se/api";
            var messages = api + "/messages";


            this.getMessages = function () {
                var deferred = $q.defer();

                $http.get(messages)
                  .then(function (response) {
                      deferred.resolve(response.data);
                  }, function (response) {
                      deferred.resolve([]);
                  });

                return deferred.promise;
            };

            this.addMessage = function (newMessage) {
                var deferred = $q.defer();

                $http.post(messages, newMessage)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

           
        }
    ]);