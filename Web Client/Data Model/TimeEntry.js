function TimeEntry(id){
    var TimeEntry = this;

    TimeEntry.id = undefined;

    TimeEntry.staff = undefined;
    TimeEntry.description = undefined;
    TimeEntry.isBillable = undefined;
    TimeEntry.date = undefined;
    TimeEntry.rate = undefined;
    TimeEntry.duration = undefined;

}

TimeEntry.prototype.getStaff = function(){};
TimeEntry.prototype.getDescription = function(){};
TimeEntry.prototype.getIsBillable = function(){};
TimeEntry.prototype.getDate = function(){};
TimeEntry.prototype.getRate = function(){};
TimeEntry.prototype.getDuration = function(){};

TimeEntry.prototype.setStaff = function(staff){};
TimeEntry.prototype.setDescription = function(description){};
TimeEntry.prototype.setIsBillable = function(bool){};
TimeEntry.prototype.setDate = function(date){};
TimeEntry.prototype.setRate = function(rate){};
TimeEntry.prototype.setDuration = function(duration){};

TimeEntry.prototype.delete = function(){};

