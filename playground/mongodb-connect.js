const {MongoClient,ObjectID} = require('mongodb');

// const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/Contact-manager', (err, db) =>
{
if(err)
{
return console.log('Connection coudnt get connected properly');
}

 console.log("Connected with the server successfully..!!!");

// creating collections

db.collection('contacts').insertOne(
  {
    id  : 123,
    name : 'vickee',
    hometown : 'salem'
  }
, (err, result) =>
{
  if(err)
  {
    console.log('unable to Insert into the collection',err);
  }
  console.log(result.ops[0].name);
});

//shutdown the db
  db.close();
});
