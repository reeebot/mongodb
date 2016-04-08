var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

var findParrots = function(db, callback) {
    var cursor = db.collection('parrots').find({
        age: {$gt: parseInt(process.argv[2])}
    });
   
    cursor.toArray(function(err, doc) {
        if (err) throw err
        console.log(doc);
        db.close();
    });
};

mongo.connect(url, function(err, db) {
    if (err) throw err
    findParrots(db, function() {
        db.close();
    });
});