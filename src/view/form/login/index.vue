<template>
  <div class="cont">
    <div class="base">
      <div class="cont_box">
        <div class="tabs">
          <div :class="`tab ${form_active == 1 ? 'tab_active' : ''}`" @click="changeTab(1)">密码登录</div>
          <div :class="`tab ${form_active == 2 ? 'tab_active' : ''}`" @click="changeTab(2)">短信登录</div>
        </div>
        <div class="form" v-if="form_active == 1">
          <div class="form_item">
            <input type="tel" v-model="form_pass.phone" placeholder="请输入手机号码" />
          </div>
          <div class="form_item">
            <div class="flex justify-between">
              <input type="password" v-model="form_pass.password" placeholder="请输入密码" />
              <!-- <a href="javascript:void(0)">忘记密码</a> -->
            </div>
          </div>
          <div style="text-align: center">
            <button type="button" @click="login">登录</button>
          </div>
        </div>
        <div class="form" v-if="form_active == 2">
          <div class="form_item">
            <input type="tel" v-model="form_sms.phone" placeholder="请输入手机号码" />
          </div>
          <div class="form_item">
            <div class="flex justify-between">
              <input type="text" v-model="form_sms.varCode" placeholder="请输入验证码" />
              <a v-if="!countdown" href="javascript:void(0)" @click="getSms">获取验证码</a>
              <span v-if="countdown">{{countdown}}</span>
            </div>
          </div>
          <div style="text-align: center">
            <button type="button" @click="smsLogin">登录</button>
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
      countdown: 0,
      form_active: 1,
      form_pass: {
        phone: undefined,
        password: undefined
      },
      form_sms: {
        phone: undefined,
        varCode: undefined
      }
    };
  },
  methods: {
    changeTab(number) {
      this.form_active = number;
    },
    async login() {
      if (!this.form_pass.phone) {
        this.$message({
          message: "请输入手机号",
          type: "warning"
        });
        return;
      }
      if (!this.form_pass.password) {
        this.$message({
          message: "请输入密码",
          type: "warning"
        });
        return;
      }
      let res = await this.$axios._POST(
        `${require("@/../config.js").host2}/api/oss/user/login`,
        {
          ...this.form_pass,
          clientId: "1qUvjuFXqi3rpr88epJwfw",
          clientSecret: "ToWFZGGUkkCv3Y64CmT33FP3bsXS9tMa"
        }
      );
      if (res.code == "0") {
        window.sessionStorage.setItem("token", res.data.access_token);
        window.location.href = "/";
      }
    },
    async smsLogin() {
      if (!this.form_sms.phone) {
        this.$message({
          message: "请输入手机号",
          type: "warning"
        });
        return;
      }
      if (!this.form_sms.varCode) {
        this.$message({
          message: "请输入验证码",
          type: "warning"
        });
        return;
      }
      const res = await this.$axios._POST(
        `${require("@/../config.js").host2}/api/oss/user/login/sms`,
        {
          ...this.form_sms,
          clientId: "1qUvjuFXqi3rpr88epJwfw",
          clientSecret: "ToWFZGGUkkCv3Y64CmT33FP3bsXS9tMa"
        }
      );
      if (res.code == "0") {
        window.sessionStorage.setItem("token", res.data.access_token);
        window.location.href = "/";
      }
    },
    async getSms() {
      const res = await this.$axios._GET(
        `${require("@/../config.js").host2}/api/oss/user/${
          this.form_sms.phone
        }/login/message`
      );
      if (res.code == "0") {
        this.countdown = 60;
        let dingshi = setInterval(() => {
          this.countdown--
          if (this.countdown == 0) {

            clearInterval(dingshi)
          }
        }, 1000);
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