<script setup lang="ts">
import AddExercise from '../components/AddExercise.vue';
import WeightSummary from '../components/WeightSummary.vue';
import CardioSummary from '../components/CardioSummary.vue';
import SocialPost from '@/components/SocialPost.vue';
</script>

<template>
  <main>
    <section class="columns has-background-link-dark pt-5">
      <div class="column is-one-quarter">
        <AddExercise />
      </div>
      <div class="column is-one-third">
        <div class="container pb-5">
        <WeightSummary />
        </div>
        <div class="container">
        <CardioSummary />
        </div>
      </div>
      <div class="column is-one-third">
        <div class="container">
          <SocialPost />
        </div>
      </div>
    </section>
  </main>
</template>
