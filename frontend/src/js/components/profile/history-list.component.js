class HistoryListCtrl {
    constructor(Profile, User) {
      'ngInject';

      this._profile = Profile;

      this.getHistory(User.current.username);
    }

    getHistory(username) {
      console.log(username);
      this._profile.getHistory().then();
    }
}

let HistoryList = {
    controller: HistoryListCtrl,
    templateUrl: 'components/profile/history-list.html'
};

export default HistoryList;