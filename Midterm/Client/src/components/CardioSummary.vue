<script setup lang="ts">

</script>

<template>
    <section class="section py-2">
    <div class="card">
        <div class="card-header">
            <p class="card-header-title">Cardio Summary</p>
        </div>
        <div class="columns card-content">
            <div class="column">
                <div class="container">
                    <h3 class="title is-3">00.00 Miles</h3>
                    <p class="subtitle is-5">Total Distance</p>
                </div>
            </div>
            <div class="column">
                <div class="container">
                    <h3 class="title is-3">00:00</h3>
                    <p class="subtitle is-5">Total Time</p>
                </div>
            </div>
            <div class="column">
                <div class="container ">
                    <h3 class="title is-3">000 Cal</h3>
                    <p class="subtitle is-5">Total Calories</p>
                </div>
            </div>
            <div class="column">
                <div class="container">
                    <h3 class="title is-3">00'00"/ Mile</h3>
                    <p class="subtitle is-5">Average Pace</p>
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
    </section>
</template>

<style scoped>

</style>