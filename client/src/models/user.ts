import { ref } from "vue";
import type { Post } from "./posts";
import type { Summary } from "./summary";
import users from "@/data/users.json";
import { api } from './session'

export interface User {
    user_id: number;
    first_Name: string;
    last_Name: string;
    email: string;
    phone: string;
    age: number;
    birth_Date: Date;
    friends_Ids: [];
    gender: string;
    role: string;
}

export async function getAll(): Promise<User[]> {
    return api(`users`)
}

export function getOne(id: number): Promise<User>{
    return api(`users/${id}`)
}
