<template>
  <header>
    <div class="Web_head">
      <div class="Web_head_all">
        <div class="Web_head_left">
          <div style="display: flex;">
            <div style="margin-right: 50px;">
              <img style="width: 300px;height: 50px;" :src="info.logo" alt />
            </div>
          </div>
        </div>
        <div class="Web_head_middle">
          <div
            v-for="(item, k) in category"
            class="Web_head_title"
            :class="{ Web_orange: k == menu }"
            :key="item.code"
          >
            <router-link
              :to="{ path: item.target, query: {
              code: item.code
            } }"
            >{{item.name}}</router-link>
          </div>
        </div>
        <div v-if="!token" class="Web_head_login">
          <div style="margin: 5px;" class="Web_head_title">
            <img src="../assets/denglu.png" alt />
            <router-link to="/form/login">登录</router-link>
          </div>
          <div style="margin: 5px;opacity: 0.4;" class="Web_head_title">|</div>
          <div style="margin: 5px;" class="Web_head_title">
            <img src="../assets/zhuce.png" alt />
            <router-link to="/form/register">注册</router-link>
          </div>
        </div>
        <div v-if="token" class="Web_head_login">
          <div style="margin: 5px;" class="Web_head_title">
            <a :href="`${require('@/../config').admin}/#/auth?access_token=${token}`">进入后台</a>
          </div>
          <div style="margin: 5px;opacity: 0.4;" class="Web_head_title">|</div>
          <div style="margin: 5px;" class="Web_header_title">
            <a href="javascript:void(0)" style="color:#fff;" @click="out">退出登录</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      info: {},
      category: [],
      token: undefined
    };
  },
  computed: {
    ...mapState(["menu"])
  },
  async created() {
    this.token = sessionStorage.getItem("token");
    let company = await this.$axios._GET(
      "/api/cms/company/tax/91110105666288389K"
    );
    let category = await this.$axios._GET("/api/cms/category/LOIOT/children");
    this.info = company;
    this.category = category;
  },
  methods: {
    out() {
      sessionStorage.clear();
      window.location.reload();
    }
  }
};
</script>

<style scoped>
.Web_head {
  width: 100%;
  height: 100px;
  background: #2257c9;
  display: flex;
  align-items: center;
}
.Web_head_all {
  width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.Web_head_middle {
  display: flex;
  padding-top: 12px;
}
.Web_head_title {
  font-family: MicrosoftYaHei;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #ffffff;
  margin-right: 40px;
}
.Web_orange {
  border-bottom: 3px solid #ffb307;
}
.Web_head_title a {
  font-family: MicrosoftYaHei;
  /* font-size: 20px; */
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #ffffff;
}
.Web_head_login {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 5px;
  margin-left: 40px;
}
.Web_border_right {
  border-right: 1px solid #ccc;
}
</style>