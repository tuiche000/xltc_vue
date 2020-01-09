<template>
  <footer>
    <div class="Web_foot">
      <div class="Web_foot_all">
        <div style="display: flex;justify-content: space-between;">
          <div style="display: flex;flex-direction: column;margin-bottom: 30px;">
            <div class="Web_foot_words">
              总部地址
              <span id="address">{{info.detail}}</span>
            </div>
            <div class="Web_foot_words">
              咨询电话
              <span id="phone">{{info.phone}}</span>
            </div>
          </div>
          <div style="display: flex;justify-content: center;">
            <img id="qrcode" :src="info.qrcode" width="100" height="100" alt />
          </div>
        </div>
        <div style="display: flex;align-items: flex-end;justify-content: space-between;">
          <div class="Web_foot_bottom flex">
            <div>
              <span id="chinese">{{info.chinese}}</span>
              <span id="icp">&nbsp;{{info.icp}}</span>
            </div>
            <div>
              <span id="copyright">{{info.copyright}}</span>
            </div>
          </div>
          <div style="margin-top:10px;" class="Web_foot_bottom flex align-center justify-center">
            <img style="width: 38px;height: 30px;margin-top:5px;" src="../assets/guohui.png" alt />工商网监认证
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    };
  },
  async created() {
    let res = await this.$axios._GET("/api/cms/company/tax/91110105666288389K");
    this.info = res;
  }
};
</script>

<style scoped>
.Web_foot {
  width: 100%;
  height: 220px;
  background: #2257c9;
}
.Web_foot_all {
  width: 1180px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* flex-direction: column; */
  padding: 50px 140px 0 200px;
}
.Web_foot_words {
  font-family: AdobeHeitiStd-Regular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 0px;
  color: #ffffff;
  line-height: 40px;
}
.Web_foot_bottom {
  font-family: Montserrat-Light;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 40px;
  letter-spacing: 0px;
  color: #a6b5d4;
}
#qrcode {
  background: #fff;
  border-radius: 50%;
}
</style>