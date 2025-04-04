<script setup lang="ts">
import WeightSummary from '@/components/WeightSummary.vue'
import AddExercise from '../components/AddExercise.vue'
import CardioSummary from '../components/CardioSummary.vue'
import SocialPost from '@/components/SocialPost.vue'
import { currentUser } from '@/components/UserList.vue'
import FriendsList from '@/components/FriendsList.vue'
</script>

<template>
  <main>
    <section class="columns pt-5">
      <div class="column is-one-fifth">
        <AddExercise />
      </div>
      <div class="column is-half">
        <div class="container py-3" v-for="post in currentUser?.posts">
          <SocialPost :post="post">
            <WeightSummary v-if="post.summary.type === 'weight'" :data="post.summary">
            </WeightSummary>
            <CardioSummary v-else :data="post.summary"> </CardioSummary>
          </SocialPost>
        </div>
        {{ currentUser?.posts[1] }}
      </div>
      <div class="column" style="height: 100%;">
        <div class="panel p-5" style="height: 100%">
        <FriendsList />
        </div>
      </div>
    </section>
  </main>
</template>
