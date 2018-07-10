<template>
  <div id="app">
  	<div class="page-main">
  		<Header></Header>
      	<Navigation></Navigation>
      	<router-view></router-view>
     </div>
    <Footer></Footer>
    <Copyright></Copyright>
  </div>
</template>

<script>
import Header from './components/partials/Header'
import Navigation from './components/partials/Navigation'
import Footer from './components/partials/Footer'
import Copyright from './components/partials/Copyright'
export default {
  name: 'smart-docse',
  components: { Header, Navigation, Copyright, Footer }
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
