<template>
  <el-menu
    :default-active="routeName"
    mode="horizontal"
    router
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item
      v-for="item in menuList"
      :key="item.page"
      :index="item.page"
      :route="{ name: item.page }"
    >
      {{ item.name }}
    </el-menu-item>
  </el-menu>
</template>

<script>
const menuList = [
  { name: "Home", page: "index" },
  { name: "Users", page: "users" },
  { name: "About", page: "about" }
];

export default {
  name: "Navbar",

  data() {
    return {
      menuList
    };
  },

  computed: {
    routeName() {
      if (!this.$route.name) {
        return "";
      }

      return this.$route.name;
    }
  }
};
</script>
