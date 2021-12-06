<template>
  <v-card style="border-radius: 20px" max-width="330px" @click="go(item)">
    <v-card-text class="p-0" style="padding: 0px">
      <v-img
        :src="getImage(item.thumbnail)"
        :lazy-src="require('assets/img/jar-loading.gif')"
        :alt="item.name"
        width="330px"
        height="330px"
        style="border-radius: inherit"
        class="image"
      />
    </v-card-text>
    <v-card-title v-if="name || title" class="d-flex justify-center">
      <v-tooltip v-if="name" bottom>
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
      <v-tooltip v-if="title" bottom>
        <template #activator="{ attrs, on }">
          <span v-bind="attrs" v-on="on">
            {{
              item.title.length > 22
                ? item.title.substr(0, 22).concat('...')
                : item.title
            }}
          </span>
        </template>
        {{ item.title }}
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
    name: {
      type: Boolean,
      default: false,
    },
    title: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getImage(obj) {
      return obj.path.concat('.', obj.extension)
    },
    go(item) {
      this.$emit('go', item)
      // this.$store.commit('setItemCharacter', item)
      // this.$router.push(`characters/${item.id}`)
    },
  },
}
</script>
