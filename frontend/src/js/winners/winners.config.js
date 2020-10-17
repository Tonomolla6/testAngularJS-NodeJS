function WinnersConfig($stateProvider) {
    'ngInject';
  
    $stateProvider
    .state('app.winners', {
      url: '/winners',
      controller: 'WinnersCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'winners/winners.html',
      title: 'Top Winners',
      resolve: {
        users: function(Services) { 
          return Services.getServices();
        }
      }
    });
  
  };
  
  export default WinnersConfig;