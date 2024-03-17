<template>
  <div class="w-full h-full overflow-x-hidden">
    <div class="h-fit mt-auto items-center justify-center">
      <div
        v-for="item in items"
        class="flex h-full w-full items-center justify-center"
      >
        <div
          class="flex flex-row p-3 justify-between border-gray-600 flex items-center justify-between border-b-2 w-11/12 h-22"
        >
          <img
            :width="80"
            :height="80"
            class="bg-gray-300 rounded-full"
            src=""
            alt="Icon"
          />
          <p class="text-gray-700 text-2xl font-semibold pr-5">
            Name: <span class="pl-5 text-violet-700">{{ item.name }}</span>
          </p>
          <button
            @click="navigateTo(`${route}/${item.id}?username=${user?.name}&room=${item.name.toLowerCase()}`)"
            class="p-3 bg-violet-500 text-white text-xl rounded-xl"
          >
            Open
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  user: Object,
  items: Array<{ id: number; name: String}>,
  route: String
});
</script>
