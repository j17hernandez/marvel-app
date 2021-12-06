<template>
  <v-container>
    <Loading v-if="loading" />
    <v-row>
      <v-col v-for="(item, i) in list" :key="i" cols="12" sm="12" md="3" lg="3">
        <CardComponent name :item="item" @go="goCharacters" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CardComponent from '@/components/common/Cards.vue'
import Loading from '@/components/common/loading.vue'
import basicMixin from '@/mixins/basicMixin'
export default {
  name: 'CharactersComponent',
  components: {
    CardComponent,
    Loading,
  },
  mixins: [basicMixin],
  data() {
    return {
      token: '',
      list: [],
    }
  },
  created() {
    this.loading = true
    if (localStorage.getItem('ListCharacters')) {
      this.list = JSON.parse(localStorage.getItem('ListCharacters'))
      this.loading = false
    } else {
      this.loadHeroesCharacters()
    }
  },
  methods: {
    loadHeroesCharacters() {
      const ts = Number(new Date())
      // const hash = md5.create()
      this.hash.update(ts + this.PRIVATE_KEY + this.PUBLIC_KEY)
      this.$axios
        .$get(
          `https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=name&limit=20&apikey=${
            this.PUBLIC_KEY
          }&hash=${this.hash.hex()}`
        )
        .then((resp) => {
          localStorage.setItem(
            'ListCharacters',
            JSON.stringify(resp.data.results)
          )
          this.list = resp.data.results
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          this.loading = false
        })
    },
    getImage(obj) {
      return obj.path.concat('.', obj.extension)
    },
    goCharacters(item) {
      localStorage.setItem('setItemCharacter', JSON.stringify(item))
      this.$router.push(`characters/${item.id}`)
    },
  },
}
</script>
