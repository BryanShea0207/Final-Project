import { ref } from "vue";
import type { Post } from "./posts";
import type { Summary } from "./summary";
import users from "@/data/users.json";

export interface User {
    userId: number;
    username: string;
    postID: Post[];
    summary: Summary[];
    friendID: number[];
}

export function getAll() {
    return users
}

export function getOne(id: number){
    return users.users.filter((user) => user.userId == id)
}
