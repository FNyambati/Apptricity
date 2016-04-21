angular.module('myApp').controller('dashboardCtrl', function($scope, $stateParams, dashboardService) {

  $scope.expenses = JSON.parse(localStorage.expenses); ////GETS NEW EXPENSES FROM LOCAL STORAGE


  $scope.reimbursed = JSON.parse(localStorage.reimbursed); ////GETS REIMBURSED EXPENSES FROM LOCAL STORAGE


  $scope.myData = $scope.reimbursed; //// SETS DATA FOR UI GRID




  // $scope.formatDate = function(myData, $filter) {  //FORMAT DATE ON UI GRID COULDNT GET TOO!! :( :( :(
  //   myData = $scope.myData;
  //   for(var i = 0; i < myData.length; i++){
  //     myData[i].date =
  //   console.log(myData[i]);
  // }
  // };
  // $scope.formatDate();

  $scope.newExpense = function(expenses) { /////CREATES NEW EXPNESE
    dashboardService.addNewExpense({
      merchant: $scope.merchant,
      date: $scope.date,
      amount: $scope.expense,
      comment: $scope.comment,
    });
    $scope.expenses = dashboardService.getExpenses(); ////GETS  NEW  EXPENSES
    console.log($scope.expenses);

  };




$scope.reimbursedExpense = function($index, expense){
    dashboardService.addReimbursed();
  
};


  $scope.editExpense = function(expense, index) { ////// EDIT  NEW EXPENSES
    dashboardService.editExpense(expense, index);
  };





  $scope.removeExpense = function(index, expenses) { ///////REMOVE  NEW EXPENSES
    dashboardService.removeExpense(index);
    index = $scope.expenses.indexOf(index);
    $scope.expenses.splice(index, 1);
  };










  //////////////////////MENU JQUERY ////////////////////
  $(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e) {
      var targeted_popup_class = jQuery(this).attr('data-popup-open');
      $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

      e.preventDefault();
    });

    //----- CLOSE
    $('[data-popup-close]').on('click', function(e) {
      var targeted_popup_class = jQuery(this).attr('data-popup-close');
      $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

      e.preventDefault();
    });
  });


});
