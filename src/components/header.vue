<template>
    <div class="header">
         {{mensajeRecibido}}<Weather></Weather> 
    </div>
</template>

<script setup>
    import Weather from './weather.vue'
    import {defineProps, ref, watch} from 'vue';
    const props = defineProps(['mensaje']);
    const mensajeRecibido = ref(props.mensaje);
    watch(() => props.mensaje, (newValue) => {
        mensajeRecibido.value = newValue;
    });
</script>

<style scoped>
.header {
    width: 100%;
    height: 50px;
    padding: 10px;
    background-color: #0e0d0d;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>