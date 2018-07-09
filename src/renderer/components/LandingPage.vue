<template>
  <div>
    <div class="page-main">
      <Header></Header>
      <Navigation></Navigation>
      <Home></Home>
    </div>
    <Footer></Footer>
    <Copyright></Copyright>
  </div>
</template>

<script>
  import Header from './partials/Header'
  import Navigation from './partials/Navigation'
  import Footer from './partials/Footer'
  import Copyright from './partials/Copyright'
  import Home from './Home'

  export default {
    name: 'landing-page',
    components: { Header, Navigation, Home, Copyright, Footer },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>