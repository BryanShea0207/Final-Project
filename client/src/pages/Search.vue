<script setup lang="ts">
import { getAll, type User } from '@/models/user';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';
import type { OptionsProp } from "@oruga-ui/oruga-next";

const usersList = ref<User[]>([])
const userOptions = ref<User[]>([])
const options: OptionsProp = getAll()
console.log(options)
getAll().then((users) => {
  usersList.value = users
})

const selected = ref();


async function convertUsers(users:Users[]) {
  const formatedUsers = []
  users.forEach(user => {
    formatedUsers.push({label: user.first_Name + " " + user.last_Name, value: user})
  });
  return formatedUsers
}
</script>

<template>
    <div class="container">
      <o-autocomplete
            v-model="selected"
            :options="options"
            placeholder="Find a name..."
            open-on-focus>
        </o-autocomplete>
    <div class="fixed-grid has-4-cols">
  <div class="grid">
    <div class="cell" v-for="user in usersList">
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