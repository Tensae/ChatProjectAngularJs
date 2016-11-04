/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("chatModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider

                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                })

            .when("/Channels/:id", {
                templateUrl: "Views/channel.html",
                controller: "ChannelsController",
                caseInsensitiveMatch: true,
                activeTab:"Topics"

            })
                .when("/Admin", {
                    templateUrl: "Views/Admin.html",
                    controller: "AdminController",
                    caseInsensitiveMatch: true,
                    activeTab: "Admin"
                })
                .when("/Favorites", {
                    templateUrl: "Views/favorites.html",
                    controller: "FavoritesController",
                    caseInsensitiveMatch: true,
                    activeTab: "Favorites"
                })



            //.when("/Message/New", {
            //    templateUrl: "Views/Channels/NewMessage.html",
            //    controller: "MessagesController",
            //    caseInsensitiveMatch: true,

            //});
        }
    ]);