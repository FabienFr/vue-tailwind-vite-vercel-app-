<template>
    <form @submit.prevent="submitForm" class="container mx-auto">
        <section
            class="min-w-full mt-10 pt-5 px-5 p-6 hover:shadow-lg hover:bg-lightgrey rounded-xl"
        >
            <h1 class="font-supercell text-2xl md:text-3xl text-gray-700 py5 text-rouge">
                Compte
            </h1>
            <h2
                class="font-supercell text-xl md:text-2xl text-gray-700 py5 mt-6 text-orange"
            >
                Pseudo
            </h2>
            <div class="container mx-auto">
                <input
                    type="text"
                    name="pseudo"
                    class="mx-auto my-5 w-full border border-orange pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-rouge text-orange"
                    v-model="pseudo"
                />
                <!-- <option v-for="item in liste" :key="item.id">
                            {{ item.pseudo }}
                        </option> -->
            </div>
            <!-- <div class="container mx-auto">
                <div class="items-left justify-center w-full mb-6">
                    <label
                        for="toogleA"
                        class="flex items-center cursor-pointer"
                    >
                        <div class="relative">
                            <input
                                id="toogleA"
                                type="checkbox"
                                class="sr-only"
                                v-model="toggleNewPseudo"
                            />
                            <div
                                class="w-10 h-4 bg-lightgrey rounded-full shadow-inner"
                            ></div>
                            <div
                                class="dot absolute w-6 h-6 bg-beige rounded-full shadow -left-1 -top-1 transition"
                            ></div>
                        </div>
                        <div
                            class="ml-3 text-beige text-xl tracking-normal font-bold"
                        >
                            Mon pseudo n'est pas dans la liste
                        </div>
                    </label>
                </div>
                <div v-if="toggleNewPseudo">
                    <p
                        class="font-supercell text-2xl text-gray-700 py5 mt-2 text-orange"
                    >
                        Ajouter mon pseudo
                    </p>
                    <input
                        type="text"
                        name="newPseudo"
                        v-model="newPseudo"
                        class="mx-auto my-5 w-full border border-orange dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-orange text-orange bg-transparent dark:text-gray-100"
                    />
                </div>
            </div> -->
            <div
                v-if="pseudo || newPseudo"
                class="container mx-auto w-full pt-2"
            >
                <h1 class="font-supercell text-xl md:text-2xl text-gray-700 text-orange">
                    Hdv
                </h1>
                <div class="container mx-auto">
                    <div class="container mx-auto">
                        <select
                            name="hdv"
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
        <section
            id="step2"
            v-if="hdv"
            class="min-w-full my-10 pt-5 px-5 p-6 hover:shadow-lg hover:bg-lightgrey rounded-xl"
        >
            <h1 class="font-supercell text-2xl md:text-3xl mb-5 text-rouge">
                Niveau de ligue souhaité
            </h1>
            <Ligue v-model="ligue" />
        </section>
        <section v-if="hdv" class="min-w-full">
            <div class="w-full my-10 py-5 px-5 bg-gray-50 rounded-xl">
                <button
                    type="submit"
                    v-if="!infoSubmit"
                    class="w-full border border-beige hover:bg-beige transition duration-150 ease-in-out focus:ring-orange rounded-lg font-supercell text-beige hover:text-white px-8 py-4 text-lg focus:outline-none"
                >
                    Envoyer
                </button>
            </div>
        </section>
    </form>
</template>

<script>

import Ligue from './Ligue.vue'

const FORMSPARK_ACTION_URL = 'https://submit-form.com/s4mPXLlR'

export default {
    name: 'Spreadsheet',

    components: {
        Ligue
    },

    data() {
        return {
            pseudo: '',
            newPseudo: '',
            toggleNewPseudo: '',
            hdv: '',
            liste: [], // Liste data from Google Sheet
            infoSubmit: false,
            newForm: '',
            ligue: null,
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
        toggleInput() {
            this.infoSubmit = false
        },
        async submitForm() {
            await fetch(FORMSPARK_ACTION_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    pseudo: this.pseudo,
                    newPseudo: this.newPseudo,
                    hdv: this.hdv,
                    ligue: this.ligue,
                }),
            })
            alert('Récap: ' + '\n' + '\n' + 'Ligue: '+ this.ligue + '\n' + 'Pseudo: ' + this.pseudo + '\n' + 'Hdv: ' + this.hdv + '\n' + '\n' + 'Merci pour l\'info !' + '\n' + 'Clique sur ok pour remplir un nouveau formulaire...' )
            console.log('Pseudo : ' + this.pseudo);
            this.pseudo = '';
            console.log('NewPseudo : ' + this.newPseudo);
            this.newPseudo = '';
            console.log('Hdv : ' + this.hdv);
            this.hdv = '';
            console.log('Choix de ligue : ' + this.ligue);
            this.ligue = null;
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
