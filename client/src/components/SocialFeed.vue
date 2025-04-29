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
    let friendsPosts: Post[] = []
    if(currentUser.value){
        for(let id of currentUser.value.friends_Ids){
            const idPosts = await getPostByUser(id)
            
            idPosts.forEach((post) => {
                friendsPosts.push(post)
            })
        }
        console.log(friendsPosts)

        const userId = currentUser.value.user_id
        console.log("getting posts for user_ID " + userId)
        const posts = await getPostByUser(userId)
        posts.forEach((post) => {
            friendsPosts.push(post)
        })
        console.log(friendsPosts)
    }
    friendsPosts.sort((a,b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)

        return dateB.getTime() - dateA.getTime()
    })
    
    return friendsPosts
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