<template>
  <section class="error-wrapper">
    <h1 class="title">ERROR 404</h1>
    <nuxt-link class="link-to" to="/">Home</nuxt-link>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.error-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
}

.title {
  font-weight: bold;
  font-size: 38px;
  color: red;
}
</style>