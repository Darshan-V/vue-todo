import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  id:String,
  title:String,
  notes:String,
  status:Boolean,
  priority:String,
  duedate:String,
  showSecondary:Boolean
})

const model = mongoose.model('todo', todoSchema)

export  function getTasks() {
  return ( model.find({}))
}


export  function fetchtask(id) {
  return (
     model.findOne(id))
}

export  function addTask(field) {
  return( model.create(field))
}

export  function deleteTask(id) {
  return ( model.deleteOne(id))
}

export  function updateTodo(id,update) {
  return ( model.updateOne(id,update))
}


export  function clearDoneTasks() {
  return ( model.deleteMany({status:true}))
}

export async function clearAll() {
  return (await model.deleteMany({}))
}

