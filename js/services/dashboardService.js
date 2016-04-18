angular.module("myApp").service("dashboardService", function() {

var expenses = [];


  this.getExpenses = function() {
    if(!localStorage.getItem('expenses')){
      console.log('hittin');
      return JSON.parse(localStorage.expenses);
  }
  return expenses;

};

this.addNewExpense = function(obj) {
  expenses.push(obj);
  localStorage.expenses = JSON.stringify(expenses);
  alert(expenses);
  console.log(expenses);
};

});
