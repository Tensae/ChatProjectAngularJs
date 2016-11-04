angular.module("chatModule")
.filter("notEmpty", function () {
    return function (channels) {
        var output = [];
        for (var i = 0; i < channels.length; i++) {
            if (channels[i]) {
                output.push(channels[i]);
            }
        }
        return output;
    }
});