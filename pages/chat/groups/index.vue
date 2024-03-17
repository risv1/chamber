<template>
  <div class="w-full h-full flex flex-col">
    <ContactNav title="Groups" />
    <ContactRow :user="user!" :items="groups" route="groups" />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const { user } = useAuthStore();

const groups = [
  { id: 1, name: "Group1" },
  { id: 2, name: "Group2" },
  { id: 3, name: "Group3" },
  { id: 4, name: "Group4" },
  { id: 5, name: "Group5" },
  { id: 6, name: "Group6" },
  { id: 7, name: "Group7" },
  { id: 8, name: "Group8" },
  { id: 9, name: "Group9" },
  { id: 10, name: "Group10" },
];

definePageMeta({
  layout: "home",
});
</script>
