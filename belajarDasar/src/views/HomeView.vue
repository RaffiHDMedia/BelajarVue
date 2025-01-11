<script>
import buttonItem from '../components/buttonItem.vue'

export default {
  components: {
    buttonItem,
  },
}
</script>

<template>
  <div>
    <h1 class="text-danger">Home Page</h1>
    <p class="text-success">Ini adalah halaman Home Berhasil memasang Botstrap</p>
    <buttonItem @click="$router.push('/aboutView')" />
  </div>
</template>
