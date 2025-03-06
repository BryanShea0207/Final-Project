<script setup lang="ts">

</script>

<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <slot></slot>
            </div>
        </div>
        <div class="card-content">
            <div class="media">
                <p class="title is-4">John Smith</p>    
            </div>
            <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
                <p>Posted on: 01/01/2021</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>