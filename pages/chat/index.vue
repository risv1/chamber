<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="flex justify-center items-center flex-col gap-3">
      <h1 class="text-5xl font-semibold text-gray-700">Welcome to Chamber</h1>
      <p class="text-2xl text-gray-500">Start a conversation with your friends</p>
      <div class="flex justify-between w-2/3 flex-row mt-5">
        <button @click="navigateTo(`chat/groups`)" class="bg-violet-500 p-3 rounded-xl text-white font-bold w-[30%] shadow-md shadow-gray-300 hover:shadow-violet-500">Groups</button>
        <button @click="navigateTo(`chat/contacts`)" class="bg-violet-500 p-3 rounded-xl text-white font-bold w-[30%] shadow-md shadow-gray-300 hover:shadow-violet-500">Contacts</button>
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

watchEffect(() => {
  if (!user) {
    console.log("no user", user);
  } else {
    console.log("User found: ", user);
  }
});
</script>
