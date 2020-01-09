<template>
  <div class="cont">
    <div class="base">
      <div class="cont_box">
        <div class="tabs">
          <div
            :class="`tab ${form.type == 'COMPANY' ? 'tab_active' : ''}`"
            @click="changeTab('COMPANY')"
          >单位用户</div>
          <div
            :class="`tab ${form.type == 'PERSON' ? 'tab_active' : ''}`"
            @click="changeTab('PERSON')"
          >个人用户</div>
        </div>

        <div class="form">
          <div class="flex form_item_box">
            <div class="form_item flex-one">
              <label for="exampleInputEmail1">单位名称</label>
              <input type="text" class="form-control" v-model="form.company" placeholder="请输入单位名称" />
            </div>
            <div class="form_item flex-one form_item_right">
              <label for="exampleInputEmail1">业务联系人</label>
              <input type="text" class="form-control" v-model="form.name" placeholder="请输入业务联系人" />
            </div>
          </div>
          <div class="flex form_item_box">
            <div class="form_item flex-one">
              <label for="exampleInputEmail1">联系人手机号</label>
              <input type="text" class="form-control" v-model="form.phone" placeholder="请输入联系人手机号" />
            </div>
            <div class="form_item form_item_right flex-one">
              <label for="exampleInputEmail1">联系人邮箱</label>
              <input type="text" class="form-control" v-model="form.email" placeholder="请输入联系人邮箱" />
            </div>
          </div>

          <div class="flex form_item_box">
            <div class="form_item" style="width: calc(50% - 30px);">
              <label for="exampleInputEmail1">验证码</label>
              <div class="flex justify-between">
                <div>
                  <input type="text" v-model="form.captcha" placeholder="请输入验证码" />
                </div>
                <img :src="captcha" height="24px;" @click="getCaptcha" />
              </div>
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
export default {
  data() {
    return {
      time: "",
      captcha: "",
      form: {
        type: "COMPANY",
        captcha: "",
        company: "",
        name: "",
        phone: "",
        email: ""
      }
    };
  },
  created() {
    this.getCaptcha();
  },
  methods: {
    async submit() {
      // if (!this.form.phone) {
      //   this.$message({
      //     message: "请输入手机号",
      //     type: "warning"
      //   });
      //   return;
      // }
      // if (!this.form.varCode) {
      //   this.$message({
      //     message: "请输入验证码",
      //     type: "warning"
      //   });
      //   return;
      // }
      let res = await this.$axios._POST(
        `/api/cms/cooperation/${this.time}?captcha=${this.form.captcha}`,
        this.form
      );
      if (res.code == "0") {
        this.$message({
          message: "提交成功",
          type: "success"
        });
        this.form = {
          type: this.form.type,
          captcha: "",
          company: "",
          name: "",
          phone: "",
          email: ""
        };
      }
    },
    getCaptcha() {
      this.time = new Date().getTime();
      this.captcha = `${require('@/../config.js')}/api/cms/captcha/${this.time}`;
    },
    changeTab(type) {
      this.form.type = type;
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