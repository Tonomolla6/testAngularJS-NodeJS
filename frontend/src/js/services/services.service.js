export default class Services {
    constructor(AppConstants, $http, $q) {
      'ngInject';
  
      this._AppConstants = AppConstants;
      this._$http = $http;
      this._$q = $q;
    }

    query(config) {
        // Create the $http object for this request
        let request = {
            url: this._AppConstants.api + '/services',
            method: 'GET',
            params: config.filters ? config.filters : null
        };
        return this._$http(request).then((res) => res.data);
    }

    getServices() {
        // Create the $http object for this request
        return this._$http({
            url: this._AppConstants.api + '/services/', 
            method: 'GET'
        }).then(res => {
            return res.data.services
        }
        );
    }

    get(slug) {
        let deferred = this._$q.defer();
    
        if (!slug.replace(" ", "")) {
            deferred.reject("Service slug is empty");
            return deferred.promise;
        }
    
        this._$http({
            url: this._AppConstants.api + '/services/' + slug, 
            method: 'GET'
        }).then(
            (res) => deferred.resolve(res.data.services),
            (err) => deferred.reject(err)
        );
    
        return deferred.promise;
    }

}
  