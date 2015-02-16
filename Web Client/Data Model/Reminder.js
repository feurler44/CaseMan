function Reminder(id){
    var Reminder = this;

    Reminder.id = undefined;

    Reminder.type = undefined;
    Reminder.event = undefined;
    Reminder.delay = undefined;
}

Reminder.prototype.getType = function(){};
Reminder.prototype.getEvent = function(){};
Reminder.prototype.getDelay = function(){};

Reminder.prototype.setType = function(){};
Reminder.prototype.setDelay = function(){};
