<script setup lang="ts">
import type { User } from '@/models/user';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

const props = defineProps<{ friend: User }>()

</script>


<template>
<div class="m-5 friend p-0 m-0">
    <RouterLink :to="`Profile/${props.friend.user_id}`">
      <p class="is-size-5"><FontAwesomeIcon :icon="faCircleUser"/> {{ props.friend.first_Name + " " + props.friend.last_Name }}</p>
    </RouterLink>
  </div>
  </template>