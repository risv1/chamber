<template>
    <div class="w-screen h-screen bg-violet-300 flex justify-center items-center">
        <div class="fixed w-20 h-20 rounded-full bg-violet-700 top-20 right-52 shadow-xl shadow-violet-500"></div>
        <div class="w-2/3 h-2/3 flex flex-row border-violet-500 border-4 rounded z-[100] shadow-xl">
            <div class="w-1/2 h-full bg-violet-500 flex flex-col border-r-2 justify-center gap-8 items-center">
                <h1 class="text-5xl font-bold text-white">Chamber</h1>
                <p class="text-2xl font-normal text-white">A simple chat application</p>
            </div>
            <div v-if="select == 'register'" class="w-1/2 h-full flex bg-white flex-col justify-center items-center">
                <RegisterForm />
                <button class="mt-5 hover:underline" @click="onSelect('login')" >Already have an account? Click to login!</button>
            </div>
            <div v-if="select == 'login'" class="w-1/2 h-full flex bg-white flex-col justify-center items-center">
                <LoginForm />
                <button class="mt-5 hover:underline" @click="onSelect('register')" >New user? Click to register!</button>
            </div>
        </div>
        <div class="fixed w-20 h-20 rounded-full bg-gray-300 bottom-20 left-52 shadow-xl shadow-gray-400"></div>
    </div>
</template>

<script setup lang="ts">

    const select = ref('login');

    const onSelect = (value: string) => {
        select.value = value;
    }

</script>