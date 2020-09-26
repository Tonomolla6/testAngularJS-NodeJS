class ServiceCtrl {
  constructor(User, Tags, AppConstants, services, $scope) {
    'ngInject';

    this.appName = "hola";
    this.services = services;
    console.log(services);
    
  }
}

export default ServiceCtrl;