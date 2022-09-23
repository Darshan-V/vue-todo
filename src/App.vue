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
import uniqueId from 'lodash.uniqueid'

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
      let id = 1
      if (this.newTodoText.length > 0) {
        this.todos.push({
          id:id++,
          title: this.newTodoText,
          done: false,
          priority:'none',
          duedate:"",
          notes:""
        })
        this.newTodoText = ''
        console.log(this.todos)
      }
    }
  }
}
</script>

<style>

</style>