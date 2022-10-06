import express from 'express'
import cors from   'cors'

const app = express()

import connectToDb from './connection.js'
connectToDb()
import { addTask, clearAll, clearDoneTasks, deleteTask, getTasks, updateTodo } from './db.js'

app.use(express.json())//explore-->middleware
app.use(
    cors({
      origin: '*',
      methods: ['GET', 'PUT', 'DELETE', 'POST']
    })
  )

// Get
app.get('/getAll', async (req, res) => {
  try {//why am i using try catch
    const allTasks = await getTasks()
    res.json(allTasks)
  } catch (err) {
    console.error(err.message)
  }
})

// Add
app.post('/', async (req, res) => {
  try {
    const todoItem = req.body
    const result = await addTask(todoItem)
    res.json(result)
  } catch (err) {
    console.log(err.message)
  }
})

// Put
app.put('/:id', async (req, res) => {
    try {
      const {id} = req.params
      const result = await updateTodo({'id': id}, req.body)
      res.json(result)
    } catch (err) {
      console.log(err)
    }
  })

// Delete
app.delete('/:id', async (req, res) => {
 try {
  await deleteTask({'id':req.params.id})//add property ID to todo
  res.send(`deleted with id ${req.params.id}`)
 } catch (err) {
  console.error(err.message)
 }
})


//Delete all
app.delete('/',async(req,res)=>{
  try {
    await clearAll()
    res.json('deleted all')
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
