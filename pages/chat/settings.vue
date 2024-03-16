<template>
    <div class="w-full h-full flex p-5">
        <div class="w-full h-full flex flex-col items-center justify-center">
            <h1 class="text-4xl font-bold text-gray-700 mt-5 mb-10">Settings</h1>
            <div class="flex flex-col gap-5 mb-10">
                <p class="text-2xl font-semibold text-gray-500">Name: <span class="text-violet-500 pl-10"> {{ name }}</span></p>
                <p class="text-2xl font-semibold text-gray-500">Email: <span class="text-violet-500 pl-10"> {{ email }}</span></p>
            </div>
            <div class="flex flex-row gap-5 w-1/3">
                <button @click="navigateTo('/chat')" class="bg-violet-500 hover:bg-violet-700 duration-150 ease-in-out rounded-xl p-3 w-[50%] text-white font-semibold ">Chat</button>
                <button @click="logout" class="bg-red-500 hover:bg-red-700 duration-150 ease-in-out rounded-xl p-3 w-[50%] text-white font-semibold ">Logout</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

definePageMeta({
  layout: "home",
});
const { user } = useAuthStore();

const email = ref('');
const name = ref('');

if(user){
    email.value = user.email;
    name.value = user.name;
    console.log(email.value, name.value)
}

async function logout() {
    try{
        const res = await fetch("http://localhost:3000/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (res.ok) {
            console.log("Logged out");
             navigateTo("/");
        }
    } catch(err){
        console.log(err);
    }
}

</script>