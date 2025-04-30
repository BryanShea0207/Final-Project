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
        <div class="panel p-5" style="height: 100%">
          <Suspense>
            <FriendsList />
          </Suspense>
        </div>
      </div>
    </section>
  </main>
</template>