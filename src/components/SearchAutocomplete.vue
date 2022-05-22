<template>
    <div class="container mx-auto relative">
        <input
            type="text"
            maxlength="20"
            name="pseudo"
            class="mx-auto my-5 w-full border border-orange pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-rouge text-orange"
            v-model="search"
            @input="onChange"
            @keydown.down="onArrowDown"
            @keydown.up="onArrowUp"
            @keydown.enter="onEnter"
        />
        <ul v-show="isOpen" class="autocomplete-results">
            <li
                v-for="(result, i) in results"
                :key="i"
                @click="setResult(result)"
                class="autocomplete-result"
                :class="{ 'is-active': i === arrowCounter }"
            >
                {{ result }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SearchAutocomplete',
    data() {
        return {
            search: '',
            results: [],
            isOpen: false,
            arrowCounter: -1,
            items: [
                '☠BARLOU☠',
                '☣️Lapinou☣️',
                '⚡️BALIN™',
                '⚡ᴘᴀᴋᴀ127⚡',
                '⭐️JADOU⭐️',
                'AC/DC',
                "Alex'Andra",
                'Amiral_03',
                'AnToiNe',
                'Arm01',
                'AspéGic',
                'ben14',
                'ben13',
                'ben11',
                'Big Bear',
                'BloodAngelOne',
                'Bouba',
                'bullman',
                'claude',
                'Claude 2',
                'clint',
                'Clowny',
                'coach',
                'Coachinette',
                'Coachy',
                'corsair',
                'Damien',
                'Darko',
                'delseb11',
                'Didieu',
                'Djazzy',
                'dojo',
                'eco-fr',
                'Eliott',
                'EMLD.F',
                'Fab III',
                'Fantasy',
                'foudrr',
                'frostgamers',
                'Gaëtan',
                'Gibbs',
                'gibe4',
                'Gorba',
                'GRONZOZ',
                'Grouik',
                'henri',
                'HUGO',
                'hugoboss',
                'HUGOBOSS.2',
                "Jack O'neil",
                'Jc98745',
                'jeremy',
                'JEROME',
                'jimmy',
                'jm',
                'kaiser91',
                'Katsumoto San',
                'kazenmoins',
                'Klimt',
                'Kya',
                'La Cigogne',
                'La Fée',
                'le dje',
                'Le Pirate',
                'le rois arthur',
                'Line Ten',
                'Loficu',
                'Loïc',
                'lulu',
                'lulu2',
                'MASSAÏ',
                'mattéo-lucas',
                'max la menace',
                'mick',
                'nenesses2',
                'Noky',
                'octo nook',
                'oligri',
                'PassPoil',
                'patetlao',
                'petit jean',
                'phicuv',
                'pilote',
                'Porcepic',
                'Rahan_2007',
                'RASCASSE',
                'Romu.38',
                'romuald 38',
                'Sam',
                'SidVonB',
                'SiegfriedVonB',
                'SiegVonB',
                'SigiVonB',
                'SigurdVonB',
                'SivardVonB',
                'STRIKER’s',
                'Taiiji',
                'Tarkhagal',
                'thierry',
                '⭐SupernaNO⭐iD',
                'Tonio',
                'TT Chopper',
                'TT Choupp',
                'twapatapeymoa',
                'vincent',
                'wake',
                'Youl',
                'Zelys',
                'zombieland',
                'zorglube',
                'ШДКΞ ЦР',
            ],
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside)
    },
    destroyed() {
        document.removeEventListener('click', this.handleClickOutside)
    },
    methods: {
        filterResults() {
            this.results = this.items.filter(
                (item) =>
                    item.toLowerCase().indexOf(this.search.toLowerCase()) > 3
            )
        },
        onChange() {
            if (this.search === '') {
                this.isOpen = false
            } else {
                this.filterResults()
                this.isOpen = true
            }
        },
        setResult(result) {
            this.search = result
            this.isOpen = false
        },
        handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.arrowCounter = -1
                this.isOpen = false
            }
        },
        onArrowDown() {
            if (this.arrowCounter < this.results.length) {
                this.arrowCounter = this.arrowCounter + 1
            }
        },
        onArrowUp() {
            if (this.arrowCounter > 0) {
                this.arrowCounter = this.arrowCounter - 1
            }
        },
        onEnter() {
            this.search = this.results[this.arrowCounter]
            this.arrowCounter = -1
            this.isOpen = false
        },
    },
}
</script>

<style scoped>
.autocomplete-results {
    padding: 0;
    margin: 0;
    margin-bottom: 12px;
    border: 1px solid #f2905b;
    border-radius: 6px;
    height: 120px;
    min-height: 1em;
    max-height: 10em;
    overflow: auto;
}

.autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
}
.autocomplete-result.is-active,
.autocomplete-result:hover {
    background-color: #e95432;
    color: white;
}
</style>
