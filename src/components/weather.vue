<template>
    <h2>La temperatura es:{{ weatherStore.temperatura }}°</h2>
</template>

<script setup>
import { useWeather } from '../composable/useWeather';
import {onMounted} from 'vue'
import { useWeatherStore } from '../modules/registro/stores/weatherStore.js';


const weatherStore = useWeatherStore();

onMounted(() => {
    useWeather();
})

</script>


<style scoped>
</style>