<script setup>
import { ref } from 'vue'

let nama = ref('Raffi HDMedia')

// Fungsi untuk mengganti nama button
const gantiNama = () => {
  nama.value = 'Home Page'
}
</script>

<template>
  <button @click="gantiNama" class="btn btn-primary">{{ nama }}</button>
</template>

<style>
button {
  background-color: palegreen;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
}
</style>
