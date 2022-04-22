<template>
    <div class="w-full max-w-3xl mx-auto">
        <Header 
            title="Inscription aux Leagues"           
            subtitle="Clans Tempête, Sympathique, Tinkmaster4, fils d'Arès"
            period="Mai 2022"
        />
        <Spreadsheet />
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Spreadsheet from './components/Spreadsheet.vue'

export default {
    name: 'App',
    components: {
        Header,
        Spreadsheet
    },
    mounted() {
        const { timeZone, locale } = Intl.DateTimeFormat().resolvedOptions()
        fetch('/api/pageview', {
            method: 'POST',
            body: JSON.stringify({ timeZone, locale }),
            headers: { 'Content-Type': 'application/json' },
        })
    },
}
</script>
