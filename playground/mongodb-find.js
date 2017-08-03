const {MongoClient,ObjectID} = require('mongodb');

// const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/Contact-manager', (err, db) =>
{
if(err)
{
return console.log('Connection coudnt get connected properly');
}

 console.log("Connected with the server successfully..!!!");

// Finding a collection

db.collection('contacts').find().count().then((count) =>
{

console.log(`Contacts count : ${count}`);
},(err) =>
{
  console.log('Unable to fetch the contacts',err);
});

//shutdown the db
  db.close();
});
