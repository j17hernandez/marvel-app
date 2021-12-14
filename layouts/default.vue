<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click="() => $router.back()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid style="padding: 0px">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>
        &copy; {{ new Date().getFullYear() }} Developer Jorge Hernández
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'MarvelApp',
  middleware: ['permissions_tree'],
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Characters',
          to: '/characters',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
}
</script>
