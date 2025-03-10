<script setup lang="ts">
    import { users } from '@/models/user';
    import { ref } from 'vue';

    const menuToggle = ref(false);
</script>


<template>
    <section>
    <div class="dropdown is-active is-flex is-justify-content-center">
        <div class="dropdown-trigger">
            <button class="button is-large" @click="menuToggle = !menuToggle">
                <span>Users</span>
            </button>
        </div>
        <div class="dropdown-menu has-buttons are-large">
            <div class="dropdown-content is-align-content-center" v-for="user in users" v-show="menuToggle">
                <div class="dropdown-item">
                    <a class="button is-capitalized has-text-centered"> {{ user.userName }}</a>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>