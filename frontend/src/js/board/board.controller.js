class BoardCtrl {
    constructor(User, AppConstants, $scope, Articles) {
        'ngInject';
        this.popular_news = Array.from({ length: 3 }, (_, i) => {
            let news = {
                "id": "1",
                "image": "https://empresas.blogthinkbig.com/wp-content/uploads/2020/05/blog-ganador-equinoxroom111.jpg",
                "title": "The Murcian Pedro Herrera has won 100,000 ...",
                "description": "The world game last Tuesday at 18:00 was perfect for our player Pedro ...",
            };
            return news;
        });
        this.filters = "";

        if (!this.filters) {
            Articles.query(config).then(function (res,err) {
                this.articles = res;
            });
        }
    }
}

export default BoardCtrl;