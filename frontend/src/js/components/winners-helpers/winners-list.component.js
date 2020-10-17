class WinnersListCtrl {
    constructor(Services, $scope) {
      'ngInject';
    }
}

let WinnersList = {
    bindings: {
      users: '='
    },
    controller: WinnersListCtrl,
    templateUrl: 'components/winners-helpers/winners-list.html'
};

export default WinnersList;