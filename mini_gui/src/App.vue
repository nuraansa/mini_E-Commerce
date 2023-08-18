<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/NavbarComp.vue';
import Footer from './components/FooterComp.vue';

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style></style>
