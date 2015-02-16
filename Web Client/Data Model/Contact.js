function Contact(id){
    var Contact = this;

    Contact.id = undefined;

    Contact.firstName = undefined;
    Contact.lastName = undefined;
    Contact.emails = undefined;
    Contact.phones = undefined;
    Contact.addresses = undefined;
    Contact.groups = undefined;
    Contact.invoices = undefined;
    Contact.payements = undefined;

}

Contact.prototype.getFirstName = function(){};
Contact.prototype.getLastName = function(){};
Contact.prototype.getEmails = function(){};
Contact.prototype.getPhones = function(){};
Contact.prototype.getAddresses = function(){};
Contact.prototype.getGroups = function(){};
Contact.prototype.getInvoices = function(){};
Contact.prototype.getpayements = function(){};

Contact.prototype.setFirstName = function(name){};
Contact.prototype.setLastName = function(name){};
Contact.prototype.addEmail = function(email){};
Contact.prototype.addPhone = function(phone){};
Contact.prototype.addAddress = function(address){};
Contact.prototype.linkGroup = function(group){};
Contact.prototype.addInvoice = function(invoice){};
Contact.prototype.addPayement = function(payement){};

