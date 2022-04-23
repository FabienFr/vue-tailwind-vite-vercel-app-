<template>
    <div class="container mx-auto">
        <form>
            <section
                class="w-full mt-10 pt-5 px-5 p-6 hover:shadow-lg hover:bg-lightgrey rounded-xl"
            >
                <h1 class="font-supercell text-2xl text-gray-700 py5 text-rouge">
                    Compte
                </h1>
                <h2
                    class="font-supercell text-md text-gray-700 py5 mt-6 text-orange"
                >
                    Pseudo
                </h2>
                <div class="container mx-auto">
                    <input
                        class="mx-auto my-5 w-full border border-orange pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-rouge text-orange"
                        v-model="pseudo"
                    />
                    <!-- <option v-for="item in liste" :key="item.id">
                            {{ item.pseudo }}
                        </option> -->
                </div>
                <div>
                    <div class="items-left justify-center w-full mb-6">
                        <label
                            for="toogleA"
                            class="flex items-center cursor-pointer"
                        >
                            <!-- toggle -->
                            <div class="relative">
                                <!-- input -->
                                <input
                                    id="toogleA"
                                    type="checkbox"
                                    class="sr-only"
                                    v-model="toggleNewPseudo"
                                />
                                <!-- line -->
                                <div
                                    class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                                ></div>
                                <!-- dot -->
                                <div
                                    class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"
                                ></div>
                            </div>
                            <!-- label -->
                            <div class="ml-3 text-orange font-medium">
                                Mon pseudo n'est pas dans la liste
                            </div>
                        </label>
                    </div>
                    <div v-if="toggleNewPseudo">
                        <p
                            class="font-supercell text-md text-gray-700 py5 mt-2 text-orange"
                        >
                            Ajouter mon pseudo
                        </p>
                        <input
                            v-model="newPseudo"
                            class="mx-auto my-5 w-full border border-orange dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-orange text-orange bg-transparent dark:text-gray-100"
                        />
                    </div>
                </div>
                <div
                    v-if="pseudo || newPseudo"
                    class="w-full pt-2"
                >
                    <h1
                        class="font-supercell text-md text-gray-700 text-orange"
                    >
                        Hdv
                    </h1>
                    <div class="container mx-auto">
                        <div class="container mx-auto">
                            <select
                                @input="toggleInput"
                                v-model="hdv"
                                class="mx-auto mt-5 w-full border border-orange dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-orange text-orange bg-transparent dark:text-gray-100"
                                required
                            >
                                <option>Hdv 14</option>
                                <option>Hdv 13</option>
                                <option>Hdv 12</option>
                                <option>Hdv 11</option>
                                <option>Hdv 10</option>
                                <option>Hdv 09</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    </div>

    <div v-if="hdv" class="container mx-auto">
        <section
            class="w-full my-10 pt-5 px-5 p-6 hover:shadow-lg hover:bg-lightgrey rounded-xl"
        >
            <h1 class="font-supercell text-lg mb-5 text-rouge">
                Niveau de league souhaité
            </h1>
            <div class="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-8">
                <button
                    value="cactus"
                    @click.prevent="addChoice"
                    aria-label="card 1"
                    class="rounded hover:bg-lightgrey focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-white"
                >
                    <div
                        class="shadow px-8 py-6 flex items-center justify-center"
                    >
                        <div>
                            <h3
                                class="mb-1 leading-5 text-orange dark:text-gray-100 font-supercell font-bold text-2xl"
                            >
                                Cactus
                            </h3>
                            <p
                                class="text-beige text-xl tracking-normal font-bold leading-5 mt-3"
                            >
                                full hdv14
                            </p>
                            <p
                                class="text-beige text-lg tracking-normal font-supercell font-normal leading-5 mt-3"
                            >
                                Master 1
                            </p>
                        </div>
                    </div>
                </button>
                <button
                    value="kipik"
                    @click.prevent="addChoice"
                    aria-label="card 2"
                    class="rounded hover:bg-lightgrey focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-white"
                >
                    <div
                        class="shadow px-8 py-6 flex items-center justify-center"
                    >
                        <div>
                            <h3
                                class="mb-1 leading-5 text-orange dark:text-gray-100 font-supercell font-bold text-2xl"
                            >
                                Kipik
                            </h3>
                            <p
                                class="text-beige text-xl tracking-normal font-bold leading-5 mt-3"
                            >
                                full hdv 14
                            </p>
                            <p
                                class="text-beige text-lg tracking-normal font-supercell font-normal leading-5 mt-3"
                            >
                                Master 2
                            </p>
                        </div>
                    </div>
                </button>
                <button
                    value="rose"
                    @click.prevent="addChoice"
                    aria-label="card 3"
                    class="rounded hover:bg-lightgrey focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-white"
                >
                    <div
                        class="shadow px-8 py-6 flex items-center justify-center"
                    >
                        <div>
                            <h3
                                class="mb-1 leading-5 text-orange dark:text-gray-100 font-supercell font-bold text-2xl"
                            >
                                Rose
                            </h3>
                            <p
                                class="text-beige text-xl tracking-normal font-bold leading-5 mt-3"
                            >
                                mixte hdv 13-14
                            </p>
                            <p
                                class="text-beige text-lg tracking-normal font-supercell font-normal leading-5 mt-3"
                            >
                                Master 3
                            </p>
                        </div>
                    </div>
                </button>
                <button
                    @click.prevent="addChoice"
                    value="paquerette"
                    aria-label="card 4"
                    class="rounded hover:bg-lightgrey focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-white"
                >
                    <div
                        class="shadow px-8 py-6 flex items-center justify-center"
                    >
                        <div class="ml-6">
                            <h3
                                class="mb-1 leading-5 text-orange font-supercell font-bold text-2xl"
                            >
                                Pâquerette
                            </h3>
                            <p
                                class="text-beige text-xl tracking-normal font-bold leading-5 mt-3"
                            >
                                mixte hdv 9-14
                            </p>
                            <p
                                class="text-beige text-lg tracking-normal font-supercell font-normal leading-5 mt-3"
                            >
                                Cristal 3
                            </p>
                        </div>
                    </div>
                </button>
                <button
                    @click.prevent="addChoice"
                    value="-"
                    class="w-full rounded hover:bg-lightgrey focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-white col-span-2"
                >
                    <div
                        class="shadow px-8 py-6 flex items-center justify-center"
                    >
                        <p class="font-supercell text-orange text-2xl">
                            Faites de moi ce que vous voulez
                        </p>
                    </div>
                </button>
            </div>
        </section>

        <div class="w-full my-10 py-5 px-5 bg-gray-50 rounded-xl">
            <button
                v-if="!infoSubmit"
                @click.prevent="formSubmit"
                class="w-full border border-beige hover:bg-orange transition duration-150 ease-in-out focus:ring-orange rounded-lg text-supercell text-orange hover:text-white px-8 py-4 text-lg focus:outline-none"
                type="submit"
            >
                Envoyer
            </button>
        </div>

        <div
            v-if="infoSubmit"
            class="container mx-auto w-full my-10 py-5 px-5 bg-gradient-to-bl opacity-60 from-beige to-orange rounded-xl"
        >
            <h2 class="font-supercell text-white text-3xl mb-10">Récap</h2>
            <p class="font-supercell text-white text-2xl">
                Pseudo : {{ pseudo }}
            </p>
            <p class="font-supercell text-white text-2xl">Hdv : {{ hdv }}</p>
            <p class="font-supercell text-white text-2xl mb-6">
                Ligue préférée : {{ league }}
            </p>
            <button
                @click.prevent="addChoice"
                value="-"
                class="w-full group rounded border border-white hover:bg-white focus:ring-2 focus:ring-offset-2 focus:ring-rouge focus:outline-none focus:bg-white col-span-2"
            >
                <div
                    class="w-full h-full shadow px-8 py-6 flex items-center justify-center"
                >
                    <p
                        class="font-supercell text-white group-hover:text-beige focus:text-beige text-2xl"
                    >
                        Inscrire un autre compte
                    </p>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Spreadsheet',

    data() {
        return {
            pseudo: '',
            newPseudo: '',
            toggleNewPseudo: '',
            hdv: '',
            liste: [], // Liste data from Google Sheet
            infoSubmit: false,
            newUsername: '',
            ligue: '',
        }
    },
    // mounted() {
    //     // Fetch the Liste data from Sheetson API
    //     axios
    //         .get('https://api.sheetson.com/v2/sheets/Liste', {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Authorization:
    //                     'Bearer 7G3QuA3qYNI2dNCfCq-ZGSsgiOSL4gTj47Ut09EcQSi0OcdzLIyO0FIcYtg',
    //                 'X-Sheetson-Spreadsheet-Id':
    //                     '1rEwK7ZTiVnvuvMZeKp-qTl8ObQe_Cawa9ItHkgVJBHE',
    //             },
    //         })
    //         .then((response) => (this.liste = response.data.results))
    // },
    methods: {
        addChoice() {
            this.ligue = this.value
            console.log(ligue)
        },
        formSubmit() {
            this.infoSubmit = true
        },
        toggleInput() {
            this.infoSubmit = false
        },
    },
}
</script>

<style scoped>
/* Toggle A */
input:checked ~ .dot {
    transform: translateX(100%);
    background-color: #e95432;
}
</style>
