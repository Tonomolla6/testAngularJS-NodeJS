import angular from 'angular';

// Create the module where our functionality can attach to
let downloadModule = angular.module('app.download', []);

// Include our UI-Router config settings
import DownloadConfig from './download.config.js';
downloadModule.config(DownloadConfig);

// Controllers
import DownloadCtrl from './download.controller';
downloadModule.controller('ServiceCtrl', DownloadCtrl);

export default downloadModule;