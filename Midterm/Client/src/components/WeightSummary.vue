<script setup lang="ts">
    
</script>

<template>
    <section class="section py-2">
        <div class="card">
            <div class="card-header">
                <p class="card-header-title">Exercise Summary</p>
            </div>
            <div class="columns card-content">
                <div class="column">
                    <div class="container">
                        <h3 class="title is-4">00 Reps X <br /> 00 Sets</h3>
                        <p class="subtitle is-5">Work Done</p>
                    </div>
                </div>
                <div class="column">
                    <div class="container">
                        <h3 class="title is-3">000 lbs</h3>
                        <p class="subtitle is-5">Total Weight</p>
                    </div>
                </div>
                <div class="column">
                    <div class="container">
                        <h3 class="title is-3">000 Cal</h3>
                        <p class="subtitle is-5">Total Calories</p>
                    </div>
                </div>
            </div>
            <slot></slot>
        </div>
    </section>
</template>

<style scoped>

</style>