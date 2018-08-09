  //const MongoClient = require('mongodb').MongoClient;
  const {MongoClient, ObjectID} = require('mongodb');
  // const ObjectID = require('mongodb').MongoClient.ObjectID;

  MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //   _id: new ObjectID("5b6c01dd0c6f224b9019af68"),
    // }).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    //
    // }, (err) => {
    //   console.log('Unable to fetch todos');
    // })

    db.collection('Todos').find().count().then((count) => {
      console.log('Todos:',count);


    }, (err) => {
      console.log('Unable to fetch todos');
    })


    //client.close();
  })
