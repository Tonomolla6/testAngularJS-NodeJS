class ServicesBannerCtrl {
    constructor(Services, $scope, title) {
      'ngInject';

      this.title = title;
    }
}

let ServicesBanner = {
    bindings: {
      title: '='
    },
    controller: ServicesBannerCtrl,
    templateUrl: 'components/services-helpers/services-list.html'
};

export default ServicesBanner;