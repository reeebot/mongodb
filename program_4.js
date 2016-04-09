var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' + process.argv[2]

mongo.connect(url, function(err, db) {
    if (err) throw err;
    var collection = db.collection('users')
    
    var username = { "username" : "tinatime" }
    var setage = { $set: { "age" : 40 } }
    
    collection.update(username, setage, function (err, data){
        if (err) throw err;
        db.close();})
    db.close();
})