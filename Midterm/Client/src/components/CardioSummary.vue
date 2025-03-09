<script setup lang="ts">
    import { Summary, SummaryCardio} from '@/models/summary';

    const props = defineProps<{ data: Summary }>()

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
                    <h3 class="title is-3">{{ (data as SummaryCardio).distance}} Miles</h3>
                    <p class="subtitle is-5">Total Distance</p>
                </div>
            </div>
            <div class="column">
                <div class="container">
                    <h3 class="title is-3">{{(data as SummaryCardio).time}} minute(s)</h3>
                    <p class="subtitle is-5">Total Time</p>
                </div>
            </div>
            <div class="column">
                <div class="container">
                    <h3 class="title is-3">{{ (data as SummaryCardio).getPace() }}/ Mile</h3>
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