<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre{{ nombre }}</h3>
        <h3>email {{ email }}</h3>
        <router-link to="/">Inicio</router-link>
        <router-link to="/tareas">Lista de tareas</router-link>
        <router-link to="/registro">Registro</router-link>
        <router-link to="/calcular">calcular</router-link>
    </div>
</template>

<script setup>
import { useRegistrarStore } from '../modules/registro/stores/registrarStore';
import { ref,watch} from 'vue';
const registrarStore = useRegistrarStore();
const nombre = ref(registrarStore.nombre.value);
const email = ref(registrarStore.email.value);
watch(() => registrarStore.nombre.value, (newValue) => {
    nombre.value = newValue;
});
watch(() => registrarStore.email.value, (newValue) => {
    email.value = newValue;
});
</script>

<style>
.sidebar {
    width: 250px;
    height: 100vh;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(241, 6, 6, 0.1);
}
</style>