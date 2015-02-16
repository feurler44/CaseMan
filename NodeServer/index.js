var http = require( 'http'),
    express = require ( 'express' ),
    MongoClient = require ( 'mongodb' ).MongoClient;
    Server = require ( 'mongodb' ).Server;


var app = express();
app.set( 'port', process.env.PORT || 3000 );

app.get( '/myService', function ( req, res ) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    //res.send( req );
    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/caseman", function(err, db) {
        if(err) { return console.dir(err); }

        var collection = db.collection( 'users' );
        
        collection.find().toArray( function( err, items ) {
            res.send( items );
        });

    });
});

http.createServer( app).listen( app.get( 'port'), function( ) {
    console.log( 'CASEMAN server listening on port ' + app.get( 'port' ));
});
