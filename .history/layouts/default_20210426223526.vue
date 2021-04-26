<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      width="350"
      fixed
      app
      :mini-variant-width="80"
      :mini-variant="miniVariant"
      permanent
    >
      <nuxt-link nuxt :to="localePath(`/`)">
        <div v-if="!miniVariant" class="ml-12">
          <img
            class="img"
            max-height="150"
            max-width="250"
            alt="Pandaswap"
            src="~/assets/img/logo.svg"
          />
        </div>
        <div v-if="miniVariant" class="ml-2">
          <img
            class="img-small"
            max-height="150"
            max-width="250"
            alt="Pandaswap"
            src="~/assets/img/Logo_panda.svg"
          />
        </div>
      </nuxt-link>
      <v-list
        v-if="!miniVariant"
        class="pt-16 mt-16 ml-12 mr-8"
        nav
        dense
        rounded
      >
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
      <v-list v-if="miniVariant" class="pt-16 mt-16" nav dense rounded>
        <v-list-item
          v-for="(item, i) in items"
          :key="i + 1"
          class="item"
          :to="localePath(item.to)"
          router
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
      <hr class="hr mx-4" />
      <div class="pt-4 text-center">
        <span class="text">{{ $t('bamboo_price') }}</span>
        <br />
        <span v-if="!miniVariant" class="bamboo-value mr-16 pr-2"
          >{{ bamboo_value }}
        <span v-if="miniVariant" class="bamboo-value">{{ bamboo_value }}</span>
      </div>
      <v-btn
        v-if="!miniVariant"
        class="button"
        @click="handleConnectProvider"
        outlined
        rounded
        color="black"
      >
        {{ $t('connect_wallet') }}
      </v-btn>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pa-0 background" fluid>
        <Toast></Toast>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      fab: false,
      drawer: true,
    }
  },
  computed: {
    bamboo_value() {
      return '$0.5'
    },
    miniVariant() {
      this.$store.commit('setMini', this.$vuetify.breakpoint.mdAndDown)
      return this.$vuetify.breakpoint.mdAndDown
    },
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
          icon: 'mdi-swap-horizontal-bold',
          title: this.$t('trade'),
          to: '/trade',
        },
        {
          icon: 'mdi-tractor',
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
    handleConnectProvider() {
      this.$eth.connect()
      this.$eth.walletDetected()
    },
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
.img {
  margin-top: 40px;
  margin-left: -20px !important;
  z-index: 900 !important;
}
.img-small {
  margin-top: 40px;
}
/* .item {
  height: 60px;
  max-width: 224px;
} */
.hr {
  max-width: 320px;
}
.text {
  color: #00000059;
  font-weight: 700;
  font-size: 14px;
}
.bamboo-value {
  font-weight: 700;
  font-size: 18px;
}
.button {
  left: 84px;
  position: absolute;
  bottom: 46px;
}
.background {
  width: 100vw;
  height: 100vh;
  background: url('~assets/img/typebg.svg') no-repeat center;
  z-index: 0;
}
</style>
