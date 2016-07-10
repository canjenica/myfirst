angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })


      .state('tabsController.home', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.collectionNotes', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/collectionNotes.html',
        controller: 'collectionNotesCtrl'
      }
    }
  })

  .state('tabsController.profileSetting', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/profileSetting.html',
        controller: 'profileSettingCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page2',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page1',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});