<script setup lang="ts">
import { currentUser } from '@/components/UserList.vue';
import { getOne, postUser, type User } from '@/models/user';
import router from '@/router';
import { ref } from 'vue';

const invalidInput = ref(false)


async function makeUser() {
    let values: string[] | number[] = []
    const inputElements = document.getElementsByClassName("input");
    
    for(let element of inputElements){
         (values as string[]).push((element as HTMLInputElement).value)
    }
    
    const valueCheck = checkInputs(values)
    if(valueCheck){
        const birth_Date = new Date(values[6])
        invalidInput.value = false
        const newUser: User = {
            first_Name: (values[0]) as string,
            last_Name: values[1] as string,
            gender: values[2] as string,
            age: values[3] as number,
            email: values[4] as string,
            phone: values[5] as string,
            birth_Date: birth_Date,
            friends_Ids: []
        }
        postUser(newUser).then((newUser) => {
            console.log("New User Created")
            currentUser.value = newUser
        })
        
        
    }else{
        invalidInput.value = true
    }
}

function checkInputs(values: string[] | number[]): boolean{
    if(values.length != 7){
        return false
    }
    
    for(let value of values){
        if((value as string).length == 0){
            return false
        }
    }

    if(/\d/.test(values[0] as string) || 
        /\d/.test(values[1] as string) || 
        /\d/.test(values[2] as string) || 
        !(/\d/.test(values[3] as string)) || 
        !(/\d/.test(values[5] as string))){
        return false
    }

    if(!((values[4] as string).includes("@"))){
        return false
    }

    
    const dataComponents = (values[6] as string).split("/")
    if(dataComponents[0] == (values[6] as string) || 
        dataComponents.length != 3 ||
        Number(dataComponents[0]) > 12 ||
        Number(dataComponents[1]) > 31 ||
        Number(dataComponents[2]) > 2025){
        return false
    }

    

    return true
}
</script>

<template>
    <div class="notification is-Danger m-5" v-if="invalidInput">
        <h1 class="title is-3 has-text-centered my-3">Plase enter valid data</h1>
        <button class="delete" @click="invalidInput = false"></button>
    </div>
    <h1 class="title is-2 has-text-centered my-3">Sign Up</h1>
<div class="form py-5">  
    <div class="columns">
        <div class="column is-half is-offset-one-quarter">
            <div class="box mr-0 has-background-grey-darker">
                <div class="field">
                    <div class="container is-flex">
                        <div class="field pr-5">
                            <label class="label">First Name</label>
                            <div class="control is-flex">
                                <input class="input" type="text" placeholder="John" id="firstName" />
                            </div>
                        </div>
                        <div class="field px-5">
                            <label class="label">Last Name</label>
                            <div class="control is-flex">
                                <input class="input" type="text" placeholder="Smith" id="lastName"/>
                            </div>
                        </div>
                        <div class="field px-5">
                            <label class="label">Gender</label>
                            <div class="control is-flex">
                                <input class="input" type="text" placeholder="Male" id="gender"/>
                            </div>
                        </div>
                        <div class="field px-5">
                            <label class="label">Age</label>
                            <div class="control is-flex">
                                <input class="input" type="number" placeholder="25" id="age"/>
                            </div>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control is-flex">
                            <input class="input" type="text" placeholder="name@domain.com" id="email" />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Phone Number</label>
                        <div class="control is-flex">
                            <input class="input" type="text" placeholder="+1 (234) 567-8910" id="phone" />
                        </div>
                    </div>

                    <div class="field">
                        <label class="labrl">Birthdate</label>
                        <div class=" constrol is-flex">
                            <input class="input" type="text" placeholder="01/01/2000" id="birthdate" />
                        </div>
                    </div>
                    
                    <div class="field">
                        <div class="control">
                            <RouterLink to="/Home"><button class="button is-primary" @click="makeUser()">Create Account</button></RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>