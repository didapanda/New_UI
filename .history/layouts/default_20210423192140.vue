<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <nuxt-link nuxt :to="localePath(`/`)">
            <img
              class="img ma-6"
              max-height="150"
              max-width="250"
              alt="Pandaswap"
              src="~/assets/img/logo.svg"
            />
          </nuxt-link>
        </v-row>
        <v-row class="sidebar" justify="center">
          <v-navigation-drawer permanent>
            <v-list class="pt-16 mt-16" nav rounded>
              <v-list-item
                v-for="(item, i) in items"
                :key="i + 1"
                class="item"
                :to="localePath(item.to)"
                router
                exact
              >
                <v-list-item-icon class="">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" />
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <hr class="hr" />
            <div class="pt-4 text-center">
              <span>{{ $t('bamboo_price') }}</span>
            </div>
          </v-navigation-drawer>
          <nuxt />
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
/* .item {
  height: 60px;
  max-width: 224px;
} */
.hr {
  max-width: 290px;
}
</style>
