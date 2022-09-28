const mongodb = require('mongodb')


async function loadTodosCollection () {
    const client = await mongodb.MongoClient.connect(
      'mongodb://127.0.0.1:27017/mydb',
      { useNewUrlParser:true,
        useUnifiedTopology:true,
      }
    )
    return client.db('mydb').collection('todos')
  }