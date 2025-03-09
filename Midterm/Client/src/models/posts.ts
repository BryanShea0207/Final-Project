import { ref } from 'vue';
import { Summary, SummaryWeight } from './summary';

export class Post { 
    content = "";
    author = "";
    summary: Summary;
    date = 0;

    constructor(content: string, author: string, summary: Summary){
        this.content = content;
        this.author = author;
        this.summary = summary;
    }

}

export const posts = ref<Post[]>([
    new Post('This is a note', 
        "John Smith", 
        new SummaryWeight("push-up",5,10,10,"3:00") as Summary)]);

