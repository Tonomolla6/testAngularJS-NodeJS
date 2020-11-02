export default class User {
    constructor(JWT, AppConstants, $http, $state, $q) {
        'ngInject';

        this._JWT = JWT;
        this._AppConstants = AppConstants;
        this._$http = $http;
        this._$state = $state;
        this._$q = $q;

        this.current = null;

    }


    attemptAuth(type, credentials) {
        let route = "";
        if (type == "sociallogin") {
            route = "/sociallogin";
        } else if (type == "login") {
            route = "/login";
        }

        return this._$http({
            url: this._AppConstants.api + '/users' + route,
            method: 'POST',
            data: {
                user: credentials
            }
        }).then(
            (res) => {
                this._JWT.save(res.data.user.token);
                this.current = res.data.user;

                return res;
            }
        );
    }

    update(fields) {
        return this._$http({
            url: this._AppConstants.api + '/user',
            method: 'PUT',
            data: { user: fields }
        }).then(
            (res) => {
                this.current = res.data.user;
                return res.data.user;
            }
        )
    }

    logout() {
        this.current = null;
        this._JWT.destroy();
        this._$state.go(this._$state.$current, null, { reload: true });
    }

    verifyAuth() {
        let deferred = this._$q.defer();

        // check for JWT token
        if (!this._JWT.get()) {
            deferred.resolve(false);
            return deferred.promise;
        }

        if (this.current) {
            deferred.resolve(true);

        } else {
            this._$http({
                url: this._AppConstants.api + '/user',
                method: 'GET',
                headers: {
                    Authorization: 'Token ' + this._JWT.get()
                }
            }).then(
                (res) => {
                    this.current = res.data.user;
                    deferred.resolve(true);
                },

                (err) => {
                    this._JWT.destroy();
                    deferred.resolve(false);
                }
            )
        }

        return deferred.promise;
    }


    ensureAuthIs(bool) {
        let deferred = this._$q.defer();

        this.verifyAuth().then((authValid) => {
            if (authValid !== bool) {
                this._$state.go('app.home')
                deferred.resolve(false);
            } else {
                deferred.resolve(true);
            }

        });

        return deferred.promise;
    }

    getTopUsers(limit_data) {
        return this._$http({
            url: this._AppConstants.api + '/users/',
            method: 'POST',
            data: { limit: limit_data },
            dataType: "json"
        }).then(res => {
            return res.data;
        });
    }
}