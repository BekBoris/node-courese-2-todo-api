  //const MongoClient = require('mongodb').MongoClient;
  const {MongoClient, ObjectID} = require('mongodb');
  // const ObjectID = require('mongodb').MongoClient.ObjectID;

  MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //   console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //findOneAndDelet
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });


    // db.collection('Users').deleteMany({text: 'Haleluya'}).then((result) => {
    //   console.log(result);
    // });


    db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b6c5ca50c6f224b9019bb0f')
    }).then((result) => {
      console.log(JSON.stringify(result, undefined, 2));
    });

    client.close();
  })
