<script setup lang="ts">
import WeightSummary from '@/components/WeightSummary.vue';
import CardioSummary from '@/components/CardioSummary.vue';
import SummaryFooter from '@/components/SummaryFooter.vue';

</script>

<template>
    <section class="section">
        <div class="container">
            <WeightSummary>
                <SummaryFooter />
            </WeightSummary>
        </div>
        <div class="container">
            <CardioSummary>
                <SummaryFooter />
            </CardioSummary>
        </div>
    </section>
</template>

<style scoped>

</style>