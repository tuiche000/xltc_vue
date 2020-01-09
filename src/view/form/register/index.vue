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
          <div style="text-align: center">
            <button @click="register" type="button">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const config = require("@/../config.js");
import { mapMutations } from "vuex";
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
    ...mapMutations(['SET_REGISTER']),
    async register() {
      if (!this.form.phone) {
        this.$message({
          message: "请输入手机号",
          type: "warning"
        });
        return;
      }
      if (!this.form.varCode) {
        this.$message({
          message: "请输入验证码",
          type: "warning"
        });
        return;
      }
      let res = await this.$axios._GET(`${config.host2}/api/oss/user/${this.form.phone}/check/${this.form.varCode}`);
      if (res.code == '0') {
        this.SET_REGISTER(this.form)
        this.$router.push('/form/more')
      }
    },
    async getSms() {
      if (!this.form.phone) {
        this.$message({
          message: "请输入手机号",
          type: "warning"
        });
        return;
      }
      const res = await this.$axios._GET(
        `${config.host2}/api/oss/user/${this.form.phone}/register/message`
      );
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