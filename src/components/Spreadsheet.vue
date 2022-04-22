<template>
  <div class="container mx-auto">
    <form>
      <section
        class="w-full my-10 pt-5 px-5 bg-teal-800 p-6 hover:shadow-lg hover:bg-gray-50 rounded-xl"
      >
        <h1 class="font-supercell text-lg text-gray-700 py5">Compte</h1>
        <div class="container mx-auto">
          <select
            class="mx-auto my-5 w-full border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-600 text-gray-800 bg-transparent dark:text-gray-100"
            v-model="pseudo"
          >
            <option v-for="item in liste" :key="item.id">
              {{ item.pseudo }}
            </option>
          </select>
        </div>
        <div v-if="pseudo" class="container mx-auto">
          <select
            @input="toggleInput"
            v-model="hdv"
            class="mx-auto my-5 w-full border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-600 text-gray-800 bg-transparent dark:text-gray-100"
            required
          >
            <option>Hdv 14</option>
            <option>Hdv 13</option>
            <option>Hdv 12</option>
            <option>Hdv 11</option>
            <option>Hdv 10</option>
            <option>Hdv 9</option>
          </select>
        </div>
      </section>
    </form>
  </div>

  <div class="container mx-auto">
    <section class="w-full my-10 pt-5 px-5 bg-teal-800 p-6 hover:shadow-lg hover:bg-gray-50 rounded-xl">
      <h1 class="font-supercell text-lg text-gray-700 mb-5 py5">
        Niveau de league souhaité
      </h1>
      <div class="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        <button
          value="cactus"
          @click.prevent="addChoice"
          aria-label="card 1"
          class="bg-white dark:bg-gray-800 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none focus:bg-gray-100 hover:bg-gray-100"
        >
          <div class="shadow px-8 py-6 flex items-center justify-center">
            <div>
              <h3
                class="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-supercell font-bold text-2xl"
              >
                Cactus
              </h3>
              <p
                class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5"
              >
                full hdv14
              </p>
              <p
                class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-supercell font-normal leading-5"
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
          class="bg-white dark:bg-gray-800 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none focus:bg-gray-100 hover:bg-gray-100"
        >
          <div class="shadow px-8 py-6 flex items-center justify-center">
            <div>
              <h3
                class="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-supercell font-bold text-2xl"
              >
                Kipik
              </h3>
              <p
                class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5"
              >
                full hdv 14
              </p>
              <p
                class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-supercell font-normal leading-5"
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
          class="bg-white dark:bg-gray-800 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none focus:bg-gray-100 hover:bg-gray-100"
        >
          <div class="shadow px-8 py-6 flex items-center justify-center">
            <div>
              <h3
                class="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-supercell font-bold text-2xl"
              >
                Rose
              </h3>
              <p
                class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5"
              >
                mixte hdv 13-14
              </p>
              <p
                class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-supercell font-normal leading-5"
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
          class="bg-white dark:bg-gray-800 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none focus:bg-gray-100 hover:bg-gray-100"
        >
          <div class="shadow px-8 py-6 flex items-center justify-center">
            <div class="ml-6">
              <h3
                class="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-supercell font-bold text-2xl"
              >
                Pâquerette
              </h3>
              <p
                class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5"
              >
                mixte hdv 9-14
              </p>
              <p
                class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-supercell font-normal leading-5"
              >
                Kristal 3
              </p>
            </div>
          </div>
        </button>
      </div>
    </section>

    <div class="w-full my-10 py-5 px-5 bg-gray-50 rounded-xl">
      <button
        v-if="!infoSubmit"
        @click.prevent="formSubmit"
        class="w-full bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-supercell text-white px-8 py-4 text-sm focus:outline-none"
        type="submit"
      >
        Envoyer
      </button>
    </div>

    <div
      v-if="infoSubmit"
      class="w-full my-10 py-5 px-5 bg-green-100 rounded-xl"
    >
      <h2>Récap</h2>
      <p>Hdv : {{ hdv }}</p>
      <p>Pseudo : {{ pseudo }}</p>
      <p>League choisie: {{ league }}</p>
    </div>

    <!-- <section class="w-full py-5 bg-gray-50 rounded">
                <h1 class="font-supercell text-lg text-gray-700 py5">
                    Préférence
                </h1>
                <select>
                    <option>Cactus</option>
                    <option>Kipik</option>
                    <option>Rose</option>
                    <option>Pâquerette</option>
                </select>
            </section> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Spreadsheet',

  data() {
    return {
      pseudo: '',
      hdv: '',
      liste: [], // Liste data from Google Sheet
      infoSubmit: false,
      newUsername: '',
      ligue: '',

    }
  },
  mounted() {
    // Fetch the Liste data from Sheetson API
    axios
      .get('https://api.sheetson.com/v2/sheets/Liste', {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer 7G3QuA3qYNI2dNCfCq-ZGSsgiOSL4gTj47Ut09EcQSi0OcdzLIyO0FIcYtg',
          'X-Sheetson-Spreadsheet-Id':
            '1rEwK7ZTiVnvuvMZeKp-qTl8ObQe_Cawa9ItHkgVJBHE',
        },
      })
      .then((response) => (this.liste = response.data.results))
  },
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
