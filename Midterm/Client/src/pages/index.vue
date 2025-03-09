<script setup lang="ts">
import WeightSummary from '@/components/WeightSummary.vue';
import AddExercise from '../components/AddExercise.vue';
import CardioSummary from '../components/CardioSummary.vue';
import SocialPost from '@/components/SocialPost.vue';
</script>

<template>
  <main>
    <section class="columns has-background-link-dark pt-5">
      <div class="column is-one-fifth">
        <AddExercise />
      </div>
      <div class="column is-half">
        <div class="container p-3">
          <SocialPost>
          </SocialPost>
        </div>
        <div class="container p-3">
          <SocialPost>
          </SocialPost>
        </div>
      </div>
    </section>
  </main>
</template>
