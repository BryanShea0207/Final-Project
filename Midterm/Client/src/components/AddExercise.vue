<script setup lang="ts">
import { WeightSummary, CardioSummary } from '@/models/summary'
import { summaries } from '@/models/summary'
import { ref } from 'vue'

const current = ref('weight')

function showCardio() {
  const weight = document.getElementById('weight')
  const cardio = document.getElementById('cardio')
  if (weight) {
    weight.classList.add('is-hidden')
    current.value = 'cardio'
  }
  if (cardio) {
    cardio.classList.remove('is-hidden')
  }
}

function showWeight() {
  const weight = document.getElementById('weight')
  const cardio = document.getElementById('cardio')
  if (weight) {
    weight.classList.remove('is-hidden')
  }
  if (cardio) {
    cardio.classList.add('is-hidden')
    current.value = 'weight'
  }
}


const showInputs = ref(false)
</script>

<template>
  <div class="box mr-0">
    <h1 class="title is-4">
      Add an Exercise
      <a role="button" class="button is-primary" @click="showInputs = !showInputs">
        <span class="icon is-small">
          <i class="fa-solid fa-arrows-up-down"></i>
        </span>
      </a>
    </h1>

    <div class="columns" :class="{ 'is-hidden': !showInputs }">
      <div class="column">
        <div class="tabs">
          <ul>
            <li @click="showWeight" :class="{ 'is-active': current == 'weight' }"><a>Weight</a></li>
            <li @click="showCardio" :class="{ 'is-active': current == 'cardio' }"><a>Cardio</a></li>
          </ul>
        </div>
        <div id="weight" class="tab-content">
          <div class="field">
            <label class="label">Exercise Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Exercise Name" id="weightName" />
            </div>
          </div>
          <div class="field">
            <label class="label">Sets</label>
            <div class="control">
              <input class="input" type="number" placeholder="Sets" id="sets" />
            </div>
          </div>
          <div class="field">
            <label class="label">Reps</label>
            <div class="control">
              <input class="input" type="number" placeholder="Reps" id="reps"/>
            </div>
          </div>
          <div class="field">
            <label class="label">Weight</label>
            <div class="control">
              <input class="input" type="number" placeholder="Weight" id="weight"/>
            </div>
          </div>
          <div class="field">
            <label class="label">Notes</label>
            <div class="control">
              <textarea class="textarea" placeholder="Notes" id="weightNote"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-primary " @click='createWeightSummary()'>Save</button>
            </div>
          </div>
        </div>
        <div class="is-hidden tab-content" id="cardio">
          <div class="field">
            <label class="label">Exercise Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Exercise Name" id="cardioName"/>
            </div>
          </div>
          <div class="field">
            <label class="label">Distance</label>
            <div class="control">
              <input class="input" type="text" placeholder="Distance" id="distance"/>
            </div>
          </div>
          <div class="field">
            <label class="label">Time</label>
            <div class="control">
              <input class="input" type="text" placeholder="Time" id="time"/>
            </div>
          </div>
          <div class="field">
            <label class="label">Notes</label>
            <div class="control">
              <textarea class="textarea" placeholder="Notes" id="cardioNote"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-primary" @click='createCardioSummary()'>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {{ summaries }}
</template>

<script lang="ts">
function createWeightSummary() {
  const weightName = document.getElementById('weightName') as HTMLInputElement
  const weight = document.getElementById('weight') as HTMLInputElement
  const sets = document.getElementById('sets') as HTMLInputElement
  const reps = document.getElementById('reps') as HTMLInputElement
  const notes = document.getElementById('weightNote') as HTMLInputElement

  if (weightName && sets && reps && weight && notes) {
    const summary = new WeightSummary(
      weightName.value, 
      Number(sets.value), 
      Number(reps.value), 
      Number(weight.value), 
      notes.value);
    summaries.value.push(summary)
  }
}

function createCardioSummary() {
  const cardioName = document.getElementById('cardioName') as HTMLInputElement
  const distance = document.getElementById('distance') as HTMLInputElement
  const time = document.getElementById('time') as HTMLInputElement
  const notes = document.getElementById('cardioNote') as HTMLInputElement

  if (cardioName && distance && time && notes) {
    const summary = new CardioSummary(
      cardioName.value, 
      Number(distance.value), 
      Number(time.value),  
      notes.value);
    summaries.value.push(summary)
  }
}
</script>
<style scoped></style>
