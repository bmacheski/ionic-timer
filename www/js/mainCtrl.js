angular
	.module('starter')
	.controller('mainCtrl', ['$scope','$timeout', function($scope, $timeout){

		$scope.timer = {
			min: '0',
			max: '120',
			value: '0'
		}

  	$scope.start = function(){
        $scope.timer.value--;
          if($scope.timer.value === 0){
          	// vibrate function invocation
        		return;
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

