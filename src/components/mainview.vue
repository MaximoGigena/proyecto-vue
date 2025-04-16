<template>
    <Header :mensaje="texto"></Header>
    <div class="container">
        <sideBar></sideBar>
        <div class="content">
            <input type="text" v-model="texto"/>
            {{ texto }}
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
import sideBar from '../components/sideBar.vue';
import Header from '../components/header.vue';
import { ref } from 'vue';
const texto = ref('');
</script>
<style>
 .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    }
 .content {
    flex: 1;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
    }
</style>