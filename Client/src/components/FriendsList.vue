<script setup lang="ts">
import { currentUser } from './UserList.vue';
import { getOne } from '@/models/user';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
        <div class="m-5 friend p-0 m-0" v-for="friend in currentUser?.friendsIds">
            <p class="is-size-5"><FontAwesomeIcon :icon="faCircleUser"/> {{ getOne(friend).userName }}</p>
        </div>
</template>

<style>
.friend{
}
</style>