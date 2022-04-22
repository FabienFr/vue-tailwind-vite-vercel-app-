<template>
  <div class="container mx-auto">
    <form>
      <section class="w-full my-10 pt-5 px-5 bg-gray-50 rounded-xl">
        <h1 class="font-supercell text-lg text-gray-700 py5">Compte</h1>
        <!-- Existing Pseudo -->
        <input
          v-model="searchPseudo"
          @input="toggleInput"
          type="text"
          id="search"
          name="username"
          class="mx-auto w-full my-5 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-600 text-gray-800 bg-transparent dark:text-gray-100"
          placeholder="Use existing Pseudo"
        />
        <!-- <ul v-if="searchRecruits.length">
          <li>
            Showing {{ searchRecruits.length }} of {{ recruits.length }} results
          </li>
          <li v-for="recruit in searchRecruits" :key="recruit.pseudo">
            {{ recruit.pseudo }}
          </li>
        </ul> -->
        <!-- New Pseudo -->
        <input
          v-model="newUserName"
          @keyup.enter="addUserName"
          aria-label="Add a new UserName"
          type="text"
          id="newusername"
          name="newusername"
          class="mx-auto w-full mb-5 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-600 text-gray-800 bg-transparent dark:text-gray-100"
          placeholder="Add a new Pseudo"
        />
        <select
          @input="toggleInput"
          v-model="hdv"
          class="mx-aut w-full border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-600 text-gray-800 bg-transparent dark:text-gray-100"
        >
          <option>Hdv 14</option>
          <option>Hdv 13</option>
          <option>Hdv 12</option>
          <option>Hdv 11</option>
          <option>Hdv 10</option>
          <option>Hdv 9</option>
        </select>
      </section>

      <section class="w-full my-10 px-5 py-5 bg-gray-50 rounded-xl">
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
        <h2 class="text-lg font-bold">Récap</h2>
        <p>Hdv : {{ hdv }}</p>
        <p>Pseudo : {{ userName }}</p>
        <p>New pseudo : {{ newUserName }}</p>
        <p>League choisie: {{ league }}</p>
        <br />
        <h2 class="text-lg font-bold">Recruits</h2>
        <ul>
          <li v-for="recruit in recruits" :key="recruit.id">
            Pseudos actifs: {{ recruit.pseudo }}
          </li>
        </ul>
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
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { ref, computed } from 'vue'
import recruits from '../../db.json'

export default {
  name: 'form',

  data() {
    return {
      hdv: '',
      userName: '',
      newUserName: '',
      league: '',
      infoSubmit: false,
      baseURL: 'http://localhost:3001/recruits',
      recruits: [],
      // recruit,
      // searchPseudo,
      // searchRecruits,
      // selectPseudo,
      // selectedRecruit,
    }
  },

  // setup() {
  //   searchPseudo = ref('')

  //   searchRecruits = computed(() => {
  //     if (searchPseudo.value === '') {
  //       return []
  //     }

  //     let matches = 0

  //     return recruits.filter((recruit) => {
  //       if (
  //         recruit.pseudo
  //           .toLowerCase()
  //           .includes(searchPseudo.value.toLowerCase()) &&
  //         matches < 10
  //       ) {
  //         matches++
  //         return recruit
  //       }
  //     })
  //   })

  //   selectPseudo = (recruit) => {
  //     selectedRecruit.value = recruit
  //     searchPseudo.value = ''
  //   }

  //   selectedRecruit = ref('')
  // },

  async created() {
    try {
      const res = await axios.get(this.baseURL)
      this.recruits = res.data
    } catch (e) {
      console.log(e)
    }
  },

  methods: {
    addChoice() {
      this.league.push({ value })
      console.log(league)
    },
    formSubmit() {
      this.infoSubmit = true
    },
    toggleInput() {
      this.infoSubmit = false
    },
    // addUserName() {
    //   try {
    //     const res = await.axios.post(baseURL, { pseudo: this.userName });
    //     this.recruits = [...this.recruits, res.data];
    //     this.userName = "";
    //   } catch (e) {
    //     console.error (e);
    //   }
    // }
  },
}
</script>
