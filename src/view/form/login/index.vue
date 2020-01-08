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
              <a href="javascript:void(0)">忘记密码</a>
            </div>
          </div>

          <button type="button" @click="login">登录</button>
        </div>
        <div class="form" v-if="form_active == 2">
          <div class="form_item">
            <input type="tel" v-model="form_sms.phone" placeholder="请输入手机号码" />
          </div>
          <div class="form_item">
            <div class="flex justify-between">
              <input type="text" v-model="form_sms.varCode" placeholder="请输入验证码" />
              <a href="javascript:void(0)" @click="getSms">获取验证码</a>
            </div>
          </div>
          <button type="button" @click="smsLogin">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        "http://h5.fothing.com/api/oss/user/login",
        {
          ...this.form_pass,
          clientId: "1qUvjuFXqi3rpr88epJwfw",
          clientSecret: "ToWFZGGUkkCv3Y64CmT33FP3bsXS9tMa"
        }
      );
      if (res.code == "0") {
        window.console.log(res.data)
        window.sessionStorage.setItem("token", res.data.access_token);
        window.location.href = `http://localhost:3000/#/auth?access_token=${res.data.access_token}`
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
      const res = this.$axios._POST(
        "http://h5.fothing.com/api/oss/user/login/sms",
        {
          ...this.form_sms,
          clientId: "1qUvjuFXqi3rpr88epJwfw",
          clientSecret: "ToWFZGGUkkCv3Y64CmT33FP3bsXS9tMa"
        }
      );
      if (res.code == "0") {
        window.sessionStorage.setItem("token", res.data);
        window.reload();
      }
    },
    async getSms() {
      const res = this.$axios._GET(
        `http://h5.fothing.com/api/oss/user/${this.form_sms.phone}/login/message`
      );
      window.console.log(res);
    }
  }
};
</script>

<style scoped>
.cont {
  height: 300px;
  display: flex;
  justify-content: center;
  position: relative;
}

.base {
  position: absolute;
  top: -171px;
  width: 437px;
  background-color: #ffffff;
  box-shadow: 0px 0px 23px 4px rgba(142, 142, 142, 0.22);
}

.cont_box {
  padding: 70px 85px 40px 85px;
}

.tabs {
  display: flex;
  justify-content: space-around;
}

.tab {
  color: #303030;
  cursor: pointer;
  padding-bottom: 3px;
}

.tab_active {
  color: #2257c9;
  border-bottom: 3px solid #2257c9;
}
.form_item {
  margin-top: 40px;
}

button {
  width: 150px;
  height: 40px;
  background-color: #f5ab35;
  border-radius: 5px;
  color: #fff;
  margin-top: 40px;
  cursor: pointer;
}
</style>