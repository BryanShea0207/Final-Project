<script setup lang="ts">
import { ref } from 'vue'
import { currentUser } from './UserList.vue'
import type { User } from '@/models/user'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faPersonRunning } from '@fortawesome/free-solid-svg-icons'
const isActive = ref(false)

const emptyUser: User = {
  user_id: -1,
  first_Name: "Signed",
  last_Name: "Out",
  age: -1,
  birth_Date: new Date(),
  email: "",
  gender: "",
  role: "",
  phone: "",
  friends_Ids: []
}
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
        <RouterLink to="/Home" class="navbar-item has-text-info-dark-invert"><FontAwesomeIcon :icon="faHouse" /> Home </RouterLink>

        <RouterLink to="/ActivityView" class="navbar-item has-text-info-dark-invert">
          <FontAwesomeIcon :icon="faPersonRunning"/> Activity
        </RouterLink>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <p>{{ currentUser?.first_Name + " " + currentUser?.last_Name }}</p>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-info-dark" v-if="currentUser && currentUser.role == 'admin'">
              <RouterLink to="/admin">Admin</RouterLink>
            </a>
            <a class="button is-info-dark">
              <RouterLink to="/" @click="currentUser = emptyUser"
                ><strong>Sign out</strong></RouterLink
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
