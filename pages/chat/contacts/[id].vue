<template>
  <div class="w-full h-full flex flex-col">
    <div class="w-full h-full flex flex-col gap-3 justify-center mt-10">
      <div v-for="chat in chats" class="flex">
          <div v-if="chat.username = 'admin'" class="mr-auto pl-10 w-fit p-3 bg-violet-500 border-2 border-gray-400 text-xl font-bold text-white">
            {{ chat.username }}: {{ chat.text }} - {{ chat.time }}
          </div>
          <div v-else-if="chat.username = user?.name!" class="ml-auto pr-10 bg-gray-200 border-2 border-violet-500">
            <p class="text-xl font-bold text-violet-500">{{ chat.username }}: {{ chat.text }} <span class="ml-auto mt-auto text-base text-gray-300">{{ chat.time }}</span></p>
          </div>
          <div v-else class="mr-auto pl-10 bg-white border-2 border-violet-500">
            <p class="text-xl font-bold text-violet-500">{{ chat.username }}: {{ chat.text }} <span class="ml-auto mt-auto text-base text-gray-300">{{ chat.time }}</span></p>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { io, type Socket } from "socket.io-client";
import { useAuthStore } from "~/store/auth";

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
const { user } = useAuthStore()

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
