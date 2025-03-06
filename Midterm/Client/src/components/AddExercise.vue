 <script setup lang="ts">
    function showCardio() {
        const weight = document.getElementById('weight');
        const cardio = document.getElementById('cardio');
        if (weight) {
            weight.classList.add('is-hidden');
        }
        if (cardio) {
            cardio.classList.remove('is-hidden');
        }
    }

    function showWeight() {
        const weight = document.getElementById('weight');
        const cardio = document.getElementById('cardio');
        if (weight) {
            weight.classList.remove('is-hidden');
        }
        if (cardio) {
            cardio.classList.add('is-hidden');
        }
    }
 </script>
 
 <template>
    <div class="box">
        <h1 class="title">Add an Exercise</h1>
        <div class="columns">
            <div class="column">
                <div class="tabs">
                    <ul>
                        <li @click="showWeight" class="is-active"><a>Weight</a></li>
                        <li><a @click="showCardio">Cardio</a></li>
                    </ul>
                </div>
                <div id="weight" class="tab-content">
                <div class="field">
                    <label class="label">Exercise Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Exercise Name">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Sets</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Sets">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Reps</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Reps">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Weight</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Weight">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Rest Time</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Rest Time">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Notes</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Notes"></textarea>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button is-primary">Save</button>
                    </div>
                </div>
                </div>
                <div class="is-hidden tab-content" id="cardio">
                    <div class="field">
                        <label class="label">Exercise Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Exercise Name">
                        </div>
                    </div>
                    <div class="field" >
                        <label class="label">Distance</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Distance">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Time</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Time">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Rest Time</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Rest Time">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Notes</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Notes"></textarea>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <button class="button is-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </template>
 
 <style scoped>
 
 </style>