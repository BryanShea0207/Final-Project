<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import AddExercise from './components/AddExercise.vue';
import ExerciseSummery from './components/ExerciseSummery.vue';
</script>

<template>
  <header>
      <NavBar />
  </header>
  <main>
    <section class="columns">
      <div class="column is-one-quarter">
        <AddExercise />
      </div>
      <div class="column is-one-third">
        <ExerciseSummery />
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>