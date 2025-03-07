<script setup lang="ts">
    import { summaries, Summary, SummaryWeight } from '@/models/summary';

    const props = defineProps<{
        data: Summary
    }>()
</script>

<template>
    <section class="section py-2">
        <div class="card">
            <div class="card-header">
                <p class="card-header-title">Exercise Summary {{ (data as SummaryWeight).name }}</p>
            </div>
            <div class="columns card-content">
                <div class="column">
                    <div class="container">
                        <h3 class="title is-4">
                            {{ (data as SummaryWeight).reps }} Reps X <br /> {{(data as SummaryWeight).sets}} Sets
                        </h3>
                        <p class="subtitle is-5">Work Done</p>
                    </div>
                </div>
                <div class="column">
                    <div class="container">
                        <h3 class="title is-3">{{(data as SummaryWeight).weight}} lbs</h3>
                        <p class="subtitle is-5">Total Weight</p>
                    </div>
                </div>
                <div class="column">
                    <div class="container">
                        <h3 class="title is-3">{{ data.id }} Cal</h3>
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