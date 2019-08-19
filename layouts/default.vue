<template>
  <el-container>
    <el-header>
      <Navbar />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
  </el-container>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "DefaultLayout",

  components: {
    Navbar
  }
};
</script>

<style scoped>
.el-header {
  padding: 0;
}
</style>