<template>
  <div class="parent">
    <h1 class="title">{{$t('pools')}}</h1>
    <div class="background">
      <img class="img" src="~assets/img/Group.png" />
    </div>
  </div>
</template>

<style scoped>
.title {
  color: #335d2d;
  font-style: normal;
  font-size: 72px !important;
  font-weight: 700;
}
.background {
  width: 100vw;
  height: 100vh;
}
.img {
  position: fixed;
  right: 0px;
  bottom: 0px;
}
.parent {
  width: 100vw;
  height: 100vh;
}
</style>
