<template>
  <div class="home">
    <el-card>123</el-card>
    <el-row style="justify-content:space-between;text-align: center">
      <el-col :span="6">1</el-col>
      <el-col :span="6">1</el-col>
      <el-col :span="6">1</el-col>
      <el-col :span="6">1</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
<style lang="less">
.home {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid #000;
}
</style>
