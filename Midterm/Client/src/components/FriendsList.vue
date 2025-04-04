<script setup lang="ts">
import { currentUser } from './UserList.vue';
import { getOne } from '@/models/user';
</script>

<template>
        <div class="card m-5" v-for="friend in currentUser?.friendsIds">
            <font-awesome-icon :icon="['fas', 'circle-user']" /><p class="is-size-5">{{ getOne(friend).userName }}</p>
        </div>
</template>