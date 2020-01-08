<template>
  <div class="cont">
    <div class="base">
      <div class="cont_box">
        <div class="tabs">
          <div class="tab tab_active" onclick="changeTab(0)">注册</div>
        </div>
        <div class="form form_active">
          <div class="form_item">
            <input type="tel" v-model="form.phone" placeholder="请输入手机号码" />
          </div>
          <div class="form_item">
            <div class="flex justify-between">
              <input type="password" v-model="form.varCode" placeholder="请输入验证码" />
              <a href="javascript:void(0)" @click="getSms">获取验证码</a>
            </div>
          </div>

          <button @click="register" type="button">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        phone: undefined,
        varCode: undefined,
        clientId: "1qUvjuFXqi3rpr88epJwfw",
        clientSecret: "ToWFZGGUkkCv3Y64CmT33FP3bsXS9tMa"
      }
    };
  },
  created() {},
  methods: {
    async register() {
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
        "https://check.fothing.com/api/oss/user/register",
        this.form
      );
      window.console.log(res)
    },
    async getSms() {
      const res = await this.$axios._GET(
        `https://check.fothing.com/api/oss/user/${this.form.phone}/register/message`
      );
      window.console.log(res.code)
      if (res.code == "0") {
        this.$message({
          message: "已发送，请注意查收短信",
          type: "success"
        });
      }
    }
  }
};
</script>

<style scoped>
@import "../common.css";
</style>