<script setup lang="ts">
import { currentUser } from '@/models/session';
import { getFriendsOfUser, getOne, type User } from '@/models/user';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { onMounted, ref } from 'vue';

const friends = ref<User[]>([])
const loaded = ref(false)

getFriendsOfUser(Number(currentUser.value.user_id)).then((friendsGot) => friends.value = friendsGot)
</script>

<script lang="ts">
</script>

<template>
  <div class="m-5 friend p-0 m-0" v-for="friend in friends">
    <RouterLink :to="`Profile/${friend.user_id}`">
      <p class="is-size-5"><FontAwesomeIcon :icon="faCircleUser"/> {{ friend.first_Name + " " + friend.last_Name }}</p>
    </RouterLink>
  </div>
</template>

<style>

</style>