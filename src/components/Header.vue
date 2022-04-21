<template>
    <h3 class="font-supercell text-3xl font-bold mt-12 mb-8 text-center">{{ period }}</h3>

    <img alt="Leagues logo" class="mx-auto my-12" src="../assets/Trophy_Leagues_Main_Banner.webp" />

    <h1 class="font-supercell text-4xl font-bold mb-8 text-center">{{ title }}</h1>

    <h2 class="font-supercell text-2xl font-bold mb-8 text-center">{{ subtitle }}</h2>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    title: String,
    subtitle: String,
    period: String,
})
</script>
