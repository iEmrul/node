const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbname = 'conFusion';

MongoClient.connect(url, (err,client) => {
    assert.equal(err,null);

    console.log('connected to the emrul mango');

    const db = client.db(dbname);
    const collection = db.collection('dishes');
    collection.insertOne({
        "name":"Emrul",
        "description":"Best"
    }, (err, result) => {
        assert.equal(err,null);
        console.log('After Insert: '+result.ops);

        collection.find({}).toArray((err,docs) => {
            assert.equal(err,null);
            console.log('Found the mimi '+docs);
            db.dropCollection('dishes', (err,result) => {
                assert.equal(err,null);

                client.close();
            })
        })
    });

});