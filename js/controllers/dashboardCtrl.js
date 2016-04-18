angular.module('myApp').controller('dashboardCtrl', function($scope, $stateParams, dashboardService) {


$scope.expenses = JSON.parse(localStorage.expenses);

  // $scope.expenses = dashboardService.getExpenses();
  $scope.newExpense = function(expenses) {
    console.log (expenses);
    dashboardService.addNewExpense({
      merchant: $scope.merchant,
      expense: $scope.expense,
      comment: $scope.comment
    });
    console.log($scope.merchant);
    $scope.expenses = dashboardService.getExpenses();
  };



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
