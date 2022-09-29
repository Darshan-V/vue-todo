<template>
  <div id="app" class="container">
    <todo-list v-bind:todos="todos"></todo-list>
    <form v-on:submit.prevent="addNewTodo()">
        <div class="form-container">
            <input v-model="newTodoText" type="text" class="form-control" name="name" placeholder="Have todo!">
        </div>
    </form>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import {addTask, getTasks} from './service.js'

export default {
  components: {
    TodoList
  },
  data () {
    return {
      newTodoText: '',
      todos: []
    }
  },
  methods: {
    addNewTodo () {
      if (this.newTodoText.length > 0) {
       const todo ={
          title: this.newTodoText,
          status: false,
          priority:'none',
          duedate:"",
          notes:""
        }
        this.todos.push(todo)
        console.log(this.todos)
        addTask(todo)
        this.newTodoText = ''
      }
    },
      async getAllTasks() {
      const result = await getTasks()
      this.todos = result
     },
  },
  mounted(){
    this.getAllTasks()
  }
}
</script>

<style>
.container{
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.todo-list{
  background-color: rgb(210, 219, 151);
}
.form-container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.form-control{
  width: 600px;
  font-size: 1.5em;
}
</style>