<script setup lang="ts">
import { currentUser } from '@/models/session';
import { getFriendsOfUser, getOne, type User } from '@/models/user';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { onMounted, ref, watch } from 'vue';
import FriendCard from './friendCard.vue';

const loaded = ref(false)
const friends = ref<User[]>([])

getFriendsOfUser(currentUser.value.user_id as number).then((friendList) => friends.value = friendList)

watch(() => friends.value, (newFriends) => {
  loaded.value = true
  console.log("friends changed")
})
</script>

<template>
  <div class="panel p-5" style="height: 100%">
    <h2 class="title">Friends List</h2>
      <div v-if="loaded" v-for="friend in friends">
        <FriendCard :friend="friend"/>
      </div>
      <div v-else>
        <h2 class="title">No Friends found go to search and add some</h2>
      </div>
  </div>
</template>

<style>

</style>