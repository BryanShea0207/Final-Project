<script setup lang="ts">
import { getAll, getOne } from '@/models/user'
</script>

<script lang="ts">
function deleteAccount(userId: number) {
  getAll().users.splice(userId)
  console.log(getAll())
}
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Users</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in getAll().users">
          <td>{{ user.userName }}</td>
          <td>
            <div class="buttons">
              <a class="button is-danger" @click="deleteAccount(user.userId)">delete</a>
              <a class="button is-primary">View Posts</a>
              <a class="button is-primary">View Friends</a>
              <a class="button is-primary">View Summaries</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
