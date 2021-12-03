<template>
  <v-row>
    <v-col v-for="(item, i) in list" :key="i" cols="12" sm="12" md="3" lg="3">
      <v-card
        style="border-radius: 20px; width: 330px"
        @click="goCharacters(item)"
      >
        <v-card-text class="p-0" style="padding: 0px">
          <v-img
            :src="getImage(item.thumbnail)"
            :alt="item.name"
            width="330px"
            height="330px"
            style="border-radius: inherit"
          />
        </v-card-text>
        <v-card-title class="d-flex justify-center">
          <v-tooltip bottom>
            <template #activator="{ attrs, on }">
              <span v-bind="attrs" v-on="on">
                {{
                  item.name.length > 22
                    ? item.name.substr(0, 22).concat('...')
                    : item.name
                }}
              </span>
            </template>
            {{ item.name }}
          </v-tooltip>
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import md5 from 'js-md5'
export default {
  name: 'CharactersComponent',
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
    goCharacters(item) {
      localStorage.setItem('setItemCharacter', JSON.stringify(item))
      this.$router.push(`characters/${item.id}`)
    },
  },
}
</script>
