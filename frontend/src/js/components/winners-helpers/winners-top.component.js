class WinnersTopCtrl {
    constructor(Services, $scope) {
        'ngInject';
    }
}

let WinnersTop = {
    bindings: {
        users: '='
    },
    controller: WinnersTopCtrl,
    templateUrl: 'components/winners-helpers/winners-top.html'
};

export default WinnersTop;