<script setup>
import { useNow } from '@vueuse/core'
const now = useNow()
import { refDebounced } from '@vueuse/core'
const query = ref('')
refDebounced(query, 1000)

const { data, pending, error } = useFetch(()=>`/api/carsdata?q=${query.value}`)

</script>

<template>
  <div>API Testing</div>
  <input type="text" v-model="query" placeholder="Search">
  <pre>{{ data }}</pre>
  <div>Now : {{ now }}</div>
</template>