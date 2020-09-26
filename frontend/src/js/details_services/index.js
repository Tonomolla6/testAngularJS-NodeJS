import angular from 'angular';

// Create the module where our functionality can attach to
let detailsServiceModule = angular.module('app.details_services', []);

// Include our UI-Router config settings
import DetailsServiceConfig from './details_services.config.js';
detailsServiceModule.config(DetailsServiceConfig);

// Controllers
import DetailsServiceCtrl from './details_services.controller';
detailsServiceModule.controller('DetailsServiceCtrl', DetailsServiceCtrl);

export default detailsServiceModule;