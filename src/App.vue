<template>
  <div id="app">
    <Header />
    <Main />
    <Trademark />
  </div>
</template>

<script>
import Header from './components/layout/header/Header'
import Main from './components/layout/main/Main'
import Trademark from './components/layout/etc/Trademark'

export default {
  components: { Header, Main, Trademark }
}
</script>


<style lang="scss">

/* Colors */
$color-blue: #2980b9;
$color-gray: #8a8a8a; 
$color-background: #dfdfdf;
$color-white: #FFF;


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
