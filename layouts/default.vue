<template>
  <v-app dark>
    <v-app-bar color="orange" :clipped-left="clipped" fixed app dense>
      <v-toolbar-title v-text="title" />
      <template v-slot:extension>
        <v-tab
          v-for="(item, i) in items"
          :key="i"
          align-with-title
          :to="item.to"
          router
          exact
        >
          <v-tab v-icon="item.icon" v-text="item.title"></v-tab>
        </v-tab>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-calculator',
          title: 'Income',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Terminal Table',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Coffee Shop',
    }
  },
}
</script>
<style>
.theme--dark.v-application {
  background-image: url('https://i.pinimg.com/originals/2b/d4/d5/2bd4d5c457a9edff2ec7f088f11a8aae.jpg');
}
</style>
