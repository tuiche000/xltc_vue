<template>
  <div>
    <div class="top" v-if="!text">
      <img src="@/assets/login.jpg" alt width="913" />
    </div>
    <div class="top top2" v-if="text">
      <h2 class="text-white">合作咨询</h2>
      <div style="color: #a6b5d4;">客户基本信息 （注：我们会尽快与您取得联系，为您提供及时服务）</div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: false
    }
  },
  created() {
    if (this.$route.name == 'cooperation') {
      this.text = true
    }
  }
};
</script>

<style scoped>
.top {
  height: 460px;
  background: #2256c9;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.top2 {
  align-items: center;
  flex-direction: column;
}
</style>