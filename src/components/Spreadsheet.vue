<template>
    <form @submit.prevent="submitForm" class="container mx-auto">
        <section
            class="min-w-full min-h-screen grid grid-col-1 items-center justify-center mt-10 py-6 rounded-xl"
        >
            <div class="relative hover:shadow-lg hover:bg-lightgrey p-2">
                <div
                    class="absolute -inset-2 bg-gradient-to-r from-beige to-orange rounded-lg blur opacity-5"
                ></div>
                <div
                    class="relative bg-white rounded-lg ring-8 ring-white p-6 leading-none"
                >
                    <h1
                        v-if="!toggleNewPseudo"
                        class="font-supercell text-2xl md:text-3xl text-gray-700 py-5 text-rouge mb-8 text-center"
                    >
                        Compte
                    </h1>
                    <h1
                        v-else
                        class="font-supercell text-2xl md:text-3xl text-gray-700 py-5 text-beige mb-8 text-center"
                    >
                        Nouveau compte
                    </h1>

                    <div v-if="!toggleNewPseudo">
                        <h2
                            class="font-supercell text-md md:text-2xl text-gray-700 py5 mt-6 text-orange"
                        >
                            Pseudo
                        </h2>
                        <div class="container mx-auto">
                            <input
                                v-if="selectedPseudo === ''"
                                type="text"
                                maxlength="4"
                                name="pseudo"
                                placeholder="Saisis les premières lettres de ton pseudo"
                                class="mx-auto my-5 w-full border border-orange pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-rouge text-orange"
                                v-model="searchPseudo"
                                required
                            />
                            <div
                                v-else
                                class="mx-auto my-5 w-full border border-orange pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-rouge text-orange flex justify-between"
                            >
                                <div>
                                    <p>
                                        <span class="font-semibold">
                                            {{ selectedPseudo }}</span
                                        >
                                    </p>
                                </div>
                                <div
                                    class="cursor-pointer"
                                    @click="activateDeleteSelectedPseudo"
                                >
                                    <svg
                                        class="h-6 w-6 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title />
                                        <path
                                            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.21,11.79a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-1.79,1.8a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12l-1.8-1.79a1,1,0,0,1,1.42-1.42L12,10.59l1.79-1.8a1,1,0,0,1,1.42,1.42L13.41,12Z"
                                            fill="#db0c14"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <ul
                                v-if="searchPseudos.length"
                                class="mx-auto rounded bg-lightgrey border border-orange px-4 py-2 space-y-1 z-10 mb-8"
                            >
                                <li
                                    v-for="pseudo in searchPseudos"
                                    :key="pseudo.pseudos"
                                    @click="selectPseudo(pseudo.pseudos)"
                                    class="cursor-pointer text-orange hover:bg-gray-100 p-1"
                                >
                                    {{ pseudo.pseudos }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div v-if="toggleNewPseudo">
                        <p
                            class="font-supercell text-md md:text-2xl text-gray-700 py5 mt-6 text-beige"
                        >
                            Ajouter mon pseudo
                        </p>
                        <input
                            type="text"
                            name="newPseudo"
                            maxlength="20"
                            placeholder="Saisis un nouveau pseudo pour l'enregistrer"
                            v-model="newPseudo"
                            class="mx-auto my-5 w-full border border-orange dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-orange text-orange bg-transparent dark:text-gray-100"
                            required
                        />
                    </div>
                    <div v-if="showToggleNewPseudo" class="container mx-auto">
                        <div class="items-left justify-center w-full mb-6">
                            <label
                                for="toogleA"
                                class="flex items-center cursor-pointer"
                            >
                                <div class="relative ml-6">
                                    <div class="">
                                        <div
                                            @click="
                                                activateDeleteSelectedPseudo
                                            "
                                        >
                                            <input
                                                id="toogleA"
                                                type="checkbox"
                                                class="sr-only"
                                                v-model="toggleNewPseudo"
                                            />
                                        </div>
                                        <div
                                            class="w-10 h-4 bg-lightgrey rounded-full shadow-inner pt-4"
                                        ></div>
                                        <div
                                            v-if="!toggleNewPseudo"
                                            class="absolute w-6 h-6 bg-beige rounded-full shadow -left-1 -top-1 transition"
                                        ></div>
                                        <div
                                            v-else
                                            class="absolute w-6 h-6 bg-orange rounded-full shadow -left-1 -top-1 transition translate-x-6"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    v-if="!toggleNewPseudo"
                                    class="text-beige text-sm md:text-xl tracking-normal font-bold ml-4"
                                >
                                    Mon pseudo n'est pas dans la liste
                                </div>
                                <div
                                    v-else
                                    class="text-orange text-sm md:text-xl tracking-normal font-bold ml-4"
                                >
                                    Mon pseudo est dans la liste
                                </div>
                            </label>
                        </div>
                    </div>
                    <div
                        v-if="toggleNewPseudo"
                        class="container mx-auto w-full mt-4 mb-8 pt-2"
                    >
                        <h1
                            class="font-supercell text-md md:text-2xl text-gray-700 text-beige"
                        >
                            Clan
                        </h1>
                        <div class="container mx-auto">
                            <div class="container mx-auto">
                                <select
                                    name="hdv"
                                    @input="toggleInput"
                                    v-model="clan"
                                    class="mx-auto mt-5 w-full border border-orange dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-orange text-orange bg-transparent dark:text-gray-100"
                                    required
                                >
                                    <option>Tempête</option>
                                    <option>Sympathique</option>
                                    <option>Tinkmaster4</option>
                                    <option>Fils d'Arès</option>
                                    <option>Autre</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="container mx-auto w-full pt-2 mb-20">
                        <h1
                            v-if="!toggleNewPseudo"
                            class="font-supercell text-md md:text-2xl text-gray-700 text-orange"
                        >
                            Hdv
                        </h1>
                        <h1
                            v-else
                            class="font-supercell text-md md:text-2xl text-gray-700 text-beige"
                        >
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
                    <button
                        v-if="toggleNewPseudo"
                        @click.prevent="goToForm2('toForm2')"
                        class="w-full border border-beige hover:bg-beige transition duration-150 ease-in-out focus:ring-orange rounded-lg font-supercell text-beige hover:text-white px-8 py-4 text-md md:text-lg focus:outline-none"
                    >
                        Choisir mon niveau de ligue
                    </button>
                    <button
                        v-else
                        @click.prevent="goToForm2('toForm2')"
                        class="w-full border border-orange hover:bg-beige transition duration-150 ease-in-out focus:ring-orange rounded-lg font-supercell text-orange hover:text-white px-8 py-4 text-md md:text-lg focus:outline-none"
                    >
                        Choisir mon niveau de ligue
                    </button>
                </div>
            </div>
        </section>
        <div class="min-h-screen grid grid-col-1 items-center justify-center">
            <div>
                <section
                    ref="toForm2"
                    id="step2"
                    v-if="hdv"
                    class="min-w-full my-10 pt-5 px-5 p-10 hover:shadow-lg hover:bg-lightgrey rounded-xl"
                >
                    <h1
                        class="font-supercell text-2xl md:text-3xl mb-14 text-rouge text-center"
                    >
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
            </div>
        </div>
        <transition name="fade">
            <div
                id="pagetop"
                class="fixed right-0 bottom-0"
                v-show="scY > 300"
                @click="toTop"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#db0c14"
                    stroke-width="1"
                    stroke-linecap="square"
                    stroke-linejoin="arcs"
                >
                    <path d="M18 15l-6-6-6 6" />
                </svg>
            </div>
        </transition>
    </form>
</template>

<script>
import Ligue from './Ligue.vue'
import { ref, computed } from 'vue'
import pseudos from '../data/pseudos.json'

// const FORMSPARK_ACTION_URL = 'https://submit-form.com/m1p9xjlp'
const FORMSPARK_ACTION_URL = 'https://submit-form.com/s4mPXLlR'

export default {
    name: 'Spreadsheet',

    components: {
        Ligue,
    },

    data() {
        return {
            pseudo: '',
            pseudos,
            newPseudo: '',
            toggleNewPseudo: '',
            deleteSelectedPseudo: false,
            showToggleNewPseudo: true,
            activatedDeleteSelectedPseudo: false,
            hdv: '',
            clan: '',
            liste: [], // Liste data from Google Sheet
            infoSubmit: false,
            newForm: '',
            ligue: null,
            scTimer: 0,
            scY: 0,
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

    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },

    setup() {
        let searchPseudo = ref('')

        const searchPseudos = computed(() => {
            if (searchPseudo.value === '') {
                return []
            }
            let matches = 0

            return pseudos.filter((pseudo) => {
                if (
                    pseudo.pseudos
                        .toLowerCase()
                        .includes(searchPseudo.value.toLowerCase()) &&
                    matches < 10
                ) {
                    matches++
                    return pseudo
                }
            })
        })

        const selectPseudo = (pseudo) => {
            selectedPseudo.value = pseudo
            searchPseudo.value = ''
        }

        let selectedPseudo = ref('')

        return {
            pseudos,
            searchPseudo,
            searchPseudos,
            selectPseudo,
            selectedPseudo,
        }
    },

    methods: {
        handleScroll: function () {
            if (this.scTimer) return
            this.scTimer = setTimeout(() => {
                this.scY = window.scrollY
                clearTimeout(this.scTimer)
                this.scTimer = 0
            }, 100)
        },
        toTop: function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        },
        goToForm2(refName) {
            let element2 = this.$refs[refName]
            console.log(element2)
            let top2 = element2.offsetTop
            window.scrollTo(0, top2)
        },
        toggleInput() {
            this.infoSubmit = false
        },
        activateDeleteSelectedPseudo() {
            this.selectedPseudo = ''
            this.activatedDeleteSelectedPseudo = true
            this.showToggleNewPseudo = true
        },
        async submitForm() {
            await fetch(FORMSPARK_ACTION_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    date: this.date,
                    pseudo: this.selectedPseudo,
                    newPseudo: this.newPseudo,
                    clan: this.clan,
                    hdv: this.hdv,
                    ligue: this.ligue,
                }),
            })
            alert(
                'Récap : ' +
                    '\n' +
                    '\n' +
                    "Pseudo présent dans la liste d'inscrits : " +
                    this.selectedPseudo +
                    '\n' +
                    "Pseudo à ajouter à la liste d'inscrits : " +
                    this.newPseudo +
                    '\n' +
                    'Clan : ' +
                    this.clan +
                    '\n' +
                    'Hdv : ' +
                    this.hdv +
                    '\n' +
                    'Ligue souhaitée : ' +
                    this.ligue +
                    '\n' +
                    '\n' +
                    "Merci pour l'info !"
            )
            console.log('Pseudo : ' + this.selectedPseudo)
            this.selectedPseudo = ''
            console.log('NewPseudo : ' + this.newPseudo)
            this.newPseudo = ''
            console.log('Clan : ' + this.clan)
            this.clan = ''
            console.log('Hdv : ' + this.hdv)
            this.hdv = ''
            console.log('Choix de ligue : ' + this.ligue)
            this.ligue = null
            this.toggleNewPseudo = false
            window.location = top.location.href
        },
    },
}
</script>

<style scoped></style>
