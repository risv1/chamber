<template>
    <div class="w-screen h-screen gap-5 flex bg-violet-300 flex-row p-5">
        <div class="w-[20%] bg-violet-700 flex flex-col rounded-xl">
            <div class="bg-white w-4/5 flex self-center rounded-xl mt-10 justify-center items-center">
                <h1 class="text-3xl text-violet-700 font-semibold p-5">Chamber</h1>
            </div>
        </div>
        <div class="w-full h-full flex bg-white rounded-xl">
            <slot />
        </div>
    </div>
</template>