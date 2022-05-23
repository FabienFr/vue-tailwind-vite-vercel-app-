<template>
    <div>
        <h1
            class="hidden sm:block font-supercell text-2xl md:text-4xl font-bold mt-16 mb-8 text-center text-bordeaux"
        >
            {{ title }}
        </h1>

        <!-- 
        <img alt="Leagues logo" class="mx-auto my-12" src="../assets/Trophy_Leagues_Main_Banner.webp" /> -->

        <h2
            class="mt-32 font-supercell text-2xl md:text-3xl font-bold mb-8 text-center text-bordeaux"
        >
            {{ subtitle }}
        </h2>

        <h3
            class="font-supercell text-2xl md:text-3xl font-bold mt-12 mb-8 mr-6 text-center text-bordeaux"
        >
            {{ period }}
        </h3>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    title: String,
    subtitle: String,
    period: String,
})
</script>
