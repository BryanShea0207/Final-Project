import { currentUser } from "@/components/UserList.vue";
import type { Post } from "./posts";

function makeFeed(): Post[] {
    const friendsList = currentUser.value?.friends
    const feed: Post[] = [];
    if (friendsList){
        friendsList.forEach(friend => {
            feed.push(friend.posts);
        });
    }
    if(currentUser.value?.posts){
        feed.concat(currentUser.value?.posts);
    }
    (feed as Post[]).sort((a , b) => a.date.getTime() - b.date.getTime()) 
    return feed
}