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
@import "./assets/tabler/scss/variables";
@import "./assets/tabler/scss/dashboard/functions";
@import "./assets/tabler/scss/dashboard/cards";
@import "./assets/tabler/scss/dashboard/tag";
@import "./assets/tabler/scss/dashboard/forms/custom-switch";
@import "./assets/tabler/scss/dashboard/fonts/feather";
@import "noty/src/noty";
@import "noty/src/themes/bootstrap-v4";
@import "sweetalert2/src/sweetalert2";
@import "flatpickr/dist/flatpickr.css";
[v-cloak] {
  display: none;
}
</style>
