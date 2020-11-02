class articleDrawCtrl {
    constructor() {
        "ngInject";
    }
}

let ArticleDraw = {
    bindings: {
        article: '='
    },
    controller: articleDrawCtrl,
    templateUrl: 'components/article/article-draw.html'
};

export default ArticleDraw;