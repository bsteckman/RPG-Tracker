app.controller("PbController", function($scope){
    $scope.test = "hello!!!";

    
    $scope.pages = [
        {
            src: "pages/playbook/imgs/Page01.jpg",
            title: "Intro Page 1",
            page: 0,
        },
        {
            src: "pages/playbook/imgs/Page02.jpg",
            title: "Intro Page 2",
            page: 1,
        },
        {
            src: "pages/playbook/imgs/Page03.jpg",
            title: "Intro Page 3",
            page: 2,
        },
        {
            src: "pages/playbook/imgs/Page04.jpg",
            title: "Intro Page 4",
            page: 3,
        },
        {
            src: "pages/playbook/imgs/Page05.jpg",
            title: "Angel Page 1",
            page: 4,
        },
        {
            src: "pages/playbook/imgs/Page06.jpg",
            title: "Angel Page 2",
            page: 5,
        },
        {
            src: "pages/playbook/imgs/Page07.jpg",
            title: "BattleBabe Page 1",
            page: 6,
        },
        {
            src: "pages/playbook/imgs/Page08.jpg",
            title: "BattleBabe Page 2",
            page: 7,
        },
        {
            src: "pages/playbook/imgs/Page09.jpg",
            title: "Brainer Page 1",
            page: 8,
        },
        {
            src: "pages/playbook/imgs/Page10.jpg",
            title: "Brainer Page 2",
            page: 9,
        },
        {
            src: "pages/playbook/imgs/Page11.jpg",
            title: "Chopper Page 1",
            page: 10,
        },
        {
            src: "pages/playbook/imgs/Page12.jpg",
            title: "Chopper Page 2",
            page: 11,
        },
        {
            src: "pages/playbook/imgs/Page13.jpg",
            title: "Driver Page 1",
            page: 12,
        },
        {
            src: "pages/playbook/imgs/Page14.jpg",
            title: "Driver Page 2",
            page: 13,
        },
        {
            src: "pages/playbook/imgs/Page15.jpg",
            title: "GunLugger Page 1",
            page: 14,
        },
        {
            src: "pages/playbook/imgs/Page16.jpg",
            title: "GunLugger Page 2",
            page: 15,
        },
        {
            src: "pages/playbook/imgs/Page17.jpg",
            title: "HardHolder Page 1",
            page: 16,
        },
        {
            src: "pages/playbook/imgs/Page18.jpg",
            title: "HardHolder Page 2",
            page: 17,
        },
        {
            src: "pages/playbook/imgs/Page19.jpg",
            title: "Hocus Page 1",
            page: 18,
        },
        {
            src: "pages/playbook/imgs/Page20.jpg",
            title: "Hocus Page 2",
            page: 19,
        },
        {
            src: "pages/playbook/imgs/Page21.jpg",
            title: "Operator Page 1",
            page: 20,
        },
        {
            src: "pages/playbook/imgs/Page22.jpg",
            title: "Operator Page 2",
            page: 21,
        },
        {
            src: "pages/playbook/imgs/Page23.jpg",
            title: "SavvyHead Page 1",
            page: 22,
        },
        {
            src: "pages/playbook/imgs/Page24.jpg",
            title: "SavvyHead Page 2",
            page: 23,
        },
        {
            src: "pages/playbook/imgs/Page25.jpg",
            title: "Skinner Page 1",
            page: 24,
        },
        {
            src: "pages/playbook/imgs/Page26.jpg",
            title: "Skinner Page 2",
            page: 25,
        },
        {
            src: "pages/playbook/imgs/Page27.jpg",
            title: "Page27",
            page: 26,
        },
        {
            src: "pages/playbook/imgs/Page28.jpg",
            title: "Page28",
            page: 27,
        },
        {
            src: "pages/playbook/imgs/Page29.jpg",
            title: "Page29",
            page: 28,
        },
        {
            src: "pages/playbook/imgs/Page30.jpg",
            title: "Page30",
            page: 29,
        },
        {
            src: "pages/playbook/imgs/Page31.jpg",
            title: "Page31",
            page: 30,
        },
        {
            src: "pages/playbook/imgs/Page32.jpg",
            title: "Page32",
            page: 31,
        },
        {
            src: "pages/playbook/imgs/Page33.jpg",
            title: "Page33",
            page: 32,
        },
        {
            src: "pages/playbook/imgs/Page34.jpg",
            title: "Page34",
            page: 33,
        },
        {
            src: "pages/playbook/imgs/Page35.jpg",
            title: "Page35",
            page: 34,
        },
        {
            src: "pages/playbook/imgs/Page36.jpg",
            title: "Page36",
            page: 35,
        },
        {
            src: "pages/playbook/imgs/Page37.jpg",
            title: "Page37",
            page: 36,
        },
        {
            src: "pages/playbook/imgs/Page38.jpg",
            title: "Page38",
            page: 37,
        },
        {
            src: "pages/playbook/imgs/Page39.jpg",
            title: "Page39",
            page: 38,
        },
        {
            src: "pages/playbook/imgs/Page40.jpg",
            title: "Page40",
            page: 39,
        },
        {
            src: "pages/playbook/imgs/Page41.jpg",
            title: "Page41",
            page: 40,
        },
         {
            src: "I'M A DUMMY PAGE,",
            title: "I'm only here to help 40 show up, nothing more nothing less",
            page: 41,
        }
        
        ];
        
        $scope.characters =  $scope.pages.slice(0, 26)
        $scope.moves = $scope.pages.slice(31, 41)

})
    

