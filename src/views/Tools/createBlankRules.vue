<template>
  <div>
    <div class="title">Automatic rule</div>
    <el-divider></el-divider>
    <el-card>
      <div class="title">New automatic rule</div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Apply to Campaign" name="first">
          <el-form ref="form" :model="form" label-width="130px" :label-position="right">
            <el-form-item class="radio" label="Application range">
              <el-radio-group v-model="form.radio">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Select Campaign">
              <el-select v-model="value" placeholder="请选择">
                <el-option>All Campaign</el-option>
              </el-select>
              <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item class="radio" label="Check the time">
              <el-radio-group v-model="form.radio">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item class="radio" label="Send notification">
              <el-radio-group v-model="form.radio">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
              </el-radio-group>
            </el-form-item>
            <div>You will be notified when the rule executes successfully.You can see it in the message</div>
            <el-form-item label="Send notification">
              <el-input placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button>Cancel</el-button>
              <el-button type="primary" @click="onSubmit">Save</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="Apply to advertising account" name="second">配置管理</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second",
      form: {
        radio: "上海"
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.title {
  height: 50px;
  line-height: 50px;
  text-align: left;
}
.radio {
  text-align: left;
  /deep/ .el-radio-button__inner {
    width: 200px;
  }
}
</style>