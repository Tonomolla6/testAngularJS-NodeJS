function ServiceConfig($stateProvider) {
    'ngInject';
  
    $stateProvider
    .state('app.customer_services', {
        url: '/service',
        controller: 'ServiceCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'customer_services/service.html',
        title: 'Service'
    });
};

export default ServiceConfig;