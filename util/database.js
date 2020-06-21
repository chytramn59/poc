/*const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback =>{
 MongoClient.connect('mongodb+srv://chytramn:l23RUPMmIvM07zUk@cluster0-ittm8.mongodb.net/shop?retryWrites=true')
.then(client =>{
    console.log('connected!');
    _db = client.db();
     callback();
})
.catch(err => {
    console.log(err);
    throw err;
});
}

const getDb = () =>{
    if(_db){
        return _db
    }
    throw 'no database found';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb; */
