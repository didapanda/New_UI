<template>
  <div class="background">
    <div class="parent">
      <p class="big-text">{{ $t('panda_swap') }}</p>
      <p class="small-text pl-3">{{ $t('home_text') }}</p>
    </div>
  </div>
</template>

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
  width: 500px; /* Can be in percentage also. */
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
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #168e80;
}
</style>
