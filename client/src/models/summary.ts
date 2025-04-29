import CardioSummary from "@/components/CardioSummary.vue";
import { ref } from "vue";
import { api, post } from "./session";

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

export async function getOneSummary(id:number): Promise<Summary> {
  return api(`summaries/${id}`)
} 

export async function PostSummary(summary:Summary) {
  console.log("Trying to post new summary")
  return post('summaries', summary)
}