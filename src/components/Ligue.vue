<template>
    <ul class="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        <li :class="{ active: activeOption === 'cactus' }">
            <button 
                type="button" 
                @click="activate('cactus')" 
                class="mx-auto w-full rounded hover:bg-lightgrey focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-white"
            >
                <div class="shadow px-8 py-6 flex flex-col items-center justify-center">
                    <h3 class="mb-1 leading-5 text-orange dark:text-gray-100 font-supercell font-bold text-2xl">
                        Cactus
                    </h3>
                    <p class="text-beige text-xl tracking-normal font-bold leading-5 mt-3">
                        full hdv 14
                    </p>
                    <p class="text-beige text-lg tracking-normal font-supercell font-normal leading-5 mt-3">
                        Master 1
                    </p>
                </div>
            </button>
        </li>
        <li :class="{ active: activeOption === 'kipik' }">
            <button 
                type="button" 
                @click="activate('kipik')" 
                class="mx-auto w-full rounded hover:bg-lightgrey focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-white"
            >
                <div class="shadow px-8 py-6 flex flex-col items-center justify-center">
                    <h3 class="mb-1 leading-5 text-orange dark:text-gray-100 font-supercell font-bold text-2xl">
                        Kipik
                    </h3>
                    <p class="text-beige text-xl tracking-normal font-bold leading-5 mt-3">
                        full hdv 14
                    </p>
                    <p class="text-beige text-lg tracking-normal font-supercell font-normal leading-5 mt-3">
                        Master 1
                    </p>
                </div>
            </button>
        </li>
        <li :class="{ active: activeOption === 'rose' }">
            <button 
                type="button" 
                @click="activate('rose')" 
                class="mx-auto w-full rounded hover:bg-lightgrey focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-white"
            >
                <div class="shadow px-8 py-6 flex flex-col items-center justify-center">
                    <h3 class="mb-1 leading-5 text-orange dark:text-gray-100 font-supercell font-bold text-2xl">
                        Rose
                    </h3>
                    <p class="text-beige text-xl tracking-normal font-bold leading-5 mt-3">
                        full hdv 14
                    </p>
                    <p class="text-beige text-lg tracking-normal font-supercell font-normal leading-5 mt-3">
                        Master 1
                    </p>
                </div>
            </button>
        </li>
        <li :class="{ active: activeOption === 'paquerette' }">
            <button 
                type="button" 
                @click="activate('paquerette')" 
                class="mx-auto w-full rounded hover:bg-lightgrey focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-white"
            >
                <div class="shadow px-8 py-6 flex flex-col items-center justify-center">
                    <h3 class="mb-1 leading-5 text-orange dark:text-gray-100 font-supercell font-bold text-2xl">
                        Pâquerette
                    </h3>
                    <p class="text-beige text-xl tracking-normal font-bold leading-5 mt-3">
                        full hdv 14
                    </p>
                    <p class="text-beige text-lg tracking-normal font-supercell font-normal leading-5 mt-3">
                        Master 1
                    </p>
                </div>
            </button>
        </li>
        <li :class="{ active: activeOption === 'open' }">
            <button 
                type="button" 
                @click="activate('open')" 
                class="w-full rounded hover:bg-lightgrey focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-white"
            >
                <div class="shadow px-8 py-6 flex items-center justify-center">
                    <p class="font-supercell text-orange text-2xl">
                        Faites de moi ce que vous voulez !
                    </p>
                </div>
            </button>
        </li>
    </ul>
</template>

<script>
export default {
    name:"Ligue",
    props: ['modelValue'],
    emits: ['update:modelValue'],
    data() {
      return {
        activeOption: this.modelValue,
      };
    },
    // computed: {
    //   activeOption() {
    //     return this.activeOption;
    //   }
    // },
    methods: {
        activate(option) {
            this.activeOption = option;
            this.$emit('update:modelValue', option);
        },
    },
}
</script>

<style scoped>
  .active {
    border-color: #db0c14;
  }

  .active button {
    color: #db0c14;
  }
</style>