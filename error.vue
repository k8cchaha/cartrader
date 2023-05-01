<script setup>
const handleError = () => {
  // navigateTo("/");
  clearError({
    redirect: "/"
  });
};

const error = useError();
</script>

<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-9xl">{{ error.statusCode }}</h1>
    <p class="mt-7 text-4xl">{{ error.message }}</p>
    <button
      @click="handleError"
      class="mt-7 rounded text-2xl px-7 py-4 bg-blue-400 text-white"
    >
      Go Back
    </button>
  </div>
</template>
