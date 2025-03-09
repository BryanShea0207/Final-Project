import { ref } from "vue";

export const summaries = ref<Summary[]>([]);

export abstract class Summary {
    name = "";
    note = "";
    type = "";

    constructor(name: string, note: string, type: string){
        this.name = name;
        this.note = note;
        this.type = type;
    }
}

export class SummaryWeight extends Summary{
  sets = 0;
  reps = 0;
  weight = 0;
  

  constructor(name: string, sets: number, reps: number, weight: number, note: string) {
    super(name, note, "weight");
    this.sets = sets;
    this.reps = reps;
    this.weight = weight;
  }

  getTotalWeight(): number {
    return this.sets * this.reps * this.weight
  }
}

export class SummaryCardio extends Summary{
    time = 0;
    distance = 0;

    constructor(name: string, time: number, distance: number, note: string) {
      super(name, note, "cardio");
      this.time = time;
      this.distance = distance;
      
    }

    getPace(): String {
      const pace = this.time / this.distance;
      return Math.floor(pace / 60) + '\'' + pace % 60 + '\"';
    }

}

