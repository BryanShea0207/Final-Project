<script setup lang="ts">
    function showNotes() {
        const notes = document.getElementById('cardioNotes');
        if (notes) {
            notes.classList.toggle('is-hidden');
        }
    }
</script>

<template>
    <section class="section py-2">
    <div class="card">
        <div class="card-header">
            <p class="card-header-title">Cardio Summary</p>
        </div>
        <div class="columns card-content">
            <div class="column is-one-quarter">
                <div class="container pb-5">
                    <h3 class="title is-3">00.00 Miles</h3>
                    <p class="subtitle is-5">Total Distance</p>
                </div>
            </div>
            <div class="column is-one-quarter">
                <div class="container">
                    <h3 class="title is-3">00:00:00</h3>
                    <p class="subtitle is-5">Total Time</p>
                </div>
            </div>
            <div class="column is-one-quarter">
                <div class="container ">
                    <h3 class="title is-3">000 Cal</h3>
                    <p class="subtitle is-5">Total Calories</p>
                </div>
            </div>
            <div class="column is-one-quarter">
                <div class="container">
                    <h3 class="title is-3">00'00"/ Mile</h3>
                    <p class="subtitle is-5">Average Pace</p>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <a class="card-footer-item is-button" @click="showNotes">View Details</a>
        </div>
        <div class="card-footer is-hidden" id="cardioNotes">
            <div class="card-content">
                <p class="subtitle is-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                </p>
            </div>
        </div>
    </div>
    </section>
</template>

<style scoped>

</style>