function Expense(name){
    var Expense = this;

    Expense.description = undefined;
    Expense.isBillable = undefined;
    Expense.creator = undefined;
    Expense.date = undefined;
    Expense.amount = undefined;

}

Expense.prototype.getDescription = function(){};
Expense.prototype.getIsBillable = function(){};
Expense.prototype.getCreator = function(){};
Expense.prototype.getDate = function(){};
Expense.prototype.getAmount = function(){};

Expense.prototype.setDescription = function(description){};
Expense.prototype.setIsBillable = function(bool){};
Expense.prototype.setCreator = function(staff){};
Expense.prototype.setDate = function(date){};
Expense.prototype.setAmount = function(amount){};
