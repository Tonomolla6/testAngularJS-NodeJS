function ArticleConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.article', {
            url: '/article',
            controller: 'ArticleCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'article/article.html',
            title: 'Article'
        });

};

export default ArticleConfig;