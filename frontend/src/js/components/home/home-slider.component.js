class homeSliderCtrl {
    constructor(){
        "ngInject";
        this.imgInterval = 5000;
        this.noWrapSlides = false;

        this.slides = [
            {image:'https://cdn.pixabay.com/photo/2015/11/15/19/49/bingo-1044718_1280.jpg',text:"FACTURASCRIPTS, Sencillo y personalizable.",id:0},
            {image:'https://i.postimg.cc/zX08czBW/home-office-336377.jpg',text:"Share your content",id:1}
        ]
    }
}

let HomeSlider = {
    controller: homeSliderCtrl,
    templateUrl: 'components/home/home-slider.html'
};

export default HomeSlider;