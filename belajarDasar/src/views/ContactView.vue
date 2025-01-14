<template>
  <div>
    <p>{{ message }}</p>
    <button @click="updateMessage">Klik</button>
    <br /><br />

    <div>
      <label> <input type="checkbox" v-model="selectedFruits" value="Apel" /> Apel </label>
      <label> <input type="checkbox" v-model="selectedFruits" value="Mangga" /> Mangga </label>
      <label> <input type="checkbox" v-model="selectedFruits" value="Pisang" /> Pisang </label>
      <p>Buah yang dipilih: {{ selectedFruits }}</p>
    </div>
    <p>{{ count }}</p>
    <button @click="increment">Tambah</button>
    <button @click="reset">reset</button>

    <buttonItem @click="$router.push('/')" />
    <BUtton @click="goBack">kEMBALI HOME</BUtton>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()

    const goBack = () => {
      router.push('/')
    }

    const count = ref(0)
    const message = ref('Hello Vue!')

    const increment = () => {
      count.value++
    }

    const reset = () => {
      count.value = 0
    }
    const updateMessage = () => {
      message.value = 'Hello Composition API!'
    }

    const selectedFruits = ref([])

    return { message, updateMessage, selectedFruits, count, increment, reset, route, goBack }
  },
}
</script>
