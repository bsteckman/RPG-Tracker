app.config(function($stateProvider, $urlRouterProvider){
    
    
    
    $stateProvider
         .state('playbook', {
         url: '/playbook',
         templateUrl: "pages/playbook/playbook.html",
         controller: "PbController"
      })
      
})