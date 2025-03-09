<script setup lang="ts">
    import { Post } from '@/models/posts'
    import CardioSummary from './CardioSummary.vue';
import SummaryFooter from './SummaryFooter.vue';
    
    const props = defineProps<{post: Post}>();

    const summary = props.post.summary
</script>

<template>
    <div class="card has-background-grey-darker mx-0">
        <div class="card-content mx-0 px-0">
            <div class="container px-0 mx-0">
                <slot ></slot>
            </div>
        </div>
        <div class="card-content">
            <div class="media">
                <p class="title is-4">{{ post.author}}</p>    
            </div>
            <div class="content">
                <p>{{ post.content }}</p>
                <p>Posted on: {{ post.date }}</p>
                {{  }}
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>