<template>
    <div>
        <h1>Lista de tareas</h1>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
        <ol>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ tarea }}
                <button @click="borrarTarea">borrar</button>
            </li>
        </ol>
    </div>
</template>

<script setup> 
import {ref} from 'vue';
const tareas = ref([]);
const nuevaTarea = ref('');
const addTarea = ()=>{
    tareas.value.push(nuevaTarea.value);
    nuevaTarea.value = '';
}
const borrarTarea = (index)=>{
    tareas.value.splice(index,1);
}
</script>
<style> </style>