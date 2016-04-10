var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
    if (err) throw err;
    var collection = db.collection('prices')

    var match = { $match: { size: process.argv[2] } }
    var group = { $group: { _id: 'average', average: { $avg: '$price' }}}
    
    collection.aggregate([match, group]).toArray(function (err, results){
        if (err) throw err;
        if (!results.length) {
          throw new Error('No results found')
        }
        var resultfixed = Number(results[0].average).toFixed(2)
        console.log(resultfixed)
        db.close();})
})