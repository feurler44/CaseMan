function Invoice(id){
    var Invoice = this;

    Invoice.id = undefined;

    Invoice.number = undefined;
    Invoice.case = undefined;
    Invoice.client = undefined;
    Invoice.date = undefined;
    Invoice.dueDate = undefined;
    Invoice.timeEntries = undefined;
    Invoice.expenses = undefined;
    Invoice.payements = undefined;
    Invoice.description = undefined;

}

Invoice.prototype.getNumber = function(){};
Invoice.prototype.getCase = function(){};
Invoice.prototype.getClient = function(){};
Invoice.prototype.getDate = function(){};
Invoice.prototype.getdueDate = function(){};
Invoice.prototype.getTimeEntries = function(){};
Invoice.prototype.getExpenses = function(){};
Invoice.prototype.getPayements = function(){};
Invoice.prototype.getDescription = function(){};

Invoice.prototype.setNumber = function(){};
Invoice.prototype.setCase = function(){};
Invoice.prototype.setClient = function(){};
Invoice.prototype.setDate = function(){};
Invoice.prototype.setdueDate = function(){};
Invoice.prototype.setTimeEntries = function(){};
Invoice.prototype.setExpenses = function(){};
Invoice.prototype.addPayement = function(){};
Invoice.prototype.setDescription = function(){};

Invoice.prototype.exportPdf = function(){};
Invoice.prototype.exportCsv = function(){};

