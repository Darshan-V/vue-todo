<template>
  <div id="app" class="container">
    <todo-list v-bind:todos="effectiveTodos"></todo-list>
    <form v-on:submit.prevent="addNewTodo()">
        <div class="form-container">
            <input v-model="newTodoText" type="text" class="form-control" name="name" placeholder="Have todo!">
        </div>
    </form>
    <Footer 
    :visibility="visibility"
    :todos="todos"
    @clear-all="deleteAll"
    @clear-completed="clearDone"
    @toggle="toggleVisibility"
  />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import Footer from './components/footer.vue'
import {addTask, getTasks,clearAll, clearDoneTasks} from './service.js'
import { v4 as uuidv4 } from 'uuid'

export default {
  components: {
    TodoList,
    Footer,
  },
  data () {
    return {
      newTodoText: '',
      todos: [],
      visibility:"true",
     }
  },
  methods: {
    addNewTodo () {
      if (this.newTodoText.length > 0) {
       const todo ={
          id:uuidv4(),
          title: this.newTodoText,
          status: false,
          priority:'none',
          duedate:"",
          notes:"",
          showSecondary : false,
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
    async deleteAll(){
      this.todos = []
      await clearAll()
     },
     async clearDone(){
      this.todos = this.todos.filter(todo => !todo.status)
      await clearDoneTasks()
     },
     todosCompleted() {
      return this.todos.filter(todo => todo.status === true).length
      },
      toggleVisibility() {
          if (this.visibility === 'all') {
              this.visibility = 'completed'
            }
          else {
              this.visibility = 'all'
            }
        },
    
     
  },
  mounted(){
    this.getAllTasks()
  },
  computed: {
        tasksLegend() {
            if(this.visibility==='all') {
             return  `Hide Done Tasks (${this.todosCompleted()})`
            } else {
             return  `Show Done Tasks (${this.todosCompleted()})`
             }
        },
        checked() {
            return this.todosCompleted() > 0
        },
      effectiveTodos() {
        if(this.visibility === 'all'){
          return this.todos
          }
        else {
            return this.todos.filter(todo => !todo.status === true)
          }
        }
      
  }
}
</script>

<style>
html{
  background-color: beige;
}
.container{
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.todo-list{
  background-color: beige;
}
.form-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.form-control{
  width: 550px;
  margin-left: 50px;
  padding-right: 50px;
  font-size: 1.5em;
}
footer{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 10px;
}

</style>