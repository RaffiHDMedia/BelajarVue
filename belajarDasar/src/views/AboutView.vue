<script>
import buttonItem from '@/components/ButtonItem.vue'
import { ref } from 'vue'
export default {
  components: {
    buttonItem,
  },
}

let nama = ref('Home Page')

// Fungsi untuk mengganti nama button
const gantiNama = () => {
  nama.value = 'Home'
}
</script>

<template>
  <div>
    <buttonItem @click="$router.push('/')"> </buttonItem>
    <h1 class="text-danger">About Page</h1>
  </div>
</template>
