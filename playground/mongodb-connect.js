  //const MongoClient = require('mongodb').MongoClient;
  const {MongoClient, ObjectID} = require('mongodb');
  // const ObjectID = require('mongodb').MongoClient.ObjectID;

  var obj = new ObjectID();

  console.log(ObjectID);

  var user = {name: 'Andrew', age: 25}
  var {age} = user; // = var age = user.age
  console.log(age);

  MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   complited: false
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert Todo', err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // })


    // const db = client.db('Users');
    // db.collection('shvish').insertOne({
    //   name: 'Boris',
    //   age: 27,
    //   location: 'Yerevan'
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert Users', err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // })



    client.close();
  })
