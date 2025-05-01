<script setup lang="ts">
import { getAll, type User } from '@/models/user';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';

const allUsers = ref<User[]>([])

getAll().then((users) => allUsers.value = users)
</script>

<template>
    <div class="container">
    <div class="fixed-grid has-4-cols">
  <div class="grid">
    <div class="cell" v-for="user in allUsers">
        <RouterLink :to="`/Profile/${user.user_id}`">
            <div class="card">
                <FontAwesomeIcon :icon="faCircleUser" size="4x"/>
                <h2 class="title is-4">{{ user.first_Name + " " + user.last_Name }}</h2>
            </div>
        </RouterLink>
    </div>
  </div>
</div>
</div>
</template>