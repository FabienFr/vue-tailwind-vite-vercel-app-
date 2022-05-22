<template>
    <ul class="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        <li :class="{ active: activeOption === 'Cactus' }">
            <button
                type="button"
                @click="activate('Cactus'), cactus()"
                :class="{ 'bg-beige': cactusActive }"
                class="mx-auto w-full rounded focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none"
            >
                <div
                    class="shadow px-8 py-6 flex flex-col items-center justify-center"
                >
                    <h3
                        class="mb-1 leading-5 text-orange font-supercell font-bold text-xl md:text-2xl"
                    >
                        Cactus
                    </h3>
                    <p
                        class="text-beige text-lg md:text-xl tracking-normal font-bold leading-5 mt-3"
                        :class="{ 'text-white': cactusActive }"
                    >
                        full hdv 14
                    </p>
                    <p
                        class="text-beige text-md md:text-lg tracking-normal font-supercell font-normal leading-5 mt-3"
                        :class="{ 'text-white': cactusActive }"
                    >
                        Master 1
                    </p>
                </div>
            </button>
        </li>
        <li :class="{ active: activeOption === 'Agave' }">
            <button
                type="button"
                @click="activate('Agave'), agave()"
                :class="{ 'bg-beige': agaveActive }"
                class="mx-auto w-full rounded focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none"
            >
                <div
                    class="shadow px-8 py-6 flex flex-col items-center justify-center"
                >
                    <h3
                        class="mb-1 leading-5 text-orange font-supercell font-bold text-xl md:text-2xl"
                    >
                        Agave
                    </h3>
                    <p
                        class="text-beige text-lg md:text-xl tracking-normal font-bold leading-5 mt-3"
                        :class="{ 'text-white': agaveActive }"
                    >
                        full hdv 14
                    </p>
                    <p
                        class="text-beige text-md md:text-lg tracking-normal font-supercell font-normal leading-5 mt-3"
                        :class="{ 'text-white': agaveActive }"
                    >
                        Master 1
                    </p>
                </div>
            </button>
        </li>
        <li :class="{ active: activeOption === 'Kipik' }">
            <button
                type="button"
                @click="activate('Kipik'), kipik()"
                :class="{ 'bg-beige': kipikActive }"
                class="mx-auto w-full rounded focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none"
            >
                <div
                    class="shadow px-8 py-6 flex flex-col items-center justify-center"
                >
                    <h3
                        class="mb-1 leading-5 text-orange font-supercell font-bold text-xl md:text-2xl"
                    >
                        Kipik
                    </h3>
                    <p
                        class="text-beige text-lg md:text-xl tracking-normal font-bold leading-5 mt-3"
                        :class="{ 'text-white': kipikActive }"
                    >
                        full hdv 14
                    </p>
                    <p
                        class="text-beige text-md md:text-lg tracking-normal font-supercell font-normal leading-5 mt-3"
                        :class="{ 'text-white': kipikActive }"
                    >
                        Master 2
                    </p>
                </div>
            </button>
        </li>
        <li :class="{ active: activeOption === 'Rose' }">
            <button
                type="button"
                @click="activate('Rose', rose())"
                :class="{ 'bg-beige': roseActive }"
                class="mx-auto w-full rounded focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none"
            >
                <div
                    class="shadow px-8 py-6 flex flex-col items-center justify-center"
                >
                    <h3
                        class="mb-1 leading-5 text-orange focus:opacity-100 font-supercell font-bold text-xl md:text-2xl"
                    >
                        Rose
                    </h3>
                    <p
                        class="text-beige text-lg md:text-xl tracking-normal font-bold leading-5 mt-3"
                        :class="{ 'text-white': roseActive }"
                    >
                        mixte hdv 13 / 14
                    </p>
                    <p
                        class="text-beige text-md md:text-lg tracking-normal font-supercell font-normal leading-5 mt-3"
                        :class="{ 'text-white': roseActive }"
                    >
                        Master 3
                    </p>
                </div>
            </button>
        </li>
        <li :class="{ active: activeOption === 'Paquerette' }">
            <button
                type="button"
                @click="activate('Paquerette'), paquerette()"
                :class="{ 'bg-beige': paqueretteActive }"
                class="mx-auto w-full rounded focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none"
            >
                <div
                    class="shadow px-8 py-6 flex flex-col items-center justify-center"
                >
                    <h3
                        class="mb-1 leading-5 text-orange font-supercell font-bold text-xl md:text-2xl"
                    >
                        Pâquerette
                    </h3>
                    <p
                        class="text-beige text-lg md:text-xl tracking-normal font-bold leading-5 mt-3"
                        :class="{ 'text-white': paqueretteActive }"
                    >
                        mixte hdv 9 à 14
                    </p>
                    <p
                        class="text-beige text-md md:text-lg tracking-normal font-supercell font-normal leading-5 mt-3"
                        :class="{ 'text-white': paqueretteActive }"
                    >
                        Cristal 3
                    </p>
                </div>
            </button>
        </li>
        <li :class="{ active: activeOption === '-' }">
            <button
                type="button"
                @click="activate('-'), open()"
                :class="{ 'bg-beige': openActive }"
                class="mx-auto w-full rounded focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none"
            >
                <div class="shadow px-8 py-6 flex items-center justify-center">
                    <p class="font-supercell text-orange text-xl md:text-2xl">
                        Faites de moi ce que vous voudrez !
                    </p>
                </div>
            </button>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Ligue',
    props: ['modelValue'],
    emits: ['update:modelValue'],
    data() {
        return {
            activeOption: this.modelValue,
            cactusActive: false,
            kipikActive: false,
            roseActive: false,
            paqueretteActive: false,
            agaveActive: false,
            openActive: false,
        }
    },
    // computed: {
    //   activeOption() {
    //     return this.activeOption;
    //   }
    // },
    methods: {
        activate(option) {
            this.activeOption = option
            this.$emit('update:modelValue', option)
        },
        cactus() {
            this.cactusActive = !this.cactusActive
            this.agaveActive = false
            this.kipikActive = false
            this.roseActive = false
            this.paqueretteActive = false
            this.openActive = false
        },
        agave() {
            this.cactusActive = false
            this.agaveActive = !this.agaveActive
            this.kipikActive = false
            this.roseActive = false
            this.paqueretteActive = false
            this.openActive = false
        },
        kipik() {
            this.cactusActive = false
            this.agaveActive = false
            this.kipikActive = !this.kipikActive
            this.roseActive = false
            this.paqueretteActive = false
            this.openActive = false
        },
        rose() {
            this.cactusActive = false
            this.agaveActive = false
            this.kipikActive = false
            this.roseActive = !this.roseActive
            this.paqueretteActive = false
            this.openActive = false
        },
        paquerette() {
            this.cactusActive = false
            this.agaveActive = false
            this.kipikActive = false
            this.roseActive = false
            this.paqueretteActive = !this.paqueretteActive
            this.openActive = false
        },
        open() {
            this.cactusActive = false
            this.agaveActive = false
            this.kipikActive = false
            this.roseActive = false
            this.paqueretteActive = false
            this.openActive = !this.openActive
        },
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
