class ServicesBannerCtrl {
    constructor(Services, $scope) {
      'ngInject';
    }
}

let ServicesBanner = {
    controller: ServicesBannerCtrl,
    templateUrl: 'components/services-helpers/services-banner.html'
};

export default ServicesBanner;