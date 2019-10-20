<template>
  <section>
    <h1>Users Page</h1>
    <ul>
      <li
        v-for="user in users"
        :key="user"
      >
        <a
          href="#"
          @click.prevent="goToUser(user)"
        >User: {{user}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Users",

  data: () => ({
    users: [1, 2, 3, 4, 5]
  }),

  methods: {
    goToUser(user) {
      this.$router.push(`/users/${user}`);
    }
  }
};
</script>

<style>
</style>