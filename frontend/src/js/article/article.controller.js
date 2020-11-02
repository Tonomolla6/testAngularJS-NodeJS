class ArticleCtrl {
    constructor(User, AppConstants, article) {
        'ngInject';
        this.appName = AppConstants.appName;
        this.article = article;
        console.log(article);
    }
}

export default ArticleCtrl;