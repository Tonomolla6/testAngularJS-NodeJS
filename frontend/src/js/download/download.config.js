function DownloadConfig($stateProvider) {
    'ngInject';
  
    $stateProvider
    .state('app.download', {
      url: '/download',
      controller: 'DownloadCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'download/download.html',
      title: 'Download'
    });
  };
  
  export default DownloadConfig;