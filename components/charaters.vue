<template>
  <v-row>
    <v-col cols="12" sm="8" md="4" v-for="(item, i) in list" :key="i">
      <v-card>
        <v-card-title class="logo py-4 d-flex justify-center">
          {{ item.name }}
        </v-card-title>
        <v-card-text>
          <v-img
            :src="getImage(item.thumbnail)"
            :alt="item.name"
            width="330px"
            height="330px"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import md5 from 'js-md5'
export default {
  name: 'CharatersComponent',
  data() {
    return {
      token: '',
      PUBLIC_KEY: 'e8563b7bb02b8ea71c16f3341abaec33',
      PRIVATE_KEY: '84563d2f3e026e03ed75773682e0197c8a8548d6',
      list: [],
    }
  },
  created() {
    if (localStorage.getItem('ListCharacters')) {
      this.list = JSON.parse(localStorage.getItem('ListCharacters'))
    } else {
      this.loadHeroesCharacters()
    }
  },
  methods: {
    loadHeroesCharacters() {
      const ts = Number(new Date())
      const hash = md5.create()
      hash.update(ts + this.PRIVATE_KEY + this.PUBLIC_KEY)
      this.$axios
        .$get(
          `https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=name&limit=20&apikey=${
            this.PUBLIC_KEY
          }&hash=${hash.hex()}`
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
    },
    getImage(obj) {
      return obj.path.concat('.', obj.extension)
    },
  },
}
</script>
