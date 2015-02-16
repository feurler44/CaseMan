(function(){
    angular
        .module('dataModel', [])
        .factory('DataModel', [ function(){
            var DataModel = this;
            DataModel.Case = Case;
            DataModel.ChekListItem = ChekListItem;
            DataModel.Comment = Comment;
            DataModel.Contact = Contact;
            DataModel.Document = Document;
            DataModel.Event = Event;
            DataModel.Expense = Expense;
            DataModel.Group = Group;
            DataModel.Invoice = Invoice;
            DataModel.Location = Location;
            DataModel.Payement = Payement;
            DataModel.PhoneNumber = PhoneNumber;
            DataModel.PracticeArea = PracticeArea;
            DataModel.Reminder = Reminder;
            DataModel.Staff = Staff;
            DataModel.Task = Task;
            DataModel.TimeEntry = TimeEntry;

            return DataModel;
        }])
    ;
})();