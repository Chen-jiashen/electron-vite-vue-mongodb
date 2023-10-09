<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
    <form id="taskForm" class="card">
    <input type="text" id="taskName" placeholder="Task's Name" autofocus>
    <textarea id="taskDescription" rows="3" placeholder="Task's Description" autofocus></textarea>
    <button type="submit" class="btn btn-secondary">
      Save
    </button>
  </form>

  <ul id="taskList"></ul>


  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
