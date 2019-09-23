<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-for="(item, index) in items" :key="index" :to="item.path">
          <v-list-item-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ISO 27001 Checklist</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      {
        path: "/",
        title: "Chequeo de cumplimiento",
        icon: "mdi-file-document-box-check-outline"
      },
      {
        path: "/ControlCheck",
        title: "Chequeo de control",
        icon: "mdi-file-document-box-check-outline"
      },
      {
        path: "/DomainCheck",
        title: "Chequeo de dominio",
        icon: "mdi-file-document-box-check-outline"
      },
      {
        path: "/Graphics",
        title: "Graficas",
        icon: "mdi-chart-bar"
      },
      {
        path: "/Dictionary",
        title: "Diccionario",
        icon: "mdi-book-search-outline"
      }
    ]
  })
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>