<template>
  <div>
    <div class="title">Automatic rule</div>
    <el-divider></el-divider>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane style="font-size: 0.2rem" label="Rule management" name="rule">
        <el-card style="margin-bottom:20px">
          <div slot="header" class="title">New automatic rule</div>
          <div v-for="o in 3" :key="o">
            <el-col :span="6">
              <el-card></el-card>
            </el-col>
          </div>
        </el-card>
        <el-card>
          <div slot="header" class="title">Automatic rules created</div>
          <div>
            <el-table :data="tableData">
              <el-table-column label="Run/Pause">
                <template slot-scope="scope">
                  <el-switch
                    v-model="scope.row.pause"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                  ></el-switch>
                </template>
              </el-table-column>
              <el-table-column label="Rule name" prop="rulename"></el-table-column>
              <el-table-column label="Rule ID" prop="ruleid"></el-table-column>
              <el-table-column label="Execution object" prop="executionobject"></el-table-column>
              <el-table-column label="Creator" prop="creator"></el-table-column>
              <el-table-column label="Operating" prop="operating">
                <template slot-scope="scope">
                  <el-button
                    size="small"
                    type="text"
                    @click="handleEdit(scope.$index, scope.row)"
                  >Edit</el-button>
                  <el-button
                    size="small"
                    type="text"
                    @click="handleDelete(scope.$index, scope.row)"
                  >Delete</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage3"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000"
              style="text-align: right"
            ></el-pagination>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane style="font-size: 0.2rem" label="Running record" name="running">
        <el-row>
          <el-col :span="8">
            <el-input placeholder="请输入内容">
              <el-select slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search">Search</el-button>
            </el-input>
          </el-col>
          <el-col :offset="8" :span="6">
            <el-date-picker
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00']"
            ></el-date-picker>
          </el-col>
        </el-row>
        <el-table :data="tableData2">
          <el-table-column label="Rule name" prop="rulename"></el-table-column>
          <el-table-column label="Rule time" prop="ruletime"></el-table-column>
          <el-table-column label="Running object" prop="runningobject"></el-table-column>
          <el-table-column label="To meet the conditions" prop="tomeet"></el-table-column>
          <el-table-column label="Run result" prop="runresult"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Tool",
  data() {
    return {
      activeName: "rule",
      currentPage3: 4,
      tableData: [
        {
          pause: true,
          rulename: "测试",
          ruleid: 1024,
          executionobject: "All advertising plans",
          creator: "Mr_jing"
        },
        {
          pause: false,
          rulename: "测试",
          ruleid: 1024,
          executionobject: "All advertising plans",
          creator: "Mr_jing"
        },
        {
          pause: true,
          rulename: "测试",
          ruleid: 1024,
          executionobject: "All advertising plans",
          creator: "Mr_jing"
        },
        {
          pause: false,
          rulename: "测试",
          ruleid: 1024,
          executionobject: "All advertising plans",
          creator: "Mr_jing"
        },
        {
          pause: true,
          rulename: "测试",
          ruleid: 1024,
          executionobject: "All advertising plans",
          creator: "Mr_jing"
        },
        {
          pause: false,
          rulename: "测试",
          ruleid: 1024,
          executionobject: "All advertising plans",
          creator: "Mr_jing"
        }
      ],
      tableData2: [
        {
          rulename: "测试",
          ruletime: "2020.03.23 18:16:00",
          runningobject: "测试机器",
          tomeet: "测试",
          runresult: "完成"
        }
      ]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  components: {}
};
</script>
<style lang="less">
.title {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.2rem;
  text-align: left;
}
.el-col-6:first-child {
  height: 200px;
  margin-right: 20px;
}
.el-card__body:first-child {
  height: 120px;
}
.el-tabs__content {
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;
}
</style>