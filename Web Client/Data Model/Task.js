function Task(id){
    var Task = this;

    Task.id = undefined;
    Task.creator = undefined;

    Task.name = undefined;
    Task.case = undefined;
    Task.checkList = undefined;
    Task.dueData = undefined;
    Task.priority = undefined;
    Task.staff = undefined;
    Task.comments = undefined;
    Task.status = undefined;

}

Task.prototype.getCreator = function(){};
Task.prototype.getName = function(){};
Task.prototype.getCase = function(){};
Task.prototype.getCheckList = function(){};
Task.prototype.getDueData = function(){};
Task.prototype.getPriority = function(){};
Task.prototype.getStaff = function(){};
Task.prototype.getComments = function(){};
Task.prototype.getStatus = function(){};

Task.prototype.setName = function(name){};
Task.prototype.setCase = function(Case){};
Task.prototype.addCheckList = function(checkList){};
Task.prototype.setDueData = function(date){};
Task.prototype.setPriority = function(priority){};
Task.prototype.setStaff = function(staff){};
Task.prototype.addComment = function(){};
Task.prototype.setStatus = function(status){};
