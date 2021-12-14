<template>
  <div>
    <div class="banner-character text-center">
      <div style="padding: 60px">
        <h1 class="white--text">MARVEL CHARACTERS</h1>
        <span class="white--text">
          Get hooked on a hearty helping of heroes and villains from the humble
          House of Ideas!
        </span>
      </div>
    </div>
    <v-container v-if="$can('list', 'character')">
      <CharactersComponent />
    </v-container>
  </div>
</template>
<script>
import CharactersComponent from '~/components/characters/characters.vue'
export default {
  name: 'CharactersPage',
  components: { CharactersComponent },
}
</script>
<style scoped>
.banner-character {
  background-image: url('~assets/img/character_background.jpg') !important;
  width: 100% !important;
  height: 300px !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  justify-content: center;
  align-items: center;
}
</style>
