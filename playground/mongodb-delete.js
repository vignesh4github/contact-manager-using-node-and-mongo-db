const {MongoClient,ObjectID} = require('mongodb');

// const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/Contact-manager', (err, db) =>
{
if(err)
{
return console.log('Connection coudnt get connected properly');
}

 console.log("Connected with the server successfully..!!!");

// Deleting many collection

// db.collection('contacts').deleteMany({'name':'vickee'}).then((result) =>
// {
//  console.log(result);
// })

// Deleting a collection


// db.collection('contacts').deleteOne({'name':'vickee'}).then((result) =>
// {
//  console.log(result);
// })

//Finding one and delete

db.collection('contacts').findOneAndDelete({'name':'ragul'}).then((result) =>
{
  console.log(result);
});

//shutdown the db

  db.close();
});
