<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row class="sidebar">
          <v-col cols="3">
            <nuxt-link nuxt :to="localePath(`/`)">
              <img
                class="img ma-6"
                max-height="150"
                max-width="250"
                alt="Pandaswap"
                src="~/assets/img/logo.svg"
              />
            </nuxt-link>
            <v-list class="pt-12">
              <v-list-item
                v-for="(item, i) in items"
                :key="i + 1"
                :to="localePath(item.to)"
                router
                exact
              >
                <v-list-item-action>
                  <img
                    class="img"
                    max-height="150"
                    max-width="250"
                    :src="item.icon"
                  />
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" />
                </v-list-item-content>
              </v-list-item>
            </v-list>
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
          icon: '~/assets/img/home.svg',
          title: this.$t('home'),
          to: '/',
        },
        {
          icon: '~/assets/img/pools.svg',
          title: this.$t('pools'),
          to: '/pools',
        },
        {
          icon: '~/assets/img/trade.svg',
          title: this.$t('trade'),
          to: '/trade',
        },
        {
          icon: '~/assets/img/bamboo.svg',
          title: this.$t('farm'),
          to: '/farm',
        },
        {
          icon: '~/assets/img/infos.svg',
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
</style>
