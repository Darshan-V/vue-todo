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
        this.todos.push({
          id:Date.now(),
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
  justify-content: flex-end;
  width: 600px;
  margin-left:  600px;
}
.form-control{
  width: 600px;
  font-size: 1.5em;
}
</style>