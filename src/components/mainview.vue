<template>
    <div class="container">
        <div class="content">
        </div>
    </div>
</template>
<script setup>
import sideBar from '../components/sideBar.vue';
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