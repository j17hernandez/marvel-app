<template>
  <v-card style="border-radius: 20px" @click="goCharacters(item)">
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
</template>
<script>
export default {
  name: 'CardComponent',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getImage(obj) {
      return obj.path.concat('.', obj.extension)
    },
    goCharacters(item) {
      this.$store.commit('setItemCharacter', item)
      this.$router.push(`characters/${item.id}`)
    },
  },
}
</script>
