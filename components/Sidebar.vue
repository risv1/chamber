<template>
  <div class="w-[10%] bg-violet-700 flex flex-col rounded-xl pt-5">
    <div
      class="bg-white w-4/5 flex self-center rounded-xl justify-center items-center"
    >
      <h1 class="text-xl text-violet-700 font-semibold p-5">Chamber</h1>
    </div>
    <div v-for="icon in icons" class="flex justify-center p-2 mt-[25%]">
      <img
        class="w-[35%] hover:cursor-pointer"
        :key="icon.id"
        :src="icon.icon"
        alt="Icon"
        @click="navigateTo(`${icon.path}`)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const icons = [
  { id: 1, icon: "/chat/home.svg", path: "/chat" },
  { id: 2, icon: "/chat/groups.svg", path: "/chat/groups" },
  { id: 3, icon: "/chat/message.svg", path: "/chat/contacts" },
  { id: 4, icon: "/chat/settings.svg", path: "/chat/settings" },
];
</script>
