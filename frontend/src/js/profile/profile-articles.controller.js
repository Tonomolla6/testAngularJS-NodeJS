class ProfileArticlesCtrl {
  constructor(profile, $state, $rootScope) {
    'ngInject';

    // The profile for this page, resolved by UI Router
    this.profile = profile;

    this.profileState = $state.current.name.replace('app.profile.', '');


    // `main` state's filter should be by author
    if (this.profileState === 'main') {
      this.filters = {
        'friends': [this.profile.username],
        'limit': 5,
        'offset': 0
      };
      // Set page title
      $rootScope.setPageTitle('@' + this.profile.username);
    } else if (this.profileState === 'favorites') {
      this.filters = {
        'friends': ['all'],
        'favorited': this.profile.username,
        'limit': 5,
        'offset': 0
      }
      $rootScope.setPageTitle(`Articles favorited by ${this.profile.username}`);

    } else if (this.profileState === 'history') {
      // this.filters = {
      //   'friends': ['all'],
      //   'favorited': this.profile.username,
      //   'limit': 5,
      //   'offset': 0
      // };
      console.log("Funciona bro");
      $rootScope.setPageTitle(`Your gwme history -> ${this.profile.username}`);
    }
  }
}

export default ProfileArticlesCtrl;
