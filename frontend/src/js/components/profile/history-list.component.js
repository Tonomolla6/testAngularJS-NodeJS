class HistoryListCtrl {
    constructor(Profile, User) {
      'ngInject';

      this._profile = Profile;
      // console.log(historic);

      this.playMatch();
    }

    playMatch() {
      this._profile.playMatch().then(
        (success) =>{
          console.log(success);
          // this._toaster.showToastr('success','COMPRADA la subscripción con exito');
          // setTimeout(() => {
          //   this._$state.go('app.home');
          // }, 1500); 
        }, 
        (err) =>{
          console.log(err);
          // this._toaster.showToastr('error','Error al comprar');
          // setTimeout(() => {
          //   this._$state.go('app.home');
          // }, 1500); 
        }
      )
    }
}

let HistoryList = {
    controller: HistoryListCtrl,
    templateUrl: 'components/profile/history-list.html'
};

export default HistoryList;