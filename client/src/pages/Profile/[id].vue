<script setup lang="ts">
import SocialPost from '@/components/SocialPost.vue';
import { getPostByUser, type Post } from '@/models/posts';
import { currentUser, isLoggedIn } from '@/models/session';
import { getUsersWithFriend, getOne, updateFriends, type User } from '@/models/user';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

    const loaded = ref(true)
    const route = useRoute('/Profile/[id]')
    const showingUser = ref<User>()
    const userPosts = ref<Post[]>([])
    const userFriends = ref<User[]>([])

    fetchProfile(Number(route.params.id))

    watch(() => route.params.id,(newId) => {
      fetchProfile(Number(newId));
    })

    function fetchProfile(id: number) {
      loaded.value = false
      getOne(id).then((user) => showingUser.value = user)
      getPostByUser(id).then((posts) => userPosts.value = posts)
      getUsersWithFriend(id).then((friends) => userFriends.value = friends)
      console.log("components loaded")
      loaded.value = true
    }

    function addfrind(){
        if(isLoggedIn()){
            updateFriends(Number(currentUser.value.user_id), Number(route.params.id))
        }
    }
</script>

<template>
    <div class="hero-body" v-if="loaded">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <h1 class="title">
            {{ showingUser?.first_Name + " " + showingUser?.last_Name }}
          </h1>
          <h2 class="subtitle button is-primary has-text-warning" @click="addfrind()">
            Add friend
          </h2>
        </div>
      </div>
    </div>
  </div>
    <div class="columns">
        <div class="container column is-four-fifths">
            <div class="container py-3" v-for="post in userPosts">.
                <SocialPost :post="post" />
            </div>
        </div>
        <div class=" container column is-one-fifth">
          <h2 class="title">People you may know</h2>
            <div class="m-5 friend p-0 m-0" v-for="friend in userFriends">
          <RouterLink :to="`/Profile/${friend.user_id}`">
            <p class="is-size-5"><FontAwesomeIcon :icon="faCircleUser"/> {{ friend.first_Name + " " + friend.last_Name }}</p>
          </RouterLink>
        </div>
        </div>
    </div>
</template>