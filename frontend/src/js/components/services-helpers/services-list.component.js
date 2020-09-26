class ServicesListCtrl {
    constructor(Services, $scope) {
      'ngInject';
    }
}

let ServicesList = {
    bindings: {
      services: '='
    },
    controller: ServicesListCtrl,
    templateUrl: 'components/services-helpers/services-list.html'
};

export default ServicesList;