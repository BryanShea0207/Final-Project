<script setup lang="ts">
import WeightSummary from '@/components/WeightSummary.vue'
import CardioSummary from '@/components/CardioSummary.vue'
import SummaryFooter from '@/components/SummaryFooter.vue'
import { ref } from 'vue'
import { summaries, SummaryWeight } from '@/models/summary'
</script>

<template>
  <section class="section">
    <div class="container" v-for="summary in summaries">
      <WeightSummary v-if="summary.type === 'weight'" :data="summary">
        <SummaryFooter :summary="summary" />
      </WeightSummary>
      <CardioSummary v-else :data="summary">
        <SummaryFooter :summary="summary" />
      </CardioSummary>
    </div>
  </section>
</template>

<style scoped></style>
