import { ref } from "vue";
import type { Post } from "./posts";
import type { Summary } from "./summary";
import users from "@/data/users.json";

export interface User {
    userId: number;
    userName: string;
    posts: any[];
    summaries: any[];
    friendsIds: any[];
}

export function getAll() {
    return users
}

export function getOne(id: number){
    return users.users[id]
}
