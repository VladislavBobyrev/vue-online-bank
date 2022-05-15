<template>
<the-sidebar/>
  <the-navbar/>
  <div class="container with-nav">
    <app-message/>
    <router-view/>
  </div>
  <the-footer/>
</template>

<script>
import TheNavbar from "../components/TheNavbar/TheNavbar.vue"
import AppMessage from "../components/ui/AppMessage.vue"
import TheSidebar from "../components/TheSidebar/TheSidebar.vue"
import TheFooter from "../components/TheFooter/TheFooter.vue"

export default {
components: {TheNavbar,AppMessage, TheSidebar, TheFooter}
}
</script>

<style>

</style>