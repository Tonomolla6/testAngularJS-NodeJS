function WinnersConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.winners', {
            url: '/winners',
            controller: 'WinnersCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'winners/winners.html',
            title: 'Top Winners',
            resolve: {
                TopUsers: function(User) {
                    return User.getTopUsers();
                }
            }
        });
};

export default WinnersConfig;