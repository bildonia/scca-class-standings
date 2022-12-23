<script setup lang="ts">
    defineProps(['item'])
</script>

<template>
    <div class="item">
        <div class="position">{{ item.position }}</div>
        <div class="name">{{ item.name }}</div>
        <div class="time">{{ item.raw_time }}</div>
        <div class="diff">{{ item.diff }}</div>
    </div>
</template>

<style scoped>
    .item {
        height: 70px;
        border-bottom: 1px solid white;
        display: flex;
    }

    .position {
        height: 30px;
        width: 30px;
        border: 1px solid white;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        margin: 0 20px;
    }
</style>