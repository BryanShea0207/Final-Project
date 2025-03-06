<script setup lang="ts">
    function showNotes() {
        const notes = document.getElementById('notes');
        if (notes) {
            notes.classList.toggle('is-hidden');
        }
    }
</script>

<template>
    <div class="card-footer">
        <a class="card-footer-item is-button" @click="showNotes">View Notes</a>
        <a class="card-footer-item is-button">Share</a>
    </div>
    <div class="card-footer is-hidden" id="notes">
        <div class="card-content">
            <p class="subtitle is-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            </p>
        </div>
    </div>
</template>