import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  title:String,
  notes:String,
  status:Boolean,
  priority:String,
  duedate:String
})

const model = mongoose.model('todo', todoSchema)

export async function getTasks() {
  return (await model.find({}))
}


export async function fetchtask(id) {
  return (
    await model.findOne(id))
}

export async function addTask(field) {
  return(await model.create(field))
}

export async function deleteTask(id) {
  return (await model.deleteOne(id))
}

export async function updateTodo(id, update) {
  return (await model.updateOne(id, update))
}


export async function clearDoneTasks(query) {
  return (await model.deleteOne(query))
}

export async function clearAll() {
  return (await model.deleteMany({}))
}

