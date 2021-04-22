<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row class="logo">
          <v-col cols="3" class="ma-6">
            <nuxt-link nuxt :to="localePath(`/`)">
              <img
                class="img"
                max-height="150"
                max-width="250"
                alt="Pandaswap"
                src="~/assets/img/logo.svg"
              />
            </nuxt-link>
          </v-col>
        </v-row>
        <Toast></Toast>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
      fling: false,
      tabs: null,
      transition: 'slide-y-reverse-transition',
      hidden: false,
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      rightDrawer: false,
    }
  },
  computed: {
    items() {
      return [
        {
          icon: 'mdi-apps',
          title: this.$t('dashboard'),
          to: '/',
        },
        {
          icon: 'mdi-cog',
          title: this.$t('retailer_configuration'),
          to: '/retailer-configuration',
        },
        {
          icon: 'mdi-application',
          title: this.$t('applications'),
          to: '/applications',
        },
      ]
    },
    content() {
      return [
        {
          icon: 'mdi-table-of-contents',
          title: this.$t('content'),
          to: '/content/companies',
          child: [
            {
              title: 'Companies',
              to: '/content/companies',
              icon: 'mdi-office-building-outline',
            },
            { title: 'Stores', to: '/content/stores', icon: 'mdi-store' },
            {
              title: 'Shops',
              to: '/content/shops',
              icon: 'mdi-map-marker',
            },
            {
              title: 'Components',
              to: '/content/components',
              icon: 'mdi-devices',
            },
          ],
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

<style scoped></style>
