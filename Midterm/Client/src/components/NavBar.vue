<script setup lang="ts">
import { ref } from 'vue'
import { currentUser } from './UserList.vue'
const isActive = ref(false)
</script>

<template>
  <nav
    class="navbar has-background-info-dark has-text-info-dark-invert"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand has-text-info-dark-invert">
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{ 'is-active': isActive }"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu has-text-info-dark-invert"
      :class="{ 'is-active': isActive }"
    >
      <div class="navbar-start">
        <RouterLink to="/main" class="navbar-item has-text-info-dark-invert"> Home </RouterLink>

        <RouterLink to="/ActivityView" class="navbar-item has-text-info-dark-invert">
          My Activity
        </RouterLink>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-info-dark">
              <RouterLink to="/"><strong>Sign out</strong></RouterLink>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
