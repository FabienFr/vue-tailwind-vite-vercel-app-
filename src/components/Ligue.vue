<template>
    <ul class="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        <li :class="{ active: activeOption === 'Cactus' }">
            <button 
                type="button" 
                ontouchstart=""
                style="-webkit-tap-highlight-color: rgba(0,0,0,0);"
                @click="activate('Cactus'), activation()" 
                :class="{ 'focus:bg-orange focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-opacity-50 active:bg-rouge': isActive  }"
                class="mx-auto w-full rounded hover:bg-lightgrey "            >
                <div class="shadow px-8 py-6 flex flex-col items-center justify-center">
                    <h3 class="mb-1 leading-5 text-orange font-supercell font-bold text-2xl">
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
        <li :class="{ active: activeOption === 'Kipik' }">
            <button 
                type="button"
                ontouchstart="" 
                style="-webkit-tap-highlight-color: rgba(0,0,0,0);"
                @click="activate('Kipik'), activation()" 
                :class="{ 'focus:bg-orange focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-opacity-50 active:bg-rouge': isActive  }"
                class="mx-auto w-full rounded hover:bg-lightgrey "            >
                <div class="shadow px-8 py-6 flex flex-col items-center justify-center">
                    <h3 class="mb-1 leading-5 text-orange font-supercell font-bold text-2xl">
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
        <li :class="{ active: activeOption === 'Rose' }">
            <button 
                type="button" 
                ontouchstart=""
                style="-webkit-tap-highlight-color: rgba(0,0,0,0);"
                @click="activate('Rose', activation())" 
                :class="{ 'focus:bg-orange focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-opacity-50 active:bg-rouge': isActive  }"
                class="mx-auto w-full rounded hover:bg-lightgrey "            >
                <div class="shadow px-8 py-6 flex flex-col items-center justify-center">
                    <h3 class="mb-1 leading-5 text-orange focus:text-rouge focus:opacity-100 font-supercell font-bold text-2xl">
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
        <li :class="{ active: activeOption === 'Paquerette' }">
            <button 
                type="button" 
                ontouchstart=""
                style="-webkit-tap-highlight-color: rgba(0,0,0,0);"
                @click="activate('Paquerette'), activation()" 
                :class="{ 'focus:bg-orange focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-opacity-50 active:bg-rouge': isActive  }"
                class="mx-auto w-full rounded hover:bg-lightgrey "
            >
                <div class="shadow px-8 py-6 flex flex-col items-center justify-center">
                    <h3 class="mb-1 leading-5 text-orange font-supercell font-bold text-2xl">
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
        <li :class="{ active: activeOption === '-' }">
            <button 
                type="button" 
                ontouchstart=""
                style="-webkit-tap-highlight-color: rgba(0,0,0,0);"
                @click="activate('-'), activation()" 
                :class="{ 'focus:bg-orange focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-opacity-50 active:bg-rouge': isActive  }"
                class="mx-auto w-full rounded hover:bg-lightgrey "
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
        isActive: false
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
        activation() {
          this.isActive = !this.isActive
          console.log(this.isActive)
        }
    },
}
</script>

<style scoped>
  /* .active {
    border-color: #db0c14;
  }

  .active button {
    color: #db0c14;
  } */
</style>