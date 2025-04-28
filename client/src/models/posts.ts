import { ref } from 'vue';
import type { Summary, SummaryWeight } from './summary';
import { api } from './session';



export interface Post {
    id: number;
    content: string;
    date: Date;
    summary_Id: number;
    user_Id: number;
}

export async function getAll() : Promise<Post[]>{
    return api("posts")
}

export async function getOne(id: number): Promise<Post>{
    return api(`posts/${id}`)
}

export async function getPostByUser(id:number): Promise<Post[]> {
    return api('/posts/search/${id}?')
}
