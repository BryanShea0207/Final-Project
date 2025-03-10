<script setup lang="ts">
import { Post, posts } from '@/models/posts'
import type { Summary } from '@/models/summary'
import { ref, defineProps } from 'vue'
import { currentUser } from './UserList.vue'

const noteVisable = ref(false)

const props = defineProps<{ summary: Summary }>()

function sharePost() {
  posts.value.push(new Post('', 'John Smith', props.summary))
}
</script>

<template>
  <div class="card-footer has-background-gray-darker">
    <a class="card-footer-item is-button" @click="noteVisable = !noteVisable">View Notes</a>
    <a class="card-footer-item is-button" @click="sharePost()">Share</a>
  </div>
  <div class="card-footer has-background-geay-darker" v-if="noteVisable">
    <div class="card-content">
      <p class="subtitle is-5">
        {{ summary.note }}
      </p>
    </div>
  </div>
</template>

<script lang="ts"></script>
