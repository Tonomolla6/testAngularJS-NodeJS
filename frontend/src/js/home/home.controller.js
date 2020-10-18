class HomeCtrl {
    constructor(User, AppConstants, services, comments) {
        'ngInject';
        this.services = services;
        this.comments = comments;
        this.appName = AppConstants.appName;

        // Get list of all tags

        // Set current list to either feed or all, depending on auth status.
        this.listConfig = {
            type: User.current ? 'feed' : 'all'
        };

    }

    changeList(newList) {
        this._$scope.$broadcast('setListTo', newList);
    }

}

export default HomeCtrl;