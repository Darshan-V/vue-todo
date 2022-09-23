<template>
  <li class="list-group-item">
    <div class="row">
        <div class="edit-mode-div">
                 <span>
                  <div class="todo-modifires">
                    <button class="btn btn-default" v-on:click="removeTodo(todo)">remove</button>
                    <input v-model="todo.done" type="checkbox">
                  </div>
                </span>
            <div class="todo-title" v-on:click="activateInEditMode" v-show="!isEditing" >
                {{ todo.title }}
            </div>
            <form v-show="isEditing" v-on:submit.prevent="deActivateInEditMode" >
                <div class="form-group">
                    <input v-model="todo.title" type="text" class="form-control" >
                </div>
            </form>
        </div>
       
    </div>
  </li>
</template>

<script>
export default {
  props: ['todo'],
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    activateInEditMode () {
      this.isEditing = true
    },
    deActivateInEditMode () {
      this.isEditing = false
    },
    removeTodo (todo) {
      this.$emit('remove-todo', todo)
    }
  }
}
</script>

<style scoped>
.todo-title {
    cursor: pointer;
    padding: 6px;
    margin-bottom: 15px;
}

.todo-title:hover {
    background-color: #F1EDED;
}
</style>