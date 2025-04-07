<script setup lang="ts">
import WeightSummary from '@/components/WeightSummary.vue'
import AddExercise from '../components/AddExercise.vue'
import CardioSummary from '../components/CardioSummary.vue'
import SocialPost from '@/components/SocialPost.vue'
import { currentUser } from '@/components/UserList.vue'
import FriendsList from '@/components/FriendsList.vue'
import { ref } from 'vue'
import type { Post } from '@/models/posts'
import { getOne } from '@/models/user'

const posts = ref<Post[]>([]);

let ids = currentUser.value?.friendsIds;
ids?.forEach(friend => {
  getOne(friend).posts?.forEach(post => {posts.value.push(post)});
});
posts.value.sort((a,b) => Date.parse(b.date)-Date.parse(a.date))
</script>

<template>
  <main>
    <section class="columns pt-5">
      <div class="column is-one-fifth">
        <AddExercise />
      </div>
      <div class="column is-half">
        <div class="container py-3" v-for="post in posts">
          <SocialPost :post="post">
            <WeightSummary v-if="post.summary.type === 'weight'" :data="post.summary">
            </WeightSummary>
            <CardioSummary v-else :data="post.summary"> </CardioSummary>
          </SocialPost>
        </div>
      </div>
      <div class="column" style="height: 100%;">
        <div class="panel p-5" style="height: 100%">
        <FriendsList />
        </div>
      </div>
    </section>
  </main>
</template>
