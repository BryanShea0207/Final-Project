import { ref } from "vue";

export const summaries = ref<Summary[]>([]);

export abstract class Summary {
    static idCounter = 0;
    name = "";
    note = new Note("", 0);
    id = 0;

    constructor(name: string, note: string){
        this.name = name;
        this.note = new Note(note,Summary.idCounter);
        this.id = Summary.idCounter++;
    }
}

export class Note {
    text!: string;
    id!: number;

    constructor(text: string, id: number) {
        this.text = text;
        this.id = id;
    }
}

export class WeightSummary extends Summary{
  sets = 0;
  reps = 0;
  weight = 0;
  

  constructor(name: string, sets: number, reps: number, weight: number, note: string) {
    super(name, note);
    this.sets = sets;
    this.reps = reps;
    this.weight = weight;
  }
}

export class CardioSummary extends Summary{
    duration = 0;
    distance = 0;

    constructor(name: string, duration: number, distance: number, note: string) {
      super(name, note);
      this.duration = duration;
      this.distance = distance;
      
    }
}

