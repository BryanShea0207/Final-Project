<script setup lang="ts">
import { getAll, getOne } from '@/models/user'
import { ref} from 'vue'
import WeightSummary from './WeightSummary.vue'
import CardioSummary from './CardioSummary.vue'
import SocialPost from './SocialPost.vue'

const showPosts = ref(false);
const showFriends = ref(false)
const showSummeries = ref(false);
const selectedUser = ref(0);

function deleteAccount(userId: number) {
  if (getOne(userId).userName){
    getOne(userId).userName = ""
  }
  getAll().users.splice(userId)
}

function viewPosts(userId: number){
  showSummeries.value = false
  showFriends.value = false
  showPosts.value = true
  
  selectedUser.value = userId
}

function viewFriends(userId: number){
  showPosts.value = false
  showSummeries.value = false
  showFriends.value = true

  selectedUser.value = userId
}

function viewSummeries(userId: number){
  showPosts.value = false
  showFriends.value = false
  showSummeries.value = true

  selectedUser.value = userId
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
              <button class="button is-danger" @click="deleteAccount(user.userId)">delete</button>
              <a class="button is-primary" @click="viewPosts(user.userId)">View Posts</a>
              <a class="button is-primary" @click="viewFriends(user.userId)">View Friends</a>
              <a class="button is-primary" @click="viewSummeries(user.userId)">View Summaries</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="container pt-5" v-if="showPosts" v-for="post in getOne(selectedUser).posts">
    <SocialPost :post="post">
      <WeightSummary v-if="post.summary.type === 'weight'" :data="post.summary" />
      <CardioSummary v-else :data="post.summary"> </CardioSummary>
    </SocialPost>
  </div>
  <div class="container pt-5" v-if="showFriends">
    <table class="table">
      <thead>
        <tr>
          <td>userName</td>
          <td>userId</td>
        </tr>
      </thead>
      <tbody>
      <tr v-for="friend in getOne(selectedUser).friendsIds">
        <td>{{ getOne(friend).userName }}</td>
        <td>{{ friend }}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="container pt-5 " v-if="showSummeries" v-for="summary in getOne(selectedUser).summaries">
    <WeightSummary v-if="summary.type === 'weight'" :data="summary" />
    <CardioSummary v-else :data="summary" />
  </div>
</template>

<style scoped></style>
