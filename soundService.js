var app = angular.module('sounder');

app.service('soundService', function($http, $q){
    this.getUser = function(username){
        var dfd = $q.defer();
         $http({
           method: 'GET',
            url: 'http://api.soundcloud.com/users/' + username + '/tracks.json?client_id=bda4ada8694db06efcac9cf97b872b3e'
        }).then(function(data){
             dfd.resolve(data);
         });

        return dfd.promise;
    }

});