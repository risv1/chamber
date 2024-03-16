<template>
    <div class="w-full h-[12%] flex flex-row p-5 items-center">
      <h1 class="text-4xl text-gray-700 font-bold">{{ title }}</h1>
      <input
        v-model="search"
        v-on:keyup.enter="clearInput"
        type="text"
        :placeholder="`Search ${title}`"
        class="focus:shadow-violet-500 shadow-md p-5 ml-auto text-gray-700 h-2/3 rounded-xl focus:outline-none border-gray-500 placeholder:text-gray-700 border-2"
      />
    </div>
</template>

<script setup lang="ts">
const search = ref("");

const clearInput = () => {
  search.value = "";
};

defineProps({
  title: String,
});
</script>
