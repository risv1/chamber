<template>
  <div>
    {{ id }}
  </div>
</template>

<script setup lang="ts">
import { io, type Socket } from "socket.io-client";

type Chat = {
  username: string;
  room: string;
  text: string;
  time: string;
}

definePageMeta({
  layout: "home",
});

const route = useRoute();
const socket = ref<Socket>();
const chats = ref<Chat[]>([])
const users = ref<User[]>([])
const currentRoom = ref<string>("")
const sendMsg = () => {}

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
  socket.value.on("message", (message) => {
    chats.value.push(message);
    console.log(message);
  });
  socket.value.on("roomData", (response: {room: string, listOfUsers: User[]} ) => {
    currentRoom.value = response.room
    users.value = response.listOfUsers
  }); 
  console.log(username, room);
});

onBeforeUnmount(()=>{
  console.log("Disconnecting...")
  socket.value?.disconnect();
})

const { id } = useRoute().params;
</script>
