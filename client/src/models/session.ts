import { ref } from 'vue'
import * as myFetch from './myFetch'
import * as myPost from './myPost'
import * as myPatch from './myPatch'
import * as myDelete from './myDelete'
import { getOne, type User } from './user'

export function api<T>(action: string): Promise<T> {
  return myFetch.api<T>(action)
}

export function post<T>(action: string, item: T): Promise<T> {
  return myPost.api<T>(action, item)
}

export function remove<T>(action:string): Promise<T>{
  return myDelete.api<T>(action)
}

export function update<T>(action:string, item: object) {
  myPatch.api<T>(action, item)
}

export const emptyUser: User = {
  user_id: -1,
  first_Name: "Signed",
  last_Name: "Out",
  age: -1,
  birth_Date: new Date(),
  email: "",
  gender: "",
  role: "",
  phone: "",
  friends_Ids: []
}

export const currentUser = ref<User>(emptyUser)

export function setCurrentUser(user: User ) {
  currentUser.value = user
}

export function isLoggedIn(): boolean {
  return !(currentUser.value == emptyUser)
}