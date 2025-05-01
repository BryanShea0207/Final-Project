<script setup lang="ts">
import { ref } from 'vue'
import { currentUser, emptyUser } from '@/models/session'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faPersonRunning, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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
        <RouterLink to="/Home" class="navbar-item has-text-info-dark-invert" v-if="currentUser.user_id as number != -1">
          <FontAwesomeIcon :icon="faHouse" /> 
          Home 
        </RouterLink>

        <RouterLink to="/ActivityView" class="navbar-item has-text-info-dark-invert" v-if="currentUser.user_id as number != -1">
          <FontAwesomeIcon :icon="faPersonRunning"/> Activity
        </RouterLink>
      </div>
      <div class="navbar-end">
        <div class="navbar-item" v-if="currentUser.user_id as number != -1">
          <p>{{ currentUser?.first_Name + " " + currentUser?.last_Name }}</p>
        </div>
        <div class="navbar-item">
          <RouterLink to="/Search" class="navbar-item has-text-info-dark-invert" v-if="currentUser.user_id as number != -1">
            <FontAwesomeIcon :icon="faMagnifyingGlass" /> Search
          </RouterLink>
          <div class="buttons">
            <a class="button is-info-dark" v-if="currentUser && currentUser.role == 'admin'">
              <RouterLink to="/admin">Admin</RouterLink>
            </a>
            <a class="button is-info-dark" v-if="currentUser.user_id as number != -1">
              <RouterLink to="/" @click="currentUser = emptyUser"><strong>Sign out</strong></RouterLink>
            </a>
            <RouterLink to="/" class="navbar-item has-text-info-dark-invert" v-if="currentUser.user_id as number == -1">
            Log In
          </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
