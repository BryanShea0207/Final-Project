import CardioSummary from "@/components/CardioSummary.vue";
import { ref } from "vue";
import { api } from "./session";

export interface Summary {
  name: string;
  note: string;
  type: string
}

export interface SummaryWeight extends Summary {
  sets: number;
  reps: number;
  weight: number;
}

export interface SummaryCardio extends Summary {
  time: number;
  distance: number;
}

export async function getOne(id:number): Promise<Summary> {
  return api(`/summaries/${id}`)
} 