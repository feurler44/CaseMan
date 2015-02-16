function Event(id){
    var Event = this;

    Event.id = undefined;

    Event.name = undefined;
    Event.description = undefined;
    Event.location = undefined;
    Event.startDate = undefined;
    Event.startTime = undefined;
    Event.endDate = undefined;
    Event.endTime = undefined;
    Event.cases = undefined;
    Event.staffs = undefined;
    Event.contacts = undefined;
    Event.reminders = undefined;

}

Event.prototype.getName = function(){};
Event.prototype.getDescription = function(){};
Event.prototype.getLocation = function(){};
Event.prototype.getStartDate = function(){};
Event.prototype.getStartTime = function(){};
Event.prototype.getEndDate = function(){};
Event.prototype.getEndTime = function(){};
Event.prototype.getCases = function(){};
Event.prototype.getStaffs = function(){};
Event.prototype.getContacts = function(){};
Event.prototype.getReminders = function(){};


Event.prototype.setName = function(name){};
Event.prototype.setDescription = function(description){};
Event.prototype.setLocation = function(location){};
Event.prototype.setStartDate = function(date){};
Event.prototype.setStartTime = function(time){};
Event.prototype.setEndDate = function(date){};
Event.prototype.setEndTime = function(time){};
Event.prototype.linkCase = function(Case){};
Event.prototype.linkStaff = function(staff){};
Event.prototype.linkContact = function(contact){};
Event.prototype.addReminder = function(reminder){};
