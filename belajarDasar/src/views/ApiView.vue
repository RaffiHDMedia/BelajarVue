<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const users = ref([])
    const AmbilDataUser = async () => {
      try {
        const response = await axios.get('https://api.restful-api.dev/objects')
        users.value = response.data
        console.log(users.value)
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(AmbilDataUser)
    return { users }
  },
}

console.log('Ini adalah halaman untuk menampilan data API')
</script>

<template>
  <p class="text-success fw-bold">Ini adalah halaman untuk menampilan data API</p>

  <h1 class="text-danger fw-bold">List data User (axios)</h1>
  <ul class="list-group" v-if="users.length > 0">
    <li class="list-group-item" v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
  <p v-else>Loading...</p>
</template>
