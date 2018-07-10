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
	import Header from '@/components/partials/Header'
	import Navigation from '@/components/partials/Navigation'
	import Footer from '@/components/partials/Footer'
	import Copyright from '@/components/partials/Copyright'

  export default {
    name: 'Master Layout'
  }
</script>