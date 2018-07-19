<template>
  <div>
    <section class="welcome">
      <header class="header">
        <div class="container d-flex align-items-center">
          <a href="https://tabler.github.io" class="logo">
            <img src="https://tabler.github.io/assets/images/logo-white.svg" alt="Tabler logo" class="logo-image">
            tabler
          </a>
          <div class="menu ml-auto">
            <a href="https://tabler.github.io/tabler">Demo</a>
            <a href="https://github.com/tabler/tabler">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              Github
            </a>
          </div>
        </div>
      </header>


      <div class="container">
        <div class="welcome-header">
          <h1 class="welcome-title">Admin panel made simple</h1>
          <p class="welcome-description">Premium and Open Source dashboard template with responsive and high quality UI. For&nbsp;Free!</p>

          <div class="mt-6">
            <a href="https://github.com/tabler/tabler" class="btn btn-green" target="_blank">Source code</a>
            <a href="https://tabler.github.io/tabler" class="btn btn-outline ml-2">Demo</a>
          </div>
        </div>


        <div class="welcome-browser">
          <svg width="966" height="565" viewBox="0 0 966 565" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet">
            <image xlink:href="https://tabler.github.io/assets/images/macbook.png" x="0" y="0" height="565" width="966"></image>
            <image xlink:href="https://tabler.github.io/assets/images/dashboard.png" x="117" y="26" height="478" width="730"></image>
          </svg>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
require('typeface-quicksand')
export default {
  name: 'dashboard',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../assets/tabler/scss/home/scss/style"
</style>
