<template>
  <v-container fluid>
    <v-container v-if="loading"> <Loading /> </v-container>
    <v-row>
      <v-col cols="12" md="3">
        <CardComponent :item="itemCharacter" />
      </v-col>
      <v-col>
        <h1>{{ itemCharacter.name }}</h1>
        <span>
          {{
            itemCharacter.description.length > 0
              ? itemCharacter.description
              : lorem
          }}
        </span>
      </v-col>
    </v-row>
    <v-row v-if="list.length > 0">
      <v-col cols="12">
        <h1>COMICS</h1>
        <v-divider></v-divider>
      </v-col>
      <v-col
        v-for="(item, i) in list"
        :key="i"
        cols="12"
        sm="12"
        md="3"
        lg="3"
        class="col-comics"
      >
        <CardComponent title :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CardComponent from '@/components/common/Cards.vue'
import basicMixin from '@/mixins/basicMixin'
import Loading from '@/components/common/loading.vue'

export default {
  name: 'CharacterApp',
  components: {
    CardComponent,
    Loading,
  },
  mixins: [basicMixin],
  data() {
    return {
      itemCharacter: {},
      list: [],
      lorem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed tortor quam. Sed tempus accumsan enim eget faucibus. Duis fermentum erat vitae lectus varius efficitur. Suspendisse pharetra quis purus eu volutpat. Cras tempor dictum metus non malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer iaculis ac elit a ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut tristique purus tellus, id maximus mauris feugiat sed. Proin ullamcorper molestie ornare. Sed efficitur faucibus elit ut ultricies.`,
    }
  },
  created() {
    this.loading = true
    if (localStorage.getItem('setItemCharacter')) {
      this.itemCharacter = JSON.parse(localStorage.getItem('setItemCharacter'))
      this.getComics()
    }
  },
  methods: {
    getComics() {
      const ts = Number(new Date())
      this.hash.update(ts + this.PRIVATE_KEY + this.PUBLIC_KEY)
      this.$axios
        .$get(
          `${this.itemCharacter.comics.collectionURI}?ts=${ts}&apikey=${
            this.PUBLIC_KEY
          }&hash=${this.hash.hex()}`
        )
        .then((resp) => {
          // localStorage.setItem('ListComics', JSON.stringify(resp.data.results))
          this.list = resp.data.results
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>
<style scoped>
.col-comics {
  align-items: center;
  justify-content: center;
}
</style>
