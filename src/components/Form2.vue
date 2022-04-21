<template>
    <div class="container mx-auto">
        <form>
            <section class="w-full my-10 pt-5 px-5 bg-gray-50 rounded-xl">
                <h1 class="font-supercell text-lg text-gray-700 py5">Compte</h1>
                <select v-model="formData.hdv" class="mx-auto my-5 w-full border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-600 text-gray-800 bg-transparent dark:text-gray-100">
                    <option>Hdv 14</option>
                    <option>Hdv 13</option>
                    <option>Hdv 12</option>
                    <option>Hdv 11</option>
                    <option>Hdv 10</option>
                    <option>Hdv 9</option>
                </select>
                <!-- Pseudo -->
                <input
                    v-model="formData.username"
                    type="text"
                    id="username"
                    name="username"
                    class="mx-auto w-full mb-7  border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-600 text-gray-800 bg-transparent dark:text-gray-100"
                    placeholder="Pseudo"
                    required
                />
            </section>

            <section class="w-full my-10 px-5 py-5 bg-gray-50 rounded-xl">
                <h1 class="font-supercell text-lg text-gray-700 mb-5 py5">
                    Niveau de league souhaité
                </h1>
                <div
                    class="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <a
                        aria-label="card 1"
                        href="javascript:void(0)"
                        class="bg-white dark:bg-gray-800 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none focus:bg-gray-100 hover:bg-gray-100"
                    >
                        <div class="shadow px-8 py-6 flex items-center">
                            <div class="p-4 bg-indigo-700 rounded">
                                <img
                                    class="h-8 w-8"
                                    src="../assets/noun-cactus.svg"
                                    alt="icon"
                                />
                            </div>

                            <div class="ml-6">
                                <h3
                                    class="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl"
                                >
                                    CACTUS
                                </h3>
                                <p
                                    class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5"
                                >
                                    MASTER 1 
                                </p>
                                <p
                                    class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5"
                                >
                                    full hdv14
                                </p>
                            </div>
                        </div>
                    </a>
                    <a
                        aria-label="card 2"
                        href="javascript:void(0)"
                        class="bg-white dark:bg-gray-800 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none focus:bg-gray-100 hover:bg-gray-100"
                    >
                        <div class="shadow px-8 py-6 flex items-center">
                            <div class="p-4 bg-indigo-700 rounded text-white">
                                <img
                                    class="h-8 w-8"
                                    src="../assets/noun-prick.svg"
                                    alt="icon"
                                />
                            </div>
                            <div class="ml-6">
                                <h3
                                    class="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl"
                                >
                                    KIPIK
                                </h3>
                                <p
                                    class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5"
                                >
                                    MASTER 2 
                                </p>
                                <p
                                    class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5"
                                >
                                    full hdv 14 
                                </p>
                            </div>
                        </div>
                    </a>
                    <a
                        aria-label="card 3"
                        href="javascript:void(0)"
                        class="bg-white dark:bg-gray-800 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none focus:bg-gray-100 hover:bg-gray-100"
                    >
                        <div class="shadow px-8 py-6 flex items-center">
                            <div class="p-4 bg-indigo-700 rounded text-white">
                                <img
                                    class="h-8 w-8"
                                    src="../assets/noun-rose.svg"
                                    alt="icon"
                                />
                            </div>
                            <div class="ml-6">
                                <h3
                                    class="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl"
                                >
                                    ROSE
                                </h3>
                                <p
                                    class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5"
                                >
                                    MASTER 3 
                                </p>
                                <p
                                    class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5"
                                >
                                  mixte hdv 13-14 
                                </p>
                            </div>
                        </div>
                    </a>
                    <a
                        aria-label="card 4"
                        href="javascript:void(0)"
                        class="bg-white dark:bg-gray-800 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none focus:bg-gray-100 hover:bg-gray-100"
                    >
                        <div class="shadow px-8 py-6 flex items-center">
                            <div class="p-4 bg-indigo-700 rounded text-white">
                                <img
                                    class="h-8 w-8"
                                    src="../assets/noun-daisy.svg"
                                    alt="icon"
                                />
                            </div>
                            <div class="ml-6">
                                <h3
                                    class="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl"
                                >
                                    PAQUERETTE
                                </h3>
                                <p
                                    class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5"
                                >
                                    KRISTAL 3
                                </p>
                                <p
                                    class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5"
                                >
                                    mixte hdv 9-14
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </section>

            <div class="w-full my-10 py-5 px-5 bg-gray-50 rounded-xl">
              <button
                class=" w-full bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-supercell text-white px-8 py-2 text-sm focus:outline-none"
                type="submit"
              >
                Envoyer
              </button>
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
export default {
    name: 'form',
    data() {
        return {
          formData: {
            hdv: '',
            username: '',
            newUsername: '',
            league: ''
          }
        }
    },
    methods: {},
}
</script>
