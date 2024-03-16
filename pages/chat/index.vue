<template></template>

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
