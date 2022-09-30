<template>
  <div class="list-group-item">
    <div class="row">
      <div class="task">
        <div class="edit-mode-div">
          <div class="todo-modifires">
                    <input type="checkbox" class="checkbox" v-model="todo.status"  @change="updateCompleted(todo)"  />
                    <button class="remove-button" v-on:click="removeTodo(todo)">🧹</button>
          </div>
              <input class="todo-title" v-model="todo.title"  @click="activateInEditMode"  v-show="!isEditing" />             

            
            <form v-show="isEditing" v-on:submit.prevent="deActivateInEditMode" style="width:300px">
                <div class="form-group">
                    <input v-model="todo.title" type="text" class="form-control" @change="editTitle(todo)">
                </div>
                
            </form>
        </div>

        <div class="inner-content-dropdown">
          <div class="note-div">
             <p class="note-heading">Note</p> 
              <textarea v-model="todo.notes" class="notes" @change="setNote(todo)" placeholder="Description"></textarea>
          </div>
            <div class="date-priority-div">
                <input v-model="todo.duedate" type="date" class="due-date-select" @change="setDuedate(todo)"/>
                  <select v-model="todo.priority"  class="priority-select" @change="setPriority(todo)">
                  <option value="none">None</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  </select>
              </div>
            </div>
            </div>
      </div>
  </div>
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
    },
    editTitle(todo){
      this.$emit('update-title',todo)
    },
    setNote(todo){
      this.$emit('update-notes',todo)
    },
    setPriority(todo){
      this.$emit('set-priority',todo)
    },
    setDuedate(todo){
      this.$emit('set-duedate',todo)
    }
  }
}
</script>

<style>

p.note-heading{
  font-size: 1em;
  display: block;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

 div.list-group-item{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
 }
div.row{
  display: flex;
  width: 700px;
  padding-left: 50px;
  flex-direction: row-reverse;
  justify-content: flex-end;
  padding-bottom: 5px;
}
div.task{
  display: flex;
  width:600px;
  flex-direction: column;
}
div.edit-mode-div {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
}
input.todo-title{
  width:650px;
  background-color:white;
  border-color:solid black ;
  border:1px;
  font-size: 1.5em;
}

div.todo-modifires{
  display: flex;
  flex-direction: row;
  justify-content:flex-end;
  align-content: flex-end;
}
button.remove-button:hover{
  background-color: red;
  border-radius: 5px;
}
input.checkbox{
  height: 1.5em;
  width: 1.5em;
}
div.inner-content-dropdown{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: aliceblue;
}

div.note-div{
height: 100px;
width: 300px
}
textarea.notes{
  height: 70px;
  width:250px;
}
div.date-priority-div{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

</style>