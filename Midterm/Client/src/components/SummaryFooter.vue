<script setup lang="ts">
    import { ref, defineProps } from 'vue';

    const noteVisable = ref(false);

    const props = defineProps<{ note: string}>()
</script>

<template>
    <div class="card-footer has-background-gray-darker">
        <a class="card-footer-item is-button" @click='noteVisable = !noteVisable'>View Notes</a>
        <a class="card-footer-item is-button">Share</a>
    </div>
    <div class="card-footer has-background-geay-darker" v-if="noteVisable">
        <div class="card-content">
            <p class="subtitle is-5">
                {{ note }}
            </p>
        </div>
    </div>
</template>