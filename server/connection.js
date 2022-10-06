import mongoose from 'mongoose'

export default function connectToDb () {
  const uri = `mongodb://127.0.0.1:27017/mydb`
    mongoose.connect(uri, () => { 
        console.log('connected to mongo server')
      })
    }
    
// import mongo from 'mongodb'
// import { getTasks } from './db'
// mongo = mongo.MongoClient
// const url = `mongodb://127.0.0.1:27017`
// mongo.connect(url, {
//   useNewUrlParser:true,
//   useUnifiedTopology:true
// },(err,client) => {
//   if(err){
//     console.error(err)
//   return
//   }
// const db = client.db('mydb')
// const collection = db.collection('todos')


// })


