<template>
  <form class="card">
    <input type="text" v-model="taskForm.name" placeholder="Task's Name" autofocus>
    <textarea v-model="taskForm.description" rows="3" placeholder="Task's Description" autofocus></textarea>
  </form>
  <button class="btn btn-secondary" @click="submitForm">
    Save
  </button>

  <button class="btn btn-secondary" style="margin-left: 10px;" @click="getList">
    reset
  </button>

  <ul >
    <li v-for="(taskItem, index) in tasks" :key="index">
      {{ taskItem.name || '--' }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ipcRenderer } from 'electron';

const taskForm = reactive({
  name: 'taks1',
  description: '11111'
})

const submitForm = () => {
  console.log('提交的 taskForm=', taskForm)
  if (!taskForm.name) {
    alert('任务名必填')
    return
  }
  const tempTask = {
    name: taskForm.name,
    description: taskForm.description
  }
  ipcRenderer.send("new-task", tempTask);
}

let tasks = ref([])
ipcRenderer.on("new-task-created", (e, arg) => {
  //   console.log(arg);
  //   const taskSaved:any = JSON.parse(arg);
  //   tasks.push(taskSaved as any)
  //   alert("Task Created Successfully"); 
  alert("Task Created Successfully"); 
  getList()
});

onMounted(() => {
  getList()
})

const getList = () => {
  ipcRenderer.send('get-tasks')
}
ipcRenderer.on("get-tasks-success", (e, arg) => {
  console.log(11111, e, arg)
  tasks.value = JSON.parse(arg);
  console.log(tasks.value)
});

</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  color: #dfe6e9;
  background: #2f3640;
  padding: 10px;
}

input,
textarea {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border: 0;
  outline: 0;
}

.card {
  background: #212121;
  border: 1px solid #333;
  border-radius: 4px;
  margin: 4px;
  list-style: none;
  padding: 20px;
}

.btn {
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  padding: .7rem 1rem;
  border-radius: 3px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
}

.card>h4,
p {
  padding: 7px;
}

.btn-danger {
  background: #ed3330;
}

.btn-secondary {
  background: #c8d6e5;
  color: #222f3e !important;
}

.btn:hover {
  background: #434343;
  color: white !important;
  letter-spacing: 1px;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.4s ease 0s;
}
</style>
