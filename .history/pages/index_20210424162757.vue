<template>
  <div v-if="!mini" class="background">
    <div class="parent">
      <p class="big-text">{{ $t('panda_swap') }}</p>
      <p class="small-text pl-3">{{ $t('home_text') }}</p>
    </div>
    <div class="footer">
      {{ $t('powered_by') }} <img class="pl-4" src="~assets/img/avaxlogo.png" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('mini'),
  },
  // watch: {
  //   mini() {

  //   },
  // },
}
</script>
<style scoped>
.background {
  width: 100vw;
  height: 100vh;
  left: -94.35px;
  top: -2px;
  background: url('~assets/img/bubble_with_bg.svg') no-repeat right;
}
.parent {
  display: inline-block;
  /* width: 500px; Can be in percentage also. */
  height: auto;
  margin: auto;
  padding: 10px;
  position: relative;
  top: 30%;
  left: 5%;
}
.big-text {
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 108px;
  letter-spacing: 0em;
  text-align: center;
}
.small-text {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #168e80;
}
.footer {
  display: inline-block;
  /* width: 500px; Can be in percentage also. */
  height: auto;
  margin: auto;
  position: relative;
  top: 50%;
  right: 20%;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.2em;
  text-align: left;
  color: #00000059;
}
</style>
