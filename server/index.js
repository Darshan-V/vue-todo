import express from 'express'
import { ObjectId } from 'mongodb'
import cors from   'cors'

const app = express()

import connectToDb from './connection.js'
import { addTask, clearAll, clearDoneTasks, deleteTask, getTasks, updateTodo } from './db.js'
connectToDb()


app.use(express.json())
app.use(
    cors({
      origin: '*',
      methods: ['GET', 'PUT', 'DELETE', 'POST']
    })
  )

// Get
app.get('/getAll', async (req, res) => {
  try {
    const allTasks = await getTasks()
    res.json(allTasks)
  } catch (err) {
    console.error(err.message)
  }
})

// Add
app.post('/', async (req, res) => {
  try {
    const result = await addTask(req.body)
    res.json(result)
  } catch (err) {
    console.log(err.message)
  }
})

// Put
app.put('/:id', async (req, res) => {
    try {
      const {id} = req.params
      const result = await updateTodo({'_id': ObjectId(id)}, req.body)
      res.json(result)
    } catch (err) {
      console.log(err)
    }
  })

// Delete
app.delete('/:id', async (req, res) => {
 try {
  await deleteTask({_id: ObjectId(req.params.id)})
  res.send(`deleted with id ${req.params.id}`)
 } catch (err) {
  console.error(err.message)
 }
})


//Delete all
app.delete('/',async(req,res)=>{
  try {
    await clearAll()
    res.send('deleted all')
  } catch (err) {
    console.error(err.message)
  }
})

//Delete done
app.delete('/todo/done', async(req,res)=>{
  try {
    await clearDoneTasks()
    res.send("deleted done")
  } catch (err) {
    console.error(err.message)
  }
})
app.use(express.static('public'))


app.listen(5000, () => {
    console.log(`listening on port 5000`)
  })
