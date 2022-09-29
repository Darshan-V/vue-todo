<template>

    <footer class="actionbar" :class="{'actionbar--hide': !checked }"> 
      <div class="actionbar__main" v-show="checked">
        <button class="actionbar__show-toggle" @click="toggle">{{tasksLegend}}</button>
        <button class="actionbar__clear-done" @click="clearDone">Clear Done Tasks</button>
      </div>
      <button 
        v-show="todos.length > 0" 
        @click="clearAll" 
        class="actionbar__clear-all"
      >
      Clear All Tasks
      </button>
    </footer>
  
  </template>
  
  <script>
  export default {
    name: 'Footer',
    props: {
      todos: Object,
      visibility: String
    },
    methods: {
        clearAll() {
            this.$emit('clear-all', 'all')
        },
        clearDone() {
            this.$emit('clear-completed', 'completed')
        },
        toggle() {
            this.$emit('toggle')
        },
        todosCompleted() {
            return this.todos.filter(todo => todo.completed).length
        }
      },
      computed: {
        tasksLegend() {
            if(this.visibility === 'all') {
             return  `Hide Done Tasks (${this.todosCompleted()})`
            } else {
             return  `Show Done Tasks (${this.todosCompleted()})`
             }
        },
        checked() {
            return this.todosCompleted() > 0
        }
      }
  }
  </script>
  
 