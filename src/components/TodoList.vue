<template>
  <ul class="list-group">
    <todo v-on:remove-todo="removeTodo" v-for="todo in todos" :todo.sync="todo" ></todo>
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