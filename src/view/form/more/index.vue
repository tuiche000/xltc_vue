<template>
  <div class="cont">
    <div class="base">
      <div class="cont_box">
        <div style="font-size: 18px;">请填写真实信息</div>

        <div class="form">
          <div class="flex form_item_box">
            <div class="form_item flex-one">
              <label for="exampleInputEmail1">真实姓名：</label>
              <input type="text" class="form-control" v-model="form.name" placeholder="请输入真实姓名：" />
            </div>
            <div class="form_item flex-one form_item_right">
              <label for="exampleInputEmail1">所在地区</label>
              <el-cascader v-model="form.regionId" :options="options" :props="props"></el-cascader>
            </div>
          </div>
          <div class="flex form_item_box">
            <div class="form_item flex-one">
              <label for="exampleInputEmail1">* 所在单位：</label>
              <input
                type="text"
                class="form-control"
                v-model="form.departmentName"
                placeholder="请输入所在单位"
              />
            </div>
            <div class="form_item form_item_right flex-one">
              <label for="exampleInputEmail1">* 邮箱</label>
              <input type="text" class="form-control" v-model="form.email" placeholder="请输入联系人邮箱" />
            </div>
          </div>

          <div class="flex form_item_box">
            <div class="form_item" style="width:100%;">
              <label for="exampleInputEmail1">单位统一社会信用号：</label>
              <input
                class="form-control"
                type="text"
                v-model="form.taxcode"
                placeholder="请输入单位统一社会信用号"
              />
            </div>
          </div>
          <div style="text-align: center;">
            <button type="button" @click="submit">完成</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      time: "",
      captcha: "",
      options: [],
      props: {
        lazy: true,
        value: "id",
        label: "name",
        lazyLoad: async (node, resolve) => {
          window.console.log(node)
          window.console.log(resolve)
          const { level, data } = node;
          setTimeout(async () => {
            let res = await this.$axios._GET(`${require("@/../config.js").host2}/api/oss/region/${data.id}/children`);
            if (res.code == '0') {
              const nodes = res.data.map(item => {
                return {
                  ...item,
                  leaf: !item.hasChildren
                }
              })
              resolve(nodes) 
            }
            window.console.log(level)
            // const nodes = Array.from({ length: level + 1 }).map(item => ({
            //   value: ++id,
            //   label: `选项${id}`,
            //   leaf: level >= 2
            // }));
            // // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            // resolve(nodes);
          }, 1000);
        }
      },
      form: {
        name: "",
        regionId: "",
        departmentName: "",
        email: "",
        taxcode: ""
      }
    };
  },
  computed: {
    ...mapState(["register"])
  },
  created() {
    this.regionAll();
  },
  methods: {
    async submit() {
      if (!this.form.email) {
        this.$message({
          message: "请输入邮箱",
          type: "warning"
        });
        return;
      }
      if (!this.form.departmentName) {
        this.$message({
          message: "请输入公司名",
          type: "warning"
        });
        return;
      }
      if (!this.form.name) {
        this.$message({
          message: "请输入姓名",
          type: "warning"
        });
        return;
      }
      if (!this.form.regionId) {
        this.$message({
          message: "请选择地区",
          type: "warning"
        });
        return;
      } else {
        this.form.regionId = this.form.regionId[this.form.regionId.length - 1]
      }
      if (!this.form.taxcode) {
        this.$message({
          message: "请输入单位统一社会信用号",
          type: "warning"
        });
        return;
      }
      let res = await this.$axios._POST(
        `${require("@/../config.js").host2}/api/oss/user/register`,
        {
          ...this.register,
          ...this.form
        }
      );
      if (res.code == "0") {
        this.$message({
          message: "注册成功",
          type: "success"
        });
        this.$router.push('/form/login')
      }
    },
    async regionAll() {
      let res = await this.$axios._GET(
        `${require("@/../config.js").host2}/api/oss/region/firstlevel`
      );
      this.options = res.data;
    }
  }
};
</script>

<style scoped>
@import "../common.css";
.top {
  height: 460px;
  background: #2256c9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cont {
  height: 523px;
  display: flex;
  justify-content: center;
  padding-bottom: 150px;
}

.base {
  /* margin-top: -171px; */
  width: 1080px;
  background-color: #ffffff;
  box-shadow: 0px 0px 23px 4px rgba(142, 142, 142, 0.22);
}

.cont_box {
  padding: 70px 85px 40px 85px;
}

.form_item_box {
  margin-top: 50px;
}

.form_item_right {
  margin-left: 60px;
}
</style>