// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var ionicApp = angular.module('starter', ['ionic','ngCordova'])

ionicApp.run(function($ionicPlatform, $cordovaGeolocation) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });



});

ionicApp.controller('myCtrl', function($scope, $cordovaGeolocation){

$scope.toggle = function(){

var posOption = {timeout: 10000,enableHighAccuracy: true};
$cordovaGeolocation
    .getCurrentPosition(posOption)
    .then(function (position)  {
      
     $scope.lat = position.coords.latitude;
     $scope.long = position.coords.longitude;


    }, function(err){
      //error
    }

      );
  
}



});


