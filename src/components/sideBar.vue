<template>
    <div class="sidebar">
        <h2>Hola soy una barra lateral</h2>
        <router-link to="/HelloWorld">Inicio</router-link>
        <router-link to="/listaDeTareas">Lista de tareas</router-link>
    </div>
</template>

<script setup>
import sidebar from '../components/sideBar.vue';
</script>

<style>
.sidebar {
    width: 250px;
    height: 100vh;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}
</style>