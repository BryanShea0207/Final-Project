<script setup lang="ts">
import { getPostByUser, type Post } from '@/models/posts'
import { ref } from 'vue'
import SocialPost  from './SocialPost.vue'
import { currentUser } from '@/models/session'

const posts = ref<Post[]>([])

getPosts().then((feedPosts) => posts.value = feedPosts)
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

        const userId = currentUser.value.user_id
        const posts = await getPostByUser(userId as number)

        posts.forEach((post) => {
            friendsPosts.push(post)
        })
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
    <main>
        <div class="container py-3" v-for="post in posts">.
            <SocialPost :post="post" >
            </SocialPost>
        </div>
    </main>
</template>