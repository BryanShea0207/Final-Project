<script setup lang="ts">
import HomeView from '../views/HomeView.vue';
import { ref } from 'vue';

const currentView = ref('HomeView');

</script>

<template>
    <nav class="navbar has-background-info-dark has-text-info-dark-invert" role="navigation" aria-label="main navigation">
  <div class="navbar-brand has-text-info-dark-invert">
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu has-text-info-dark-invert">
    <div class="navbar-start">
      
      <RouterLink to="/">
        <a class="navbar-item has-text-info-dark-invert">
          Home
        </a>
      </RouterLink>

      <RouterLink to="/activity">
        <a class="navbar-item has-text-info-dark-invert">
          My Activity
        </a>
      </RouterLink>
      
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-info-dark">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>

</style>