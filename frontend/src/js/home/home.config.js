function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    resolve: {
      services: function(Services) { 
        return Services.getServices();
      },
      comments: function(Services) { 
        return Services.getComments();
      }
    }
  });

};

export default HomeConfig;