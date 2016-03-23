app.controller("DiceController", function($scope){
    $scope.diceSet =[];
    $scope.test = "dice controller works!"


$scope.addDie = function(){
        if($scope.newDie){
            $scope.diceSet.push($scope.newDie);
            $scope.diceSet.forEach(function(die) {
                die.roll = function(){
                    die.result = Math.ceil(Math.random()*(die.max-die.min)) + die.min;
                };
                die.pic = function(){
                    if(die.result === 1){
                        return "imgs/dice-1.png"
                    }
                    else if (die.result === 2){
                        return "imgs/dice-2.png"
                    }
                    else if (die.result === 3){
                        return "imgs/dice-3.png"
                    }
                    else if (die.result === 4){
                        return "imgs/dice-4.png"
                    }
                    else if (die.result === 5){
                        return "imgs/dice-5.png"
                    }
                    else if (die.result === 6){
                        return "imgs/dice-6.png"
                    }
                }
            }, this);
            debugger;
            $scope.newDie = '';
    }
    
}})