<script>
import buttonItem from '@/components/ButtonItem.vue'

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
    <br />
    <br />
  </div>
</template>
