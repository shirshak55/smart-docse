<template>
  <main>
		<div class="page-main">
  			<Header></Header>
      	<Navigation></Navigation>
        <div class="my-3 my-md-5">
          <div class="container">
            <router-view :key="$route.name"></router-view>
          </div>
        </div>
     </div>
    <Footer></Footer>
    <Copyright></Copyright>
  </main>
</template>

<script>
import Header from '@/components/partials/Header'
import Navigation from '@/components/partials/Navigation'
import Footer from '@/components/partials/Footer'
import Copyright from '@/components/partials/Copyright'

export default {
  name: 'master-layout',
  components: { Header, Navigation, Copyright, Footer }
}
</script>


<style lang="sass">
  @import '~noty/src/themes/bootstrap-v4'
  @import '~@/assets/tabler/scss/bundle'
  @import '~noty/src/noty'
  @import '~flatpickr/dist/flatpickr.css'

  [v-cloak]
    display: none
</style>
