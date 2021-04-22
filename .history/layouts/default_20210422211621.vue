<template>
  <v-app>
    <div class="logo">
      <nuxt-link nuxt :to="localePath(`/`)">
        <img
          class="img"
          max-height="150"
          max-width="250"
          alt="Pandaswap"
          src="~/assets/img/logo.svg"
        />
      </nuxt-link>
    </div>
    <v-navigation-drawer fixed app>
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
    </v-navigation-drawer>

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
    title() {
      return this.$t('shoe_box_admin')
    },
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
  watch: {
    lang() {
      this.$vuetify.lang.current = this.lang
      this.$i18n.setLocale(this.lang)
    },
  },
  mounted() {
    const theme = localStorage.getItem('dark_theme')
    if (theme) {
      if (theme === 'true') {
        this.$vuetify.theme.dark = true
      } else {
        this.$vuetify.theme.dark = false
      }
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.$vuetify.theme.dark = true
      localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString())
    }
  },
  methods: {
    goto() {
      this.$router.push('/content/companies')
    },
    name() {
      return 'name'
    },
    async logout() {
      await this.$auth.logout()
    },
    toggle_dark_mode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString())
    },
  },
}
</script>

<style scoped>
.child_icon {
  font-size: 14px;
  padding-left: 20px;
}
.child_icon_mini {
  font-size: 14px;
  padding-left: 4px;
}
.child_title {
  font-size: 14px;
}
.content_icon {
  padding-right: 32px;
}
.submenu {
  min-height: 15px;
}
</style>
