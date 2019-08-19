<template>
  <section>
    <h1>Users Page</h1>

    <ul>
      <li
        v-for="user in users"
        :key="user"
      >

        User: {{user}}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Users",

  data: () => ({
    users: [1, 2, 3, 4, 5]
  })
};
</script>

<style>
</style>