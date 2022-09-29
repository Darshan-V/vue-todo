<template>
  <li class="list-group-item">
    <div class="row">
      <div class="task">
        <div class="edit-mode-div">
            <div class="todo-title" @click="activateInEditMode" v-show="!isEditing" >
                {{ todo.title }}
            </div><span>
              <div class="todo-modifires">
                    <input type="checkbox" class="checkbox"  @change="updateCompleted(todo)" />
                    <button class="remove-button" v-on:click="removeTodo(todo)">X</button>
              </div>
            </span>
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
    updateCompleted(todo){
      this.$emit('update-check',todo)
    }
  }
}
</script>

<style>
 li{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
 }
div.row{
  display: flex;
  width: 700px;
  padding-left: 50px;
}
div.task{
  display: flex;
  flex-direction: column;
}
div.edit-mode-div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    align-content: stretch;
    font-size: 1.5em;
}
div.edit-mode-div {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: baseline;
}
div.todo-title{
  width:300px;
  margin-right: 5px;
  background-color:white;
  border-color:solid black ;
  border:2px;
}

div.todo-modifiers{
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  background-color: aquamarine;
}
</style>