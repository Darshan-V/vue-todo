<template>
  <li class="list-group-item">
    <div class="row">
      <div class="task">
        <div class="edit-mode-div">
                 <span>
                  <div class="todo-modifires">
                    <button class="btn btn-default" v-on:click="removeTodo(todo)">remove</button>
                    <input v-model="todo.done" type="checkbox">
                  </div>
                </span>
            <div class="todo-title" @click="activateInEditMode" v-show="!isEditing" >
                {{ todo.title }}
            </div>
            <form v-show="isEditing" v-on:submit.prevent="deActivateInEditMode" >
                <div class="form-group">
                    <input v-model="todo.title" type="text" class="form-control" >
                </div>
            </form>
        </div>

        <div class="inner-content-dropdown">
          <div class="note-div">
              <textarea v-model="todo.notes" class="notes" placeholder="Description"></textarea>
          </div>
            <div class="date-priority-div">
                <input v-model="todo.duedate" type="date" class="due-date-select"/>
                  <select v-model="todo.priority"  class="priority-select">
                  <option value="none">None</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  </select>
              </div>
            </div>
            </div>
      </div>
      <button class="remove-done" @click="removeDone(todo)">clear done</button>
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
    },
    removeDone(todo){
      if(todo.done===true)
      this.$emit('remove-done-todo',todo)
    }
  }
}
</script>

<style>
  .task{
    background-color: darkkhaki;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  inner-content-dropdown{
    display:none;
    flex-direction:column;
    justify-content: space-around;
  }

</style>