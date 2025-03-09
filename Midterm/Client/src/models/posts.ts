import { ref } from 'vue';

export const posts = ref<Post[]>([]);

export class Post { 
    static idCounter = 0;
    content = "";
    author = "";

    constructor(content: string, author: string){
        this.content = content;
        this.author = author;
    }
}