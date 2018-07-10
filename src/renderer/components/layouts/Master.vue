<template>
  <div>
		<div class="page-main">
  			<Header></Header>
      	<Navigation></Navigation>
      	<router-view :key="$route.name"></router-view>
     </div>
    <Footer></Footer>
    <Copyright></Copyright>
  </div>
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