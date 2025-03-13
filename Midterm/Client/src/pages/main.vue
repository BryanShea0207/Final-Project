<script setup lang="ts">
import WeightSummary from '@/components/WeightSummary.vue'
import AddExercise from '../components/AddExercise.vue'
import CardioSummary from '../components/CardioSummary.vue'
import SocialPost from '@/components/SocialPost.vue'
import { currentUser } from '@/components/UserList.vue'
</script>

<template>
  <main>
    <section class="columns pt-5">
      <div class="column is-one-fifth">
        <AddExercise />
      </div>
      <div class="column is-half">
        <div class="container py-3" v-for="post in currentUser?.posts">
          <SocialPost :post="post">
            <WeightSummary v-if="post.summary.type === 'weight'" :data="post.summary">
            </WeightSummary>
            <CardioSummary v-else :data="post.summary"> </CardioSummary>
          </SocialPost>
        </div>
        {{ currentUser }}
      </div>
    </section>
  </main>
</template>
