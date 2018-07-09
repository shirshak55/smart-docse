<template>
  <div>
    <Header></Header>
    <Navigation></Navigation>
    <Footer></Footer>
    <Copyright></Copyright>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  import Header from './Templates/Header'
  import Navigation from './Templates/Navigation'
  import Footer from './Templates/Footer'
  import Copyright from './Templates/Copyright'

  export default {
    name: 'landing-page',
    components: { SystemInformation, Header, Navigation, Copyright, Footer },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>