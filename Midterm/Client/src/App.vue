<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import AddExercise from './components/AddExercise.vue';
import WeightSummary from './components/WeightSummary.vue';
import CardioSummary from './components/CardioSummary.vue';
</script>

<template>
  <header>
      <NavBar />
  </header>
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
    </section>
  </main>
</template>

<style scoped>

</style>