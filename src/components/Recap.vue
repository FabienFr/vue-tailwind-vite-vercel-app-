<template>
    <div
        v-if="infoSubmit"
        class="container mx-auto w-full my-10 py-5 px-5 bg-gradient-to-bl opacity-60 from-beige to-orange rounded-xl"
    >
        <h2 class="font-supercell text-white text-3xl mb-10">Récap</h2>
        <p class="font-supercell text-white text-2xl">
            Pseudo : {{ pseudo || newPseudo }}
        </p>
        <p class="font-supercell text-white text-2xl">Hdv : {{ hdv }}</p>
        <p class="font-supercell text-white text-2xl mb-6">
            Ligue préférée : {{ ligue }}
        </p>
        <button
            value="-"
            class="w-full border border-beige hover:bg-beige transition duration-150 ease-in-out focus:ring-orange rounded-lg font-supercell text-beige hover:text-white px-8 py-4 text-lg focus:outline-none"
        >
            <p class="font-supercell text-white text-2xl">
                Inscrire un autre compte
            </p>
        </button>
    </div>
</template>
