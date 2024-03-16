<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useAuthStore } from "./store/auth";

watchEffect(() => {
  async function fetching() {
    const { fetchUser, user } = useAuthStore();

    await fetchUser();

    console.log(user);
  }
  fetching()
});
</script>
