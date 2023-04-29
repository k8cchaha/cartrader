<script setup>
const { printMe } = useUtilities();

useHead({
  title: "Cartrader"
});

printMe("hello");
</script>

<template>
  <div>
    <CarHero />
  </div>
</template>
