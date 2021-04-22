<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row class="logo">
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
            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i + 1"
                :to="localePath(item.to)"
                router
                exact
              >
                <v-list-item-action>
                  <v-icon fab dark color="primary">{{ item.icon }}</v-icon>
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
