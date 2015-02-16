function Case(id){
    var Case = this;

    Case.id = undefined;
    Case.dateOpened = undefined;

    Case.name = undefined;
    Case.caseNumber = undefined;
    Case.practiceArea = undefined;
    Case.contacts = undefined;
    Case.documents= undefined;
    Case.staffs = undefined;
    Case.tasks = undefined;
    Case.timeEntries = undefined;
    Case.expenses = undefined;
    Case.invoices = undefined;
    Case.payements = undefined;
    Case.events = undefined;

}
Case.prototype.getDateOpened = function(){};
Case.prototype.getName = function(){};
Case.prototype.getCaseNumber = function(){};
Case.prototype.getPracticeArea = function(){};
Case.prototype.getContacts = function(){};
Case.prototype.getDocuments = function(){};
Case.prototype.getStaffs = function(){};
Case.prototype.getTasks = function(){};
Case.prototype.getTimeEntries = function(){};
Case.prototype.getExpenses = function(){};
Case.prototype.getInvoices = function(){};
Case.prototype.getPayements = function(){};
Case.prototype.getEvents = function(){};

Case.prototype.setName = function(name){};
Case.prototype.setCaseNumber = function(n){};
Case.prototype.setPracticeArea = function(practiceArea){};
Case.prototype.linkContact = function(contact){};
Case.prototype.linkDocument = function(document){};
Case.prototype.linkStaff = function(staff){};
Case.prototype.linkTask = function(task){};
Case.prototype.linkTimeEntry = function(timeEntry){};
Case.prototype.linkExpense = function(expense){};
Case.prototype.linkInvoice = function(invoice){};
Case.prototype.linkPayement = function(invoice){};
Case.prototype.linkEvent = function(event){};

Case.prototype.open = function(){};
Case.prototype.close = function(){};

