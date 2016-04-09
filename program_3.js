var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
    if (err) throw err;
    var collection = db.collection('docs')
    var firstlast = {
        'firstName' : process.argv[2],
        'lastName' : process.argv[3]
    }
    console.log(JSON.stringify(firstlast))
    collection.insert(firstlast, function (err, data){
        if (err) throw err;
        db.close();})
    db.close();
})