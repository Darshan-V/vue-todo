<template>
  <ul class="list-group">
    <todo @remove-todo="removeTodo" @remove-done-todo="removeDone" v-for="todo in todos" :todo.sync="todo" />
  </ul>

  
</template>

<script>
import Todo from './Todo'

export default {
  props: ['todos'],
  components: {
    Todo
  },
  methods: {
    removeTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
    }
  }
}
</script>
<style scoped>
ul{
  list-style-type: none;
}
</style>