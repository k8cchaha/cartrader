<script setup>
const { printMe } = useUtilities();
const { data } = await useFetch('/api/simpledata')

useHead({
  title: "Cartrader"
});

printMe("hello");
</script>

<template>
  <div>
    <CarHero />
    <pre>{{ data }}</pre>
  </div>
</template>
