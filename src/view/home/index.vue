<template>
  <div>
    <div>
      <div class="container1">
        <div class="Web_bigbox1">
          <div class="Web_box1">
            <div class="Web_topbox">
              <div class="Web_head-left">
                <div class="Web_title-a">
                  <img src="./images/tacha.png" alt />
                </div>
                <div
                  class="Web_title-b"
                >"平台应政策和实践而产生，是路长责任制的软件化实施，是网格精细化治理城市的探索与实践。运用PC端管理系统+小程序的微服务实现巡查→反馈→协调→处置→督查5 步法管理流程。</div>
                <div class="Web_title-d">免费使用 | 自由定制 | 轻移动 | 智能统计</div>
                <div class="Web_title-c">
                  <div class="Web_btn1">
                    <a href="/login.html">免费体检</a>
                  </div>
                  <div class="Web_btn2">
                    <a href="/cooperation.html">合作咨询</a>
                  </div>
                </div>
              </div>
              <div class="Web_head-right"></div>
            </div>
            <div class="Web_squaer">
              <div class="flex">
                <div class="flex-one Web_squaer-item" v-for="feature in init.features" :key="feature.id">
                  <img :src="feature.resource" alt />
                  <div class="bot">
                    <div class="title">{{feature.title}}</div>
                    <div class="description">{{feature.description}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container2">
        <div class="Web_bigbox2">
          <div class="Web_box2">
            <div class="Web_mid">
              <div class="Web_mid-left">
                <span class="Web_yingyong">应用案列</span>
                <span class="Web_zoubian">{{init.recomcase.title}}</span>
                <p class="Web_words" style="text-align: justify;">{{init.recomcase.head}}</p>
                <span class="Web_know">
                  <a href="/article.html?code=LOIOT_CASE">了解详情>></a>
                </span>
              </div>
              <div class="Web_mid-right">
                <img :src="init.recomcase.thumbnail" alt />
              </div>
            </div>
            <div class="Web_mid-bottom">
              <div class="Web_anli">
                <a href="/article.html?code=LOIOT_CASE">更多案例</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container3">
        <div class="Web_bigbox4 Web_youshi">
          <div class="Web_shiyong title" id="Web_youshi" style="margin-bottom: 0;">{{init.advantage.title}}</div>
          <div class="description">{{init.advantage.description}}</div>
          <div class="flex">
            <div class="flex-one Web_youshi-item" v-for="topicItem in init.advantage.topicItems" :key="topicItem.id">
              <img :src="topicItem.resource" alt />
              <div class="bot">
                <div class="title">{{topicItem.title}}</div>
                <div class="description">{{topicItem.description}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container4">
      <div class="Web_bigbox4">
        <div class="Web_shiyong" id="Web_shiyong">{{init.usege.title}}</div>
        <div class="Web_box4-mid">
          <div class="Web_shiyong_topicItem" style="margin-right: 100px;width: 511px;" v-for="topicItem in init.usege.topicItems" :key="topicItem.id">
            <div class="title-black">{{topicItem.name}}</div>
            <div class="title-words">{{topicItem.description}}</div>
            <div style="text-align: end;">
              <a href="/article.html?code=LOIOT_MANU">了解详情>></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container5">
      <div class="Web_bigbox5">
        <div class="Web_shiyong" id="support">{{init.support.title}}</div>
        <div class="Web_box4-mid">
          <div class="support_topicItem" style="margin-right: 100px;width: 511px;" v-for="topicItem in init.support.topicItems" :key="topicItem.id">
            <div class="title-black">{{topicItem.name}}</div>
            <div class="title-words">{{topicItem.description}}</div>
            <div style="text-align: end;">
              <a href="/faq.html?code=LOIOT_SUPPORT">了解详情>></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Fixed />
  </div>
</template>

<script>
import Fixed from "@/components/Fixed.vue";
export default {
  components: {
    Fixed
  },
  data() {
    return {
      init: {},
    };
  },
  async created() {
    let init = await this.$axios._GET(
      "/api/cms/index/init"
    );
    this.init = init;
  }
};
</script>

<style scoped>
.container1 {
  background: #2257c9;
}
.Web_bigbox1 {
  width: 1180px;
  margin: 0 auto;
  padding-top: 30px;
}
/* .Web_bigbox{
      width: 100%;
      background: #2257c9;
      color: #ffffff;
      padding-top: 50px;
      font-size: 16px;
  } */
.Web_box1 {
  width: 1180px;
  height: 520px;
  margin: 0 auto;
  position: relative;
  color: #fff;
}
.Web_topbox {
  width: 100%;
  height: 200px;
  display: flex;
}
.Web_head-left {
  display: flex;
  flex-direction: column;
  width: 600px;
}
.Web_title-a {
  margin-bottom: 5px;
}
.Web_title-a img {
  width: 220px;
  height: 55px;
}
.Web_title-b {
  width: 460px;
  height: 83px;
  line-height: 30px;
  font-size: 16px;
}
.Web_btn1 {
  width: 160px;
  height: 40px;
  border-radius: 3px;
  border: solid 1px #ffffff;
  font-weight: bold;
  margin-right: 10px;
  font-size: 16px;
}
.Web_btn1 a {
  color: #fff;
}
.Web_btn2 a {
  color: #fff;
}
.Web_btn2 {
  width: 160px;
  height: 40px;
  border-radius: 3px;
  border: solid 1px #ffffff;
  font-weight: bold;
  font-size: 16px;
}
.Web_title-c {
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 70px;
  line-height: 38px;
}
.Web_title-d {
  margin-top: 50px;
  font-size: 16px;
}
.Web_head-right {
  width: 780px;
  height: 400px;
  background: url("./images/bg1.png") no-repeat;
  background-size: cover;
}
.Web_squaer {
  width: 1180px;
  position: absolute;
  top: 400px;
}
.Web_squaer-item {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
}
.Web_squaer-item img {
  margin-top: 36px;
  display: inline-block;
  width: 78px;
  height: 78px;
}
.Web_squaer-item .bot {
  margin-top: 38px;
  padding: 0 30px;
  margin-bottom: 25px;
}
.Web_squaer-item .bot .title {
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
}
.Web_youshi {
  width: 1180px;
}
.Web_youshi-item {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
}
.Web_youshi-item img {
  margin-top: 36px;
  display: inline-block;
  width: 78px;
  height: 78px;
}
.Web_youshi-item .bot {
  margin-top: 38px;
  padding: 0 30px;
  margin-bottom: 25px;
}
.Web_youshi-item .bot .title {
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
}
.Web_youshi-item .bot .description {
  text-align: center;
}
.container1 .Web_squaer-item:nth-child(odd) {
  background-color: #53d7ed;
}
.container1 .Web_squaer-item:nth-child(even) {
  background-color: #1989fa;
}

.container2 {
  background: #fafafa;
}
.Web.bigbox2 {
  width: 1180px;
  margin: 0 auto;
}
.Web_box2 {
  width: 1180px;
  margin: 0 auto;
  padding-top: 220px;
  display: flex;
  flex-direction: column;
}
.Web_mid {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1180px;
  margin: 0 auto;
}
.Web_mid-left {
  width: 530px;
  height: 300px;
  margin-right: 70px;
  display: flex;
  flex-direction: column;
}
.Web_yingyong {
  font-family: MicrosoftYaHei;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 23px;
  letter-spacing: 0px;
  color: #818181;
  padding: 0 0 10px 0;
  border-bottom: 3px solid #2257c9;
  width: 70px;
}
.Web_zoubian {
  font-family: MicrosoftYaHei;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 23px;
  letter-spacing: 0px;
  color: #303030;
  margin: 20px 0;
}
.Web_words {
  font-family: MicrosoftYaHei;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #818181;
  line-height: 30px;
  height: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.Web_know {
  align-self: flex-end;
  margin-top: 10px;
}
.Web_mid-right {
  width: 550px;
  height: 300px;
}
.Web_mid-right img {
  width: 550px;
  height: 320px;
}
.Web_mid-bottom {
  align-self: center;
  justify-content: center;
  width: 105px;
  height: 25px;
  margin: 80px 0 50px 0;
}
.Web_anli {
  width: 160px;
  height: 40px;
  border-radius: 20px;
  border: solid 1px #2257c9;
  color: #2257c9;
  text-align: center;
  line-height: 40px;
  font-size: 17px;
}

.container3 {
  background: #fff;
}
.Web_bigbox3 {
  width: 1180px;
  margin: 0 auto;
}

.title-black {
  font-family: MicrosoftYaHei;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 30px;
}
.title-words {
  font-family: MicrosoftYaHei;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 30px;
}

.container4 {
  background: #fafafa;
}
.Web_bigbox4 {
  width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  text-align: left;
}
.Web_box4-mid {
  display: flex;
}
.Web_shiyong {
  font-family: MicrosoftYaHei;
  font-size: 26px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #000000;
  border-bottom: 3px solid #2257c9;
  margin-bottom: 70px;
}
.container5 {
  background: #ffffff;
}
.Web_bigbox5 {
  width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  text-align: left;
}

.Web_youshi > .description {
  margin-top: 30px;
  font-size: 18px;
  width: 757px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(106, 106, 106, 1);
  line-height: 25px;
}
</style>>