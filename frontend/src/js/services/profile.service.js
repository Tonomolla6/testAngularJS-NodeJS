export default class Profile {
  constructor(AppConstants, $http, GraphQL) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;

  }

  get(username) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/' + username,
      method: 'GET'
    }).then((res) => res.data.profile);
  }

  follow(username) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/' + username + '/follow',
      method: 'POST'
    }).then((res) => res.data);
  }

  unfollow(username) {
    return this._$http({
      url: this._AppConstants.api + '/profiles/' + username + '/follow',
      method: 'DELETE'
    }).then((res) => res.data);
  }

  getFollowers(username) {
    let request = {
      url: this._AppConstants.api + '/profiles/' + username + '/followers',
      method: 'GET'
    };
    return this._$http(request).then((res) => res.data);
  }

  getHistory(username) {
    let query = `
      query getSubscription {
        subscription(slug:"${slug}") {
          id
          type
          slug
          user{
            _id
            username
            image
          }
          start
          finish
          active
        }
      }
    `;
    console.log(this._GQL.get(query));
    return this._GQL.get(query);
  }
}
