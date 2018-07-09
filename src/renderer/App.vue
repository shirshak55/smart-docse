<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'smart-docse'
  }
</script>

<style lang="scss">
@import "assets/tabler/scss/bundle";
@import "~noty/src/noty";
@import "~noty/src/themes/bootstrap-v4";
@import "~sweetalert2/src/sweetalert2";
@import "~flatpickr/dist/flatpickr.css";
[v-cloak] {
  display: none;
}
</style>
