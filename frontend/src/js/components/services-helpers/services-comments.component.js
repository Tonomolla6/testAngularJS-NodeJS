class ServicesCommentsCtrl {
    constructor(Services, $scope) {
      'ngInject';
    }
}

let ServicesComments = {
    bindings: {
      comments: '='
    },
    controller: ServicesCommentsCtrl,
    templateUrl: 'components/services-helpers/services-comments.html'
};

export default ServicesComments;