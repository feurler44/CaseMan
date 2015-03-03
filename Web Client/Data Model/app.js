(function(){
    angular
        .module('dataModel', [])
        .factory('DataModel', ['$rootScope', '$http', function( $rootScope, $http ){
            function Case(id){
                var Case = this;

                Case.id = null;
                Case.firm = null;
                Case.dateOpened = null;

                Case.name = null;
                Case.number = null;
                Case.practiceArea = null;
                Case.contacts = null;
                Case.documents= null;
                Case.staffs = null;
                Case.tasks = null;
                Case.timeEntries = null;
                Case.expenses = null;
                Case.invoices = null;
                Case.payements = null;
                Case.events = null;
                Case.billingType = null;

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
            Case.prototype.create = function(){
                var $this = this;
                $http.post( 'http://localhost:3000/createCase', $this )
                    .success ( function ( data, status, headers, config ){

                    })
                    .error ( )
            };


            function User (){
                var User = this;

                User.id = null;

                User.firstName = null;
                User.lastName = null;
                User.type = null;
                User.emails = [];
                User.phones = null;
                User.address = null;
                User.groups = null;
                User.rate = null;
                User.cases = null;
            }
            User.prototype.getFirstName = function(){};
            User.prototype.getLastName = function(){};
            User.prototype.getEmails = function(){};
            User.prototype.getPhones = function(){};
            User.prototype.getAddress = function(){};
            User.prototype.getGroups = function(){};
            User.prototype.getRate = function(){};
            User.prototype.getCases = function(){};

            User.prototype.setFirstName = function(name){};
            User.prototype.setLastName = function(name){};
            User.prototype.addEmail = function(email){};
            User.prototype.addPhone = function(phone){};
            User.prototype.setAddress = function(address){};
            User.prototype.linkGroup = function(group){};
            User.prototype.removeFromGroup = function(group){};
            User.prototype.setRate = function(rate){};
            User.prototype.linkCase = function(Case){};
            User.prototype.save = function(){
                var $this = this;
                $.ajax({
                    type: "POST",
                    url: 'http://localhost:3000/createUsers',
                    data: {
                        firstName : $this.firstName,
                        lastName : $this.lastName,
                        type : $this.type,
                        emails : $this.emails,
                        phones : $this.phones,
                        address : $this.address,
                        groups : $this.groups,
                        rate : $this.rate,
                        cases : $this.cases
                    },
                    success: function(){},
                    dataType: 'JSON'
                });

            };





            function Contact(id){
                var Contact = this;

                Contact.id = undefined;

                Contact.firstName = null;
                Contact.lastName = null;
                Contact.emails = [];
                Contact.phones = [
                    {
                        type : 'work',
                        value : '',
                        extension : ''
                    },
                    {
                        type : 'cell',
                        value : ''
                    }
                ];
                Contact.street = null;
                Contact.unit = null;
                Contact.city = null;
                Contact.state = null;
                Contact.zip = null;
                Contact.type = null;

                Contact.invoices = null;
                Contact.payements = null;

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
            Contact.prototype.save = function(){
                var $this = this;
                console.log ( {
                    firstName : $this.firstName,
                    lastName : $this.lastName,
                    emails : $this.emails,
                    company : $this.company,
                    type : $this.type,
                    phones : $this.phones,
                    street : $this.street,
                    city : $this.city,
                    state : $this.state,
                    zip : $this.zip,
                    unit : $this.unit,
                    birthday : $this.birthday,
                    licenseNumber : $this.licenseNumber,
                    licenseSate : $this.licenseSate,
                    website : $this.website
                } ); return false;
                $.ajax({
                    type: "POST",
                    url: 'http://localhost:3000/createContact',
                    data: {
                        firstName : $this.firstName,
                        lastName : $this.lastName,
                        emails : $this.emails,
                        company : $this.company,
                        type : $this.type,
                        phones : $this.phones,
                        street : $this.street,
                        city : $this.city,
                        state : $this.state,
                        zip : $this.zip,
                        unit : $this.unit,
                        birthday : $this.birthday,
                        licenseNumber : $this.licenseNumber,
                        licenseSate : $this.licenseSate,
                        website : $this.website
                    },
                    success: function(){},
                    dataType: 'JSON'
                });

            };







            var DataModel = this;
            DataModel.Case = Case;
            DataModel.ChekListItem = ChekListItem;
            DataModel.Comment = Comment;
            DataModel.Contact = Contact;
            DataModel.Document = Document;
            DataModel.Event = Event;
            DataModel.Expense = Expense;
            DataModel.Firm = Firm;
            DataModel.Group = Group;
            DataModel.Invoice = Invoice;
            DataModel.Location = Location;
            DataModel.Payement = Payement;
            DataModel.PhoneNumber = PhoneNumber;
            DataModel.PracticeArea = PracticeArea;
            DataModel.Reminder = Reminder;
            DataModel.User = User;
            DataModel.Task = Task;
            DataModel.TimeEntry = TimeEntry;

            return DataModel;
        }])
    ;
})();