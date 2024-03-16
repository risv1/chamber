<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useAuthStore } from "./store/auth";

const { fetchUser, user } = useAuthStore();

onMounted(() => {
  async function fetching() {
    await fetchUser();

    if (user) {
      console.log("User session:", user);
    }
  }
  fetching();
});
</script>
