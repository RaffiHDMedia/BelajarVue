<!-- <script>
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
</script> -->

<script>
import buttonItem from '@/components/ButtonItem.vue'
import { ref } from 'vue'
export default {
  components: {
    buttonItem,
  },
  setup() {
    let IsLoggin = ref(true)
    let array = ref(['Tengku', 'Pandu', 'Raffi', 'HDMedia'])
    return {
      IsLoggin,
      array,
    }
  },
}
</script>

<template>
  <div>
    <buttonItem @click="$router.push('/')"> </buttonItem>
    <h1 class="text-danger">About Page</h1>
    <h1 v-if="IsLoggin" class="text-success">Selamat anda berhasil login</h1>
    <h1 v-else class="text-danger">Maaf anda belum Bisa Login</h1>

    <h3 v-for="item in array" :key="item">
      Ini adalah anggota yeng ke {{ array.indexOf(item) + 1 }} adalah {{ item }}
    </h3>
  </div>
</template>
