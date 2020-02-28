<template>
  <div id="app">
    <router-view />
    <!-- <Login /> -->
    <!-- <Header />
    <Main /> -->
  </div>
</template>

<style lang="scss">
/* Colors */
$color-blue: #2980b9;
$color-gray: #8a8a8a;
$color-background: #dfdfdf;
$color-white: #fff;

html {
  box-sizing: border-box;
  font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%
}

body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  min-height: 100vh;

  background-color: $color-background;
}
</style>
