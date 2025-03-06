<script setup lang="ts">
    function showNotes() {
        const notes = document.getElementById('notes');
        if (notes) {
            notes.classList.toggle('is-hidden');
        }
    }
</script>

<template>
    <div class="card">
        <div class="card-header">
            <p class="card-header-title">Exercise Summary</p>
        </div>
        <div class="columns card-content">
            <div class="column is-half pb-0">
                <div class="container pb-5">
                    <h3 class="title is-3">00.00 Miles</h3>
                    <p class="subtitle is-5">Total Distance</p>
                </div>
                <div class="container pd-0">
                    <h3 class="title is-3">00:00:00</h3>
                    <p class="subtitle is-5">Total Time</p>
                </div>
            </div>
            <div class="column is-half pb-0">
                <div class="container pb-5">
                    <h3 class="title is-3">000 Cal</h3>
                    <p class="subtitle is-5">Total Calories</p>
                </div>
                <div class="container pd-0">
                    <h3 class="title is-3">00'00"/Mile</h3>
                    <p class="subtitle is-5">Average Pace</p>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <a class="card-footer-item is-button" @click="showNotes">View Details</a>
        </div>
        <div class="card is-hidden" id="notes">
            <h5 class="card-header">Notes</h5>
            <p class="subtitle is-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>