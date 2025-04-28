<script setup lang="ts">
import type { User } from '@/models/user'
import { getAll, getOne } from '@/models/user'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuToggle = ref(false)


getUsers()
</script>

<script lang="ts">
export const currentUser = ref<User>()
const users = ref<User[]>() 

async function setCurrentUser(id: number) {
  console.log(id)
  currentUser.value = await getOne(id)
}

async function getUsers(){
  getAll().then((list) => {
    console.log(list)
    if(list)
    users.value = list
  })
}
</script>

<template>
  <section>
    <div class="dropdown is-active is-flex is-justify-content-center">
      <div class="dropdown-trigger">
        <button class="button is-large" @click="menuToggle = !menuToggle">
          <span>Users</span>
        </button>
      </div>
      <div class="dropdown-menu has-buttons are-large">
        <div
          class="dropdown-content is-align-content-center"
          v-for="user in users"
          v-show="menuToggle"
        >
          <div class="dropdown-item">
            <RouterLink
              :to="`/main/${user.user_id}`"
              @click="setCurrentUser(user.user_id)"
              class="button is-capitalized has-text-centered"
              id="{{ user.userId }}"
            >
              {{ user.first_Name + " " + user.last_Name}}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
