function Payement(id){
    var Payement = this;

    Payement.id = id;

    Payement.case = undefined;
    Payement.method = undefined;
    Payement.note = undefined;
    Payement.amount = undefined;
}

Payement.prototype.getCase = function(){};
Payement.prototype.getMethod = function(){};
Payement.prototype.getNote = function(){};
Payement.prototype.getAmount = function(){};

Payement.prototype.setCase = function(Case){};
Payement.prototype.setMethod = function(method){};
Payement.prototype.setNote = function(note){};
Payement.prototype.setAmount = function(amount){};

