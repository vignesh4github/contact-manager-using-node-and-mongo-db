const {MongoClient,ObjectID} = require('mongodb');

// const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/Contact-manager', (err, db) =>
{
if(err)
{
return console.log('Connection coudnt get connected properly');
}

 console.log("Connected with the server successfully..!!!");


// Updating a collection

db.collection('contacts').findOneAndUpdate({
  _id : new ObjectID('5984a31ad5c4f015203e06e3')
},
{
  $set:
  {
    name : "ragul"
}
},
{
  returnOriginal : "vickee"
}).then((result) =>
{
  console.log(result);
});

//shutdown the db

  db.close();
});
