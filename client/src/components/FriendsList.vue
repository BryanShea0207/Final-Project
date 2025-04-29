<script setup lang="ts">
import { currentUser } from './UserList.vue';
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

<script lang="ts">
</script>

<template>
        <div class="m-5 friend p-0 m-0" v-for="friend in friends">
            <p class="is-size-5"><FontAwesomeIcon :icon="faCircleUser"/> {{ friend.first_Name + " " + friend.last_Name }}</p>
        </div>
</template>

<style>

</style>