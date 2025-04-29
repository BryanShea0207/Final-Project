<script setup lang="ts">
import WeightSummary from '@/components/WeightSummary.vue'
import CardioSummary from '@/components/CardioSummary.vue'
import SummaryFooter from '@/components/SummaryFooter.vue'
import { onMounted, ref } from 'vue'
import { currentUser } from '@/components/UserList.vue'
import { getSummaryByUser, type Summary } from '@/models/summary'

const summaries = ref<Summary[]>([])

const fetchData = async () => {
  
  try {
    const id = currentUser.value?.user_id
    const response = await getSummaryByUser(id as number);
    for(let sum of response){
      summaries.value.push(sum)
    }
  }finally {

  }
};

onMounted(fetchData)

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
