<template>
  <div>
    {{ id }}
  </div>
</template>

<script setup lang="ts">
import { io, type Socket } from "socket.io-client";

const route = useRoute();
const { id } = useRoute().params;
const socket = ref<Socket>();

onMounted(async () => {
  const { username, room } = route.query as Partial<{
    username: string
    room: string;
  }>;
  if (!username || !room) {
    navigateTo("/chat");
  }
  socket.value = io({
    path: "/api/socket",
  });
  socket.value.emit("joinRoom", { username, room });
  console.log(username, room);
});
</script>
