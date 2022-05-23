<template>
    <div
        class="w-full max-w-3xl min-h-screen mx-auto grid grid-col-1 items-center justify-center"
    >
        <div>
            <Header
                title="Inscription aux Ligues"
                subtitle="Clans Tempête, Sympathique, Tinkmaster4, Fils d'Arès"
                period="Juin 2022"
            />
            <div
                class="w-full my-10 py-5 px-5 bg-gray-50 rounded-xl flex item-center justify-center"
            >
                <button
                    type="submit"
                    @click="goToForm1('toForm1')"
                    class="w-72 border border-beige hover:bg-beige transition duration-150 ease-in-out focus:ring-orange rounded-lg font-supercell text-beige hover:text-white px-8 py-4 text-lg focus:outline-none"
                >
                    Je m'inscris
                </button>
            </div>
        </div>
    </div>
    <div ref="toForm1" class="min-h-screen">
        <Spreadsheet />
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Spreadsheet from './components/Spreadsheet.vue'
import { ref } from 'vue'

export default {
    name: 'App',
    components: {
        Header,
        Spreadsheet,
    },
    mounted() {
        const { timeZone, locale } = Intl.DateTimeFormat().resolvedOptions()
        fetch('/api/pageview', {
            method: 'POST',
            body: JSON.stringify({ timeZone, locale }),
            headers: { 'Content-Type': 'application/json' },
        })
    },
    methods: {
        goToForm1(refName) {
            let element = this.$refs[refName]
            console.log(element)
            let top = element.offsetTop
            window.scrollTo(0, top)
        },
    },
}
</script>
