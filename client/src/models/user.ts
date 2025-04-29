import { ref } from "vue";
import type { Post } from "./posts";
import type { Summary } from "./summary";
import users from "@/data/users.json";
import { api, remove } from './session'

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
    let str = 'users'
    console.log("getting all " + str)

    return api(str)
}

export async function getOne(id: number): Promise<User>{
    return api(`users/${id}`)
}

export async function deleteUser(id:number) {
    return remove(`users/${id}`)
}