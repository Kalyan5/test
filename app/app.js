(function(){
    
    angular.module("myApp",["login","user","ngRoute","ngCookies"])
    
    .config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'loginCtrl',
            templateUrl: 'app/login/login.html',
            
        })
 
        .when('/user', {
            //controller: 'userCtrl',
            templateUrl: 'app/user/user.html'
        })
 
        .otherwise({ redirectTo: '/login' });
}])
 

.run(['$location',
    function ($location) {
        
        
            if ($location.path() !== '/login') {
                $location.path('/login');
            }
        
    }])
    
    
    
    
    
    
})();