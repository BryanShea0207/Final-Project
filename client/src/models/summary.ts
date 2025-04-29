import CardioSummary from "@/components/CardioSummary.vue";
import { ref } from "vue";
import { api, post } from "./session";

export interface Summary {
  id?: number;
  name: string;
  note: string;
  type: string;
  user_id: number;
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

export async function getSummaryByUser(id:number): Promise<Summary[]> {
  console.log("Searching for summaries by user " + id)
  return api(`summaries/search/${id}?`)
}

export async function PostSummary(summary:Summary) {
  console.log("Trying to post new summary")
  return post('summaries', summary)
}