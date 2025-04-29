<script setup lang="ts">
import { getOne, getPostByUser, type Post } from '@/models/posts';
import { onMounted, ref } from 'vue';
import SocialPost  from './SocialPost.vue'
import { currentUser } from './UserList.vue';

const loaded = ref(false)
const posts = ref<Post[]>([])

const fetchData = async () => {
  
  try {
    const response = await getPosts();
    response.forEach((post) => {
        posts.value.push(post)
    })  
  } finally {
    loaded.value = true;
  }
};

onMounted(fetchData)
</script>

<script lang="ts">
async function getPosts(): Promise<Post[]>{
    let userPosts: Post[] = []
    if(currentUser.value){
        const userId = currentUser.value.user_id
        console.log("getting posts for user_ID " + userId)
        const posts = await getPostByUser(userId)
        console.log(posts)
        userPosts = posts
    }
    return userPosts
}
</script>

<template>
    <main v-if="loaded">
        <div class="container py-3" v-for="post in posts">.
            <SocialPost :post="post" >
            </SocialPost>
        </div>
    </main>
    <main v-else>
        NO Posts to show
    </main>
</template>