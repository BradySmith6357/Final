angular.module("mainModule")
	.controller("signupControl", ["$scope", "$http", function($scope, $http){

// // Signup form
	$scope.signup = function(){
        $http({
            method : 'POST',
            url    : '/signup',
            data   : $scope.signupForm
        }).then(function(returnData){
            console.log(returnData)
            if ( returnData.data.success ) { 
                window.location.href="/activeuser"
                $scope.user = returnData.data.user
            }
        })
    }

// // Signin form
    $scope.login = function(){
        $http({
            method : 'POST',
            url    : '/login',
            data   : $scope.loginForm
        }).then(function(returnData){
            console.log("In Return $scope.login")
            if ( returnData.data.success ) { 
                window.location.href="/activeuser"
                $scope.user = returnData.data.user
            } 
            else { console.log(returnData)}
        })
    }

// SHOW AND HIDE FORMS ON SIGNUP PAGE
$scope.showLogin = function(){
    $scope.seeSignUp = true
    $scope.seeLogin = true
}

$scope.showSignUp = function(){
    $scope.seeSignUp = false
    $scope.seeLogin = false
}

}])