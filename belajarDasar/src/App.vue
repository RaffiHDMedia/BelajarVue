<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from './components/NavbarItem.vue'

export default {
  components: {
    Navbar,
  },
}
</script>
