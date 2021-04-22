<template>
  <v-app>
    <v-row class="logo">
      <v-col cols=2>
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
    <!-- <v-navigation-drawer fixed app>
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
        <v-list-group v-for="(item, i) in content" :key="i" router exact>
          <template #activator>
            <v-icon fab dark class="content_icon" color="primary">{{
              item.icon
            }}</v-icon>
            <v-list-item-content>
              <v-list-item-title @click="goto()" v-text="item.title">
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="child in item.child"
            :key="child.title"
            :to="localePath(child.to)"
            class="submenu"
            router
            exact
          >
            <v-list-item-action>
              <v-icon
                v-if="!miniVariant"
                class="child_icon"
                fab
                dark
                color="primary"
              >
                {{ child.icon }}</v-icon
              >
              <v-icon
                v-if="miniVariant"
                class="child_icon_mini"
                fab
                dark
                color="primary"
              >
                {{ child.icon }}</v-icon
              >
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                class="child_title"
                v-text="child.title"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer> -->

    <v-main>
      <v-container fluid>
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
