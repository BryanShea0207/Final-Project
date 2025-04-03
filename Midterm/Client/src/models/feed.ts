import { currentUser } from "@/components/UserList.vue";
import type { Post } from "./posts";
import { getAll, getOne } from "./user";

function makeFeed(): Post[] {
    const friendsList = currentUser.value?.friendsIds
    const feed: Post[] = [];
    if (friendsList){
        friendsList.forEach(id => {
            const friend = getOne(id)
            if(friend.posts){
                feed.concat(friend.posts)
            }
        });
    }
    if(currentUser.value?.posts){
        feed.concat(currentUser.value?.posts);
    }
    (feed as Post[]).sort((a , b) => (new Date(a.date)).getTime() -  new Date(b.date).getTime()) 
    return feed
}