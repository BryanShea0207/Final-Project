<script setup lang="ts">
import AddExercise from '@/components/AddExercise.vue'
import FriendsList from '@/components/FriendsList.vue'
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
        <FriendsList />
      </div>
    </section>
  </main>
</template>