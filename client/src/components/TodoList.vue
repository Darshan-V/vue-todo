<template>
  <ul class="list-group">
    <todo @remove-todo="removeTodo" 
    @update-check="updateDoneStatus"
     v-for="todo in todos" 
    :key="todo._id" 
    :todo.sync="todo" 

    />
  </ul>

  
</template>

<script>
import Todo from './Todo'
import {deleteTask, updateTodo} from './../service'

export default {
  props: ['todos'],
  components: {
    Todo
  },
  methods: {
    removeTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
      console.log(todoIndex,todo._id)
      deleteTask(todo._id)
    },
    updateDoneStatus(todo) {
        const todoIndex = this.todos.indexOf(todo)
        console.log(todoIndex)
        console.log(todoIndex,todo._id)
        todo.status = !todo.status
        console.log(todo.status)
        updateTodo(todo._id, todo.status)
      }
    
    },
   
  }
  

</script>
<style scoped>
ul{
  list-style-type: none;
}
</style>