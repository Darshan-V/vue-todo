<template>
  <ul class="list-group">
    <todo 
     v-for="todo in todos" 
     @remove-todo="removeTodo" 
    @update-check="updateDoneStatus"
    @update-title="updateTodoTitle"
    @update-notes="updateTodoNote"
    @set-priority="updateTodoPriority"
    @set-duedate="updateTodoDuedate"
    :key="todo._id" 
    :todo.sync="todo" 

    />
  </ul>

  
</template>

<script>
import Todo from './Todo'
import {deleteTask, updateNote, updateStatus, updateTitle,updatePriority,updateDuedate} from './../service'

export default {
  props: ['todos'],
  components: {
    Todo
  },
  methods: {
    removeTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
      deleteTask(todo._id)
    },
    updateDoneStatus(todo) {
      todo.status = !todo.status
        updateStatus(todo._id,`${todo.status}`)
        
      },
    updateTodoTitle(todo){
      updateTitle(todo._id,`${todo.title}`)
    },
    updateTodoNote(todo){
      updateNote(todo._id,`${todo.notes}`)
    },
    updateTodoPriority(todo){
      updatePriority(todo._id,`${todo.priority}`)
    },
    updateTodoDuedate(todo){
      updateDuedate(todo._id,`${todo.duedate}`)
    }
    },
   
  }
  

</script>
<style scoped>
ul{
  list-style-type: none;
}
</style>