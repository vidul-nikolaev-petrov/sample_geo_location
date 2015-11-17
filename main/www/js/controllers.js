angular.module('starter.controllers', [])

.controller('MainController', function ($log, $scope) {
    var options = {
        timeout: 10000,
        enableHighAccuracy: true,
    };

    $scope.model = {
        location: {
            latitude: 'loading...',
            longitude: 'loading...',
            accuracy: 'loading...',
        },
    };

    navigator.geolocation.watchPosition(
        function (response) {
            $scope.model.location = response.coords;
            $scope.$digest();
            $log.info('>>>',
                response.coords.accuracy, {
                    lat: $scope.model.location.latitude,
                    lng: $scope.model.location.longitude,
                    accuracy: $scope.model.location.accuracy,
                });
        },
        function (error) {
            $log.error(error.message);
        },
        options);

    $scope.saveLocation = function (data) {
        $scope.model.location_saved = data;
    };
});
