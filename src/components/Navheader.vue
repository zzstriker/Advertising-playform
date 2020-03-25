<template>
  <div class="header">
    <div class="header-left">
      <img />
      <el-divider direction="vertical"></el-divider>
      <div style="display: inline-block">Advertising platform</div>
    </div>
    <div class="header-center">
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/main/home">Home</el-menu-item>
        <el-menu-item index="/main/campaigns">campaigns</el-menu-item>
        <el-menu-item index="/main/report">Report</el-menu-item>
        <el-menu-item index="/main/tool">Tool</el-menu-item>
      </el-menu>
      <!-- <ul role="menubar" class="menu">
        <li role="menuitem" @click="jump('/main/home')">Home</li>
        <li role="menuitem" @click="jump('/main/campaigns')">campaigns</li>
        <li role="menuitem" @click="jump('/main/report')">Report</li>
        <li role="menuitem" @click="jump('/main/tool')">Tool</li>
      </ul>-->
    </div>
    <div class="header-right">
      <img class="image" src="@/assets/header/message.png" alt />
      <img class="image" src="@/assets/header/user.png" alt />
      <div class="blk">
        <div>Mr_jing</div>
        <div>ID:16587637882</div>
      </div>
      <el-dropdown>
        <img class="imageright" src="@/assets/header/triangle.png" alt />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Account management</el-dropdown-item>
          <el-dropdown-item>sign out</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key) {
      this.$router.push({ path: key });
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
/deep/ .el-menu {
  background-color: transparent;
}
.el-menu--horizontal > .el-menu-item {
  color: #fff;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover,
.el-menu--horizontal > .el-menu-item.is-active {
  background: transparent;
  color: #409eff;
}
.header {
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-direction: row;
}
.header-left {
  flex: 1;
  color: #fff;
  font-size: 20px;
}
.header-center {
  flex: 2;
  color: #000;
  font-size: 20px;
}
.menu {
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  > li {
    float: left;
    color: #fff;
    margin-left: 40px;
  }
}
.header-right {
  flex: 1;
  color: #fff;
  font-size: 10px;
  text-align: right;
}
.blk {
  display: inline-block;
  height: 50px;
}
.image {
  height: 20px;
  margin-right: 20px;
}
.imageright {
  height: 20px;
}
.blk > div {
  height: 25px;
  line-height: 25px;
}
</style>