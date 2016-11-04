angular.module("chatModule")
    .directive("subscribeButton", [
        function () {
            return {
                restrict: "E",
                scope: {
                    subscribed: "=ngModel"
                },
                templateUrl: "Scripts/Directives/SubscribeButton/subscribeButton.html"
            }
        }
    ]);