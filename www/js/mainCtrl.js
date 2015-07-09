angular
	.module('starter')
	.controller('mainCtrl', ['$scope','$timeout', function($scope, $timeout){

		$scope.timer = {
			min: '0',
			max: '43200',
			value: '0'
		}

  	$scope.start = function(){
        $scope.timer.value--;
          if($scope.timer.value <= 0){
          	$timeout.cancel(mytimeout);
        		return false;
        }
        mytimeout = $timeout($scope.start, 1000);
    }

    $scope.stop = function(){
        $scope.timer.value = $scope.timer.min;
    }

    $scope.pause = function(){
    	$timeout.cancel(mytimeout)
    }

	}])
	.filter('secondsToTime', [function() {
    return function(sec) {
        return new Date(1970, 0, 1).setSeconds(sec);
    };
}])
