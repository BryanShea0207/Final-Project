import { ref } from "vue";
import type { Post } from "./posts";
import type { Summary } from "./summary";
import users from "@/data/users.json";
import { api, post, remove, update } from './session'

export interface User {
    user_id?: number;
    first_Name: string;
    last_Name: string;
    email: string;
    phone: string;
    age: number;
    birth_Date: Date;
    friends_Ids: number[];
    gender: string;
    role?: string;
}

export async function getAll(): Promise<User[]> {
    return api("users")
}

export async function getOne(id: number): Promise<User>{
    return api(`users/${id}`)
}

export async function getFriendsOfUser(id: number): Promise<User[]> {
    const friends = await getOne(id).then((user) => {
        let friends: User[] = []
        user.friends_Ids.forEach((friend) =>{
            getOne(friend).then((friend) => friends.push(friend))
        })
        return friends
    })
    return friends
}

export async function getUsersWithFriend(id: number): Promise<User[]> {
    return api(`users/search/${id}?`)
}

export async function deleteUser(id:number) {
    return remove(`users/${id}`)
}

export async function postUser(newUser: User) {
    return post('users/',newUser)
}

export async function updateFriends(id:number, friendId: number) {
    const currentList = (await getOne(id)).friends_Ids
    currentList.push(friendId)
    return update(`users/${id}`, {"friends_Ids": currentList})
}

