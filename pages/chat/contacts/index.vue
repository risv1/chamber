<template>
  <div class="w-full h-full flex flex-col">
    <ContactNav title="Contacts" />
    <ContactRow :items="contacts" route="contacts" />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const contacts = [
  { id: 1, name: "Contact 1" },
  { id: 2, name: "Contact 2" },
  { id: 3, name: "Contact 3" },
  { id: 4, name: "Contact 4" },
  { id: 5, name: "Contact 5" },
  { id: 6, name: "Contact 6" },
  { id: 7, name: "Contact 7" },
  { id: 8, name: "Contact 8" },
  { id: 9, name: "Contact 9" },
  { id: 10, name: "Contact 10" },
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
