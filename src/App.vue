<template>
  <div id="app">
    <mheader></mheader>
  </div>
</template>

<script>
import Mheader from 'components/m-header/m-header'
export default {
  components: {
    Mheader
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "common/stylus/variable"
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-theme;
  margin-top: 60px;
</style>
