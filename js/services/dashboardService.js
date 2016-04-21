angular.module("myApp").service("dashboardService", function() {

  var expenses = []; //////SETS ARRAY OF NEW EXPENSES IN LOCAL STORAGE


  var reimbursed = []; /////SETS ARRAY OF REIMBURSED EXPENSES IN LOCAL STORAGE



  this.getExpenses = function() { //////GETS NEW EXPENSES
    if (!localStorage.getItem('expenses')) {
      console.log('hittin');
      return JSON.parse(localStorage.expenses);
    }
    return expenses;

  };


  this.addReimbursed = function(index, expense) { //////ADDS NEW EXPENSES TO REIMBURSED ARRAY
    var reims = JSON.parse(localStorage.getItem('reimbursed'));
    reims.push(expense);
    localStorage.setItem('reimbursed', JSON.stringify(reims));
    var itemToGo = localStorage.getItem('expenses');
    itemToGo = JSON.parse(itemToGo);
    itemToGo.splice(index, 1);
    localStorage.expenses = JSON.stringify(itemToGo);
  };



  this.addNewExpense = function(obj) { ///////ADDS EXPENSES
    var itemToGo = localStorage.getItem('expenses');
    itemToGo = JSON.parse(itemToGo);
    itemToGo.push(obj);
    localStorage.expenses = JSON.stringify(itemToGo);
    alert(itemToGo);
    // console.log(expenses);
  };




  this.editExpense = function(expense, index) { ///EDITS EXPENSES
    var itemToGo = localStorage.getItem('expenses');
    itemToGo = JSON.parse(itemToGo);
    itemToGo[index] = expense;
    localStorage.expenses = JSON.stringify(itemToGo);
  };




  this.removeExpense = function(index) { //////REMOVES EXPENSES
    var itemToGo = localStorage.getItem('expenses');
    itemToGo = JSON.parse(itemToGo);
    itemToGo.splice(index, 1);
    itemToGo = JSON.stringify(itemToGo);
    localStorage.expenses = itemToGo;

  };

});
