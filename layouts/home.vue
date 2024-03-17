<template>
  <div class="w-screen h-screen gap-5 flex bg-violet-300 flex-row p-5">
    <Sidebar />
    <div class="w-[35%] h-full flex flex-col gap-5">
      <input
        class="placeholder:text-gray-700 w-full h-[8%] bg-white rounded-3xl text-xl p-5 shadow-gray-400 focus:outline-none focus:shadow-violet-500 shadow-md"
        placeholder="Search"
      />
      <div
        class="w-full h-[40%] bg-white rounded-3xl shadow-gray-500 hover:shadow-violet-500 shadow-md overflow-y-scroll"
      >
        <h1 class="text-2xl text-gray-700 font-semibold p-5">Groups</h1>
        <div
          class="w-full h-full flex items-center flex-col gap-2"
        >
          <div
            v-for="group in groups"
            class="w-11/12 h-[20%] border-b-2 border-gray-300 justify-between flex flex-row items-center"
          >
            <img
              :width="60"
              :height="60"
              class="bg-gray-300 rounded-full"
              src=""
              alt="Pfp"
            />
            <p class="pr-12">Name: {{ group.name }}</p>
            <button
            @click="navigateTo(`/chat/groups/${group.id}?username=${user?.name}&room=${group.name.toLowerCase()}`)"
              class="p-2 bg-violet-500 rounded-xl text-white hover:shadow-gray-400 shadow-md"
            >
              Open
            </button>
          </div>
        </div>
      </div>
      <div
        class="w-full h-[50%] bg-white rounded-3xl shadow-gray-500 hover:shadow-violet-500 shadow-md overflow-y-scroll"
      >
        <h1 class="text-2xl text-gray-700 font-semibold p-5">Contacts</h1>
        <div
          class="w-full h-full flex items-center flex-col gap-2"
        >
          <div
            v-for="contact in contacts"
            class="w-11/12 h-[20%] border-b-2 border-gray-300 justify-between flex flex-row items-center"
          >
            <img
              :width="60"
              :height="60"
              class="bg-gray-300 rounded-full"
              src=""
              alt="Pfp"
            />
            <p class="pr-12">Name: {{ contact.name }}</p>
            <button
            @click="navigateTo(`/chat/contacts/${contact.id}username=${user?.name}&room=${contact.name.toLowerCase()}`)"
              class="p-2 bg-violet-500 rounded-xl text-white hover:shadow-gray-400 shadow-md"
            >
              Open
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full h-full flex bg-white rounded-xl shadow-md shadow-gray-400"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth';

const { user } = useAuthStore();

const groups = [
  { id: 1, name: "Group1" },
  { id: 2, name: "Group2" },
  { id: 3, name: "Group3" },
  { id: 4, name: "Group4" },
  { id: 5, name: "Group5" },
];

const contacts = [
  { id: 1, name: "Contact1" },
  { id: 2, name: "Contact2" },
  { id: 3, name: "Contact3" },
  { id: 4, name: "Contact4" },
  { id: 5, name: "Contact5" },
];


</script>
