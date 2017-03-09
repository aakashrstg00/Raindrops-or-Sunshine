app.controller("citycontroller", function ($scope, cityfactory) {
    $scope.searchByCid = function () {
        console.log("Checking");
        var cityName = $scope.cityName;
        var promise = cityfactory.serverCall(cityName);
        promise.then(function (data) {
            $scope.result = data.data;
            $scope.tempincelsius = parseInt(data.data.main.temp - 273.15);
        }, function (error) {
            $scope.error = error;
        });
    }
});