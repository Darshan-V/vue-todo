import cors from 'cors'
import express from 'express'
import { ObjectId } from 'mongodb'

const app = express()



import connectToDb from './connection.js'
import { addTask, clearAll, clearDoneTasks, deleteTask, getTasks, updateTodo } from './db.js'
connectToDb()


app.use(express.json())

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
    await addTask(req.body)
    res.send('OK')
  } catch (err) {
    console.log(err.message)
  }
})

// Put
app.put('/:id', async (req, res) => {
  try {
    await updateTodo({_id: ObjectId(req.params.id)},req.body)
    res.send(`updated the ${req.body}`)
  } catch (err) {
    console.error(err.message)
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
    await clearDoneTasks(req.body)
    res.send("deleted done")
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(5000, () => {
    console.log(`listening on port 5000`)
  })
