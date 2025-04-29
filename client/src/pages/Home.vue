<script setup lang="ts">
import WeightSummary from '@/components/WeightSummary.vue'
import AddExercise from '@/components/AddExercise.vue'
import CardioSummary from '@/components/CardioSummary.vue'
import SocialPost from '@/components/SocialPost.vue'
import { currentUser } from '@/components/UserList.vue'
import FriendsList from '@/components/FriendsList.vue'
import { ref, type Ref } from 'vue'
import { getPostByUser, type Post } from '@/models/posts'
import { useRoute } from 'vue-router'
import SocialFeed from '@/components/SocialFeed.vue'

</script>

<template>
  <main>
    <section class="columns pt-5">
      <div class="column is-one-fifth">
        <AddExercise />
      </div>
      <div class="column is-half">
        <SocialFeed/>
      </div>
      <div class="column" style="height: 100%;">
        <div class="panel p-5" style="height: 100%">
        <FriendsList />
        </div>
      </div>
    </section>
  </main>
</template>