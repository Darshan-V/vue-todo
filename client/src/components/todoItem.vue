<template>
    <div class="visible">
      <p class="savedTodo">
        <input
          type="text"
          :class="{  todotitleBar: true }"
          @change="onTextEdit"
          v-model="title"
        />
      </p>
      <input type="checkbox" class="done" v-model="done" @change="emitDone" />
      <button class="expandButton" @click="expand">v</button>
    </div>
  
    <div class="hidden" v-if="expanded">
      <div class="leftHidden">
        <textarea class="notes" @change="emitNotes" v-model="notes">{{ notes }}</textarea>
      </div>
      <div class="rightHidden">
        <input type="date" class="date" v-model="date" @change="emitDate" />
        <select class="priority" :selectedIndex="priority" v-model="priority" @change="emitPriority">
          <option>low</option>
          <option>medium</option>
          <option>high</option>
        </select>
        <button class="delete" @click="deleteTodo">delete</button>
      </div>
    </div>
  </template>
  <script>
  export default {
    emits: ["delete-todo", "edit-todo-text", "update-done", "expand", "update-notes"],
    data() {
      return {
        title: this.title,
        doneStatus: this.done,
        selectedPriority: this.priority,
        todoNotes: this.notes,
        todoDate: this.date,
      };
    },
    props: {
      title: { required: true, type: String },
      done: { default: false, type: Boolean },
      priority: { default: "low", type: String },
      notes: { default: "", type: String },
      date: { default: "", type: String },
      id: { required: true, type: String },
      expanded: {default: false, type: Boolean}
    },
    methods: {
      expand() {
        this.$emit('expand', this.id, this.expanded)
      },
      deleteTodo() {
        this.$emit("delete-todo", this.id);
      },
      onTextEdit(event) {
        const newText = event.target.value;
        this.todotitle = newText;
        this.$emit("edit-todo-text", newText, this.id);
      },
      emitDone() {
        this.$emit("update-done", this.done, this.id);
      },
      emitNotes() {
        this.$emit("update-notes", this.notes, this.id);
      },
      emitDate() {
        this.$emit("update-date", this.date, this.id);
      },
      emitPriority() {
        this.$emit("update-priority", this.priority, this.id);
      }
    },
  };
  </script>