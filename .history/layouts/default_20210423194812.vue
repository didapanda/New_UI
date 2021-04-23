<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row class="sidebar" justify="center">
          <v-col cols="3">
            <v-navigation-drawer width="350" permanent app>
              <nuxt-link nuxt :to="localePath(`/`)">
                <div class="ml-12">
                  <img
                    class="img"
                    max-height="150"
                    max-width="250"
                    alt="Pandaswap"
                    src="~/assets/img/logo.svg"
                  />
                </div>
              </nuxt-link>
              <v-list class="pt-16 mt-16 ml-12 mr-8" nav rounded>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i + 1"
                  class="item"
                  :to="localePath(item.to)"
                  router
                  exact
                >
                  <v-list-item-icon class="ml-12">
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <hr class="hr mx-4" />
              <div class="pt-4 text-center">
                <span>{{ $t('bamboo_price') }}</span>
              </div>
            </v-navigation-drawer>
          </v-col>
          <v-col cols="9">
            <nuxt />
          </v-col>
        </v-row>
        <Toast></Toast>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
    }
  },
  computed: {
    items() {
      return [
        {
          icon: 'mdi-home',
          title: this.$t('home'),
          to: '/',
        },
        {
          icon: 'mdi-home',
          title: this.$t('pools'),
          to: '/pools',
        },
        {
          icon: 'mdi-home',
          title: this.$t('trade'),
          to: '/trade',
        },
        {
          icon: 'mdi-swap-horizontal-bold',
          title: this.$t('farm'),
          to: '/farm',
        },
        {
          icon: 'mdi-information',
          title: this.$t('infos'),
          to: '/infos',
        },
      ]
    },
  },
  methods: {
    goto() {
      this.$router.push('/content/companies')
    },
    name() {
      return 'name'
    },
  },
}
</script>

<style scoped>
.icon {
  height: 40px;
  width: 40px;
}
.sidebar {
  height: 100vh;
}
.img {
  margin-top: 40px;
  margin-left: -20px !important;
  z-index: 900 !important;
}
/* .item {
  height: 60px;
  max-width: 224px;
} */
.hr {
  max-width: 320px;
}
</style>
