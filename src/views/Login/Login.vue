<template>
  <div class="login">
    <el-card class="content">
      <div class="title">Login</div>
      <el-form>
        <el-form-item>
          <el-input class="ipt" v-model="name" placeholder="Account name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input class="ipt" v-model="password" placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="login">Login</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox class="check" v-model="checked">Automatic login next time</el-checkbox>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      name: "",
      password: "",
      checked: true
    };
  },
  methods: {
    login() {
      this.$router.push({path:'/main/home'});
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.content {
  height: 350px;
  width: 300px;
}
.title {
  font-size: 20px;
  padding: 10px 0 30px 0;
}
.ipt {
  margin-bottom: 10px;
}
.btn {
  width: 267px;
}
.check {
  float: left;
}
</style>
