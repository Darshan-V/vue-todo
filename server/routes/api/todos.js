const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// Get
router.get('/getAll', async (req, res) => {
  const todos = await loadTodosCollection()
  res.send(await todos.find({}).toArray())
})

// Get one
router.get('/:id', async (req, res) => {
  const todos = await loadTodosCollection()
  res.send(await todos.findOne({ _id: ObjectID(req.params.id) }))
})

// Add
router.post('/', async (req, res) => {
  const todos = await loadTodosCollection()
  await todos.insertOne({
    title: req.body.title,
    notes: req.body.notes,
    dueDate: req.body.duedate,
    priority:req.body.priority,
    completed:req.body.completed
  })
  res.status(201).send()
})

// Put
router.put('/:id', async (req, res) => {
  const todos = await loadTodosCollection()
  await todos.updateOne(
    { _id: new mongodb.ObjectID(req.params.id) },
    {
      $set: {
        title: req.body.title,
        notes: req.body.notes,
        dueDate: req.body.duedate,
        priority:req.body.priority,
        completed:req.body.completed
      }
    }
  )
  res.status(201).send()
})

// Delete
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  const taskID = id.toString()
  console.log(taskID)
  const todos = await loadTodosCollection()
  await todos.deleteOne({ _id: mongodb.ObjectID(taskID) })
  res.status(200).send()
})


//Delete all
router.delete('/',async(req,res)=>{
  const todos = await loadTodosCollection()
  await todos.deleteMany({})
  res.status(200).send()
})

//Delete done
router.delete('/todo/done', async(req,res)=>{
  const todos = await loadTodosCollection()
  await todos.deleteMany({completed:true})
  res.status(200).send()
})

async function loadTodosCollection () {
  const client = await mongodb.MongoClient.connect(
    'mongodb://127.0.0.1:27017/mydb',
    { useNewUrlParser:true,
      useUnifiedTopology:true,
    }
  )
  return client.db('mydb').collection('todos')
}

module.exports = router
