<template>
  <div class="w-full h-full flex flex-col">
    <ContactNav title="Groups" />
    <ContactRow :items="groups" route="groups" />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const groups = [
  { id: 1, name: "Group 1" },
  { id: 2, name: "Group 2" },
  { id: 3, name: "Group 3" },
  { id: 4, name: "Group 4" },
  { id: 5, name: "Group 5" },
  { id: 6, name: "Group 6" },
  { id: 7, name: "Group 7" },
  { id: 8, name: "Group 8" },
  { id: 9, name: "Group 9" },
  { id: 10, name: "Group 10" },
];

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
