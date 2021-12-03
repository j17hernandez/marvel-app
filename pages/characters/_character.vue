<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="3">
        <CardComponent :item="itemCharacter" />
      </v-col>
      <v-col>
        <span>
          {{ itemCharacter.description }}
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CardComponent from '@/components/common/Cards.vue'
export default {
  name: 'CharacterApp',
  components: {
    CardComponent,
  },
  data() {
    return {
      itemCharacter: {},
    }
  },
  created() {
    this.itemCharacter = localStorage.getItem('setItemCharacter')
      ? JSON.parse(localStorage.getItem('setItemCharacter'))
      : {}
  },
}
</script>
