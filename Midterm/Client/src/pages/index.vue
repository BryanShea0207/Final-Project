<script setup lang="ts">
import UserList from '@/components/UserList.vue'
import type { User } from '@/models/user'
import { ref } from 'vue'

const showUsers = ref(false)
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1 has-text-centered">Fitness Tracker</h1>
      <div class="buttons are-large is-justify-content-center">
        <a class="button has-text-centered" @click="showUsers = !showUsers">Login</a>
      </div>
    </div>
  </section>
  <!--<UserList v-if="showUsers" class="is-flex is-justify-content-center" />-->
</template>
