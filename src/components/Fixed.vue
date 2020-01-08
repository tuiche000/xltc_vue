<template>
  <div class="Web_fixed">
    <div class="fixed">
      <div class="Web_fix">
        <img src="@/assets/first.png" alt />
        <a href="/cooperation.html">合作咨询</a>
      </div>
      <div style="background-color: #4275e2;" class="Web_fix">
        <img src="@/assets/mid.png" alt />
        <a href="/article.html?code=LOIOT_INTRO">公司简介</a>
      </div>
      <div style="background-color: #2257c9;" class="Web_fix">
        <img src="@/assets/up.png" alt />
        <a href>返回顶部</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Web_fixed {
  position: fixed;
  bottom: 50px;
  right: 50px;
}
.fixed {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fixed a {
  color: #fff;
}
.Web_fix {
  width: 90px;
  height: 90px;
  background-color: #6c94e8;
  border-radius: 5px;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 45px;
  letter-spacing: 0px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
}
.Web_fix img {
  margin-top: 16px;
  width: 40px;
  height: 42px;
}
</style>