(function () {
'use strict';

angular.module('LunchCheckApp', [])

.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){

  $scope.name = ""
  $scope.checkList = function () {

    var userMessage = checkInputString($scope.name);
    $scope.listMessage = userMessage;
    var colorOut = checkColor(userMessage);
    $scope.colorMe = colorOut;

  };

}


function checkColor(string){
  if (string == "Enjoy!"){
    return "green"
  }
  else if (string == "Too Much!"){
    return "green"
  }
  else {
    return "red"
  }
}

function checkInputString(string){
  var arr1 = string.split(",")
  for (var i =0; i<arr1.length;i++){
    if (arr1[i] == ""){
      return 'Please enter data first!'
    }
  }

  if (arr1.length <=3){
    return "Enjoy!"

  }
  else if (arr1.length >3){
    return "Too Much!"
  }
}

})();
