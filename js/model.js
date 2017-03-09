app.factory("cityfactory", function ($http, $q) {
    var object = {
        serverCall: function (cidName) {
            var pr = $q.defer();
            $http.get(urls.locPollURL + cidName + "&appid=" + urls.apikey).then(function (data) {
                pr.resolve(data);
                console.log("data recieved");
            }, function (error) {
                pr.reject(error);
                console.log("data not recieved");
            });
            return pr.promise;
        }
    };
    return object;
});