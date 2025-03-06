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
            <div class="column is-half">
                <div class="container">
                    <h3 class="title is-4">00 Reps X <br /> 00 Sets</h3>
                    <p class="subtitle is-5">Work Done</p>
                </div>
            </div>
            <div class="column is-half">
                <div class="container">
                    <h3 class="title is-3">000 lbs</h3>
                    <p class="subtitle is-5">Total Weight</p>
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