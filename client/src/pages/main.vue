<script setup lang="ts">
import WeightSummary from '@/components/WeightSummary.vue'
import AddExercise from '../components/AddExercise.vue'
import CardioSummary from '../components/CardioSummary.vue'
import SocialPost from '@/components/SocialPost.vue'
import { currentUser } from '@/components/UserList.vue'
import FriendsList from '@/components/FriendsList.vue'
import { ref } from 'vue'
import { getPostByUser, type Post } from '@/models/posts'
//import { getOne } from '@/models/user'
import { useRoute } from 'vue-router'
import { getOne, type Summary } from '@/models/summary'

const route = useRoute('/main/[id]')

const posts = ref<Map<Post, Summary>>();
let userPosts = new Map<Post, Summary>();
if(currentUser.value?.user_id){
  const id = route.params.id ? +route.params.id : undefined
  getPostByUser(id as number).then((list) => {
    list.forEach(element => {
      let summary = {} as Summary
      getOne(element.summary_Id).then((result) => {summary = result})
      userPosts.set(element, summary)
    });
  })
  console.log(posts.value)
}
</script>

<template>
  <main>
    <section class="columns pt-5">
      <div class="column is-one-fifth">
        <AddExercise />
      </div>
      <div class="column is-half">
        <div class="container py-3" v-if="posts?.entries" v-for="post in posts.entries">
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
