(function(){
    function loginCtrl($scope,$location,loginFac){
        
        
        $scope.login = function () {
            
            
            loginFac.Login($scope.username, $scope.password, function(response) {
                 
                if(response.success) {
                    $location.path('/user');
                } else {
                    $scope.error = response.message;

                }
            });
        };
    
    };


    angular.module("login").controller("loginCtrl",["$scope","$location","loginFac",loginCtrl])
    
    
    
    
    
    
})();




