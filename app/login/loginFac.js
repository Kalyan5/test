(function(){
    
    
        
        function loginFac($timeout){
            
            
            var emptyObject = {};

        emptyObject.Login = function (username, password, callback) {

            $timeout(function(){
                var response = { success: username === 'kalyan' && password === 'hyderabad' };
                if(!response.success) {
                    response.message = 'Username or password is incorrect';
                }
                callback(response);
            }, 1000);

        };
         
        
            
    
    return emptyObject;
        };
        
        
    
    angular.module("login").factory("loginFac",["$timeout",loginFac])
    
    
    
    
    
})();

