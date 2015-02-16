function Document(id){
    var Document = this;

    Document.id = undefined;
    Document.createdDate = undefined;

    Document.name = undefined;
    Document.description = undefined;
    Document.versions = undefined; //Array containing file data of versions of document
    Document.cases = undefined;


}

Document.prototype.getCreatedDate = function(){};
Document.prototype.getName = function () {};
Document.prototype.getDescription = function(){};
Document.prototype.getVersion = function(){};

Document.prototype.download = function(){};
Document.prototype.addVersion = function(){};
Document.prototype.archive = function(){};
