<script setup lang="ts">
import { currentUser } from '@/models/session';
import { getOne, type User } from '@/models/user';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { onMounted, ref } from 'vue';

const friends = ref<User[]>([])
  const fetchData = async () => {
  
  try {
    currentUser.value?.friends_Ids.forEach( async (friendID) => {
        const friend = await getOne(friendID)
        friends.value.push(friend) 
    });
  } finally {

  }
};

onMounted(fetchData)
</script>

<template>
  <div class="panel p-5" style="height: 100%">
    <h2 class="title">Friends List</h2>
  <div class="m-5 friend p-0 m-0" v-for="friend in friends">
    <RouterLink :to="`Profile/${friend.user_id}`">
      <p class="is-size-5"><FontAwesomeIcon :icon="faCircleUser"/> {{ friend.first_Name + " " + friend.last_Name }}</p>
    </RouterLink>
  </div>
  </div>
</template>

<style>

</style>