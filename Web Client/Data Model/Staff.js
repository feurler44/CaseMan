function Staff(id){
    var Staff = this;

    Staff.id = undefined;

    Staff.firstName = undefined;
    Staff.lastName = undefined;
    Staff.emails = undefined;
    Staff.phones = undefined;
    Staff.address = undefined;
    Staff.groups = undefined;
    Staff.rate = undefined;
    Staff.cases = undefined;

}

Staff.prototype.getFirstName = function(){};
Staff.prototype.getLastName = function(){};
Staff.prototype.getEmails = function(){};
Staff.prototype.getPhones = function(){};
Staff.prototype.getAddress = function(){};
Staff.prototype.getGroups = function(){};
Staff.prototype.getRate = function(){};
Staff.prototype.getCases = function(){};

Staff.prototype.setFirstName = function(name){};
Staff.prototype.setLastName = function(name){};
Staff.prototype.addEmail = function(email){};
Staff.prototype.addPhone = function(phone){};
Staff.prototype.setAddress = function(address){};
Staff.prototype.linkGroup = function(group){};
Staff.prototype.removeFromGroup = function(group){};
Staff.prototype.setRate = function(rate){};
Staff.prototype.linkCase = function(Case){};
