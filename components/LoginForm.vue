<template>
  <form class="flex-col justify-center gap-2 items-center flex">
    <h2 class="text-2xl font-semibold mb-3">Login</h2>
    <input
      name="email"
      v-model="email"
      type="email"
      class="focus:outline-none focus:shadow-violet-500 shadow-lg w-full h-12 border-violet-500 border-2 rounded px-4"
      placeholder="Email"
    />
    <input
      name="password"
      v-model="password"
      type="password"
      class="focus:outline-none focus:shadow-violet-500 shadow-lg w-full h-12 border-violet-500 border-2 rounded px-4"
      placeholder="Password"
    />
    <button
      @click="onSubmit($event)"
      class="hover:bg-violet-700 duration-200 ease-in-out w-full h-12 bg-violet-500 text-white rounded mt-4"
    >
      Login
    </button>
  </form>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const { setUser, user } = useAuthStore();

const email = ref("");
const password = ref("");

const onSubmit = async (event: Event) => {
  try {
    event.preventDefault();
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    if (!res.ok) {
      throw createError({
        message: "An error occurred",
        statusCode: res.status,
      });
    }

    const response = await res.json();
    if (response) {
      setUser(response.user)
      navigateTo("/chat")
    }
  } catch (err) {
    console.error(err);
  }
};
</script>
