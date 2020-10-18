class WinnersCtrl {
    constructor(User, AppConstants, users, $scope) {
        'ngInject';
        this.users = users;
        let users_top = users.map((element, i) => {
            element["class"] = "user" + i;
            if (i == 1) {
                element["position"] = "First position";
                element["name"] = "Carla Gandia Benito";
                element["times_won"] = 301;
                element["image"] = "https://cdn.pixabay.com/photo/2019/11/29/21/30/girl-4662159_1280.jpg";
            } else if (i == 0) {
                element["position"] = "Second position";
                element["name"] = "Marcos Pérez Gomez";
                element["times_won"] = 254;
                element["image"] = "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg";
            } else {
                element["position"] = "Third position";
                element["name"] = "Raul Lopez Juarez";
                element["times_won"] = 234;
                element["image"] = "https://cdn.pixabay.com/photo/2017/01/03/01/38/man-1948310_960_720.jpg";
            }
            return element;
        });
        console.log(users_top);
    }
}

export default WinnersCtrl;