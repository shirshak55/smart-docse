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

<style scss>

// Tabler bootstrap variables
@import "../../vendor/tabler/scss/variables";

// Custom Variables
@import "variables";

// Thème CoreUI
@import "~@coreui/coreui/scss/coreui";
@import "~bootstrap-vue/dist/bootstrap-vue.css";

// Tabler components
@import "../../vendor/tabler/scss/dashboard/functions";
@import "../../vendor/tabler/scss/dashboard/cards";
@import "../../vendor/tabler/scss/dashboard/tag";
@import "../../vendor/tabler/scss/dashboard/forms/custom-switch";
@import "../../vendor/tabler/scss/dashboard/fonts/feather";

// Plugins
@import "~noty/src/noty";
@import "~noty/src/themes/bootstrap-v4";
@import "~sweetalert2/src/sweetalert2";
@import "~flatpickr/dist/flatpickr.css";
@import "../buttons";

[v-cloak] {
  display: none;
}
</style>
