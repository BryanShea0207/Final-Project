import { ref } from "vue";
import { Post } from "./posts";
import type { Summary } from "./summary";

export class User {
    userName = "";
    posts: Post[] = [];
    summaries: Summary[] = [];
    friends: User[] = [];

    constructor(userName: string){
        this.userName = userName;
    } 

    addSummary(workout: Summary){
        this.summaries.push(workout);
    }

    addPost(post: Post){
        this.posts.push(post);
    }

    addFriend(friend: User){
        this.friends.push(friend);
    }
}

export const users = ref<User[]>([new User("john Smith")]);
