<script setup lang="ts">
import { postPost, type Post } from '@/models/posts'
import type { Summary } from '@/models/summary'
import { ref, defineProps } from 'vue'
import { currentUser } from '@/models/session'

const noteVisable = ref(false)
const sharing = ref(false)

const props = defineProps<{ summary: Summary }>()

function sharePost() {
  if (currentUser?.value) {
    let newPost: Post = {
      content: (document.getElementById('postContent') as HTMLInputElement).value,
      user_Id: currentUser.value.user_id as number,
      summary_Id: props.summary.id || 0,
      date: new Date()
    }

    postPost(newPost)
  }
  ;(document.getElementById('postContent') as HTMLInputElement).value = ''
}
</script>

<template>
  <div class="card-footer has-background-gray-darker">
    <a class="card-footer-item is-button" @click="noteVisable = !noteVisable">View Notes</a>
    <a class="card-footer-item is-button" @click="sharing = !sharing">Share</a>
  </div>
  <div class="card-footer has-background-gray-darker" v-if="noteVisable">
    <div class="card-content">
      <p class="subtitle is-5">
        {{ summary.note }}
      </p>
    </div>
  </div>
  <div class="card-footer has-background-gray-darker" v-if="sharing">
    <div class="container m-2">
      <label class="label">Post</label>
      <div class="container">
        <textarea
          class="textarea"
          placeholder="Tell us about your workout"
          id="postContent"
        ></textarea>
        <RouterLink :to="`/Home`" @click="sharePost()">
          <button class="button is-primary">Submit</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>
