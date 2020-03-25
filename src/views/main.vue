<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
<script>
import Header from "@/components/Navheader";
export default {
  components: {
    Header
  }
};
</script>
<style lang="less" scoped>
.el-header {
  background-color: #00122f;
}
</style>