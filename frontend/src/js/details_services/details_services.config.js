function DetailsServiceConfig($stateProvider) {
    'ngInject';
  
    $stateProvider
    .state('app.details_services', {
      url: '/service-details/:slug',
      controller: 'DetailsServiceCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'details_services/details_services.html',
      title: 'Service',
      resolve: {
        service: function(Services,$stateParams) {
          return Services.get($stateParams.slug).then();
        }
      }
    });
  };
  
  export default DetailsServiceConfig;