<template>
  <div class="container1">
    <div class="header">
      <div
        class="header-title"
        :style="`left: ${(index + 1) * 28}%`"
        v-for="(item, index) in categorys"
        :key="index"
      >
        <span @click="getMenu(item.children)">{{item.name}}</span>
        <!-- <div class="header-title-chosing">常见问题</div> -->
      </div>
      <img src="@/assets/bg2.jpg" alt />
    </div>
    <div class="middle">
      <div class="faq-left">
        <div
          v-for="child in childrens"
          :key="child.code"
          class="faq-left-title faq-left-chosing active"
          @click="getInfo(child.code)"
        >{{child.name}}</div>
      </div>

      <div class="faq-right">
        <!-- <div class="faq-right-title">
                    <div class="faq-right-changjian"></div>
                    <div class="faq-right-shijian"></div>
        </div>-->
        <div class="faq-right-middle">
          <!-- <div class="flip">
                        <div
                            style="display: flex;justify-content: space-between;margin-bottom: 10px;border-bottom: 1px dotted #ccc;">
                            <div>1、云平台是否安全？</div>
                            <div><img class="down-btn" style="width:35px;height:30px;" src="./images/down-btn.png"
                                    alt="">
                            </div>
                        </div>
                        <div class="panel" style="line-height: 20px;">
                            答：相信认识是有一个过程的，就像银行刚出来时，很多人宁愿把钱放到床底烂掉，也不愿意存在银行是一样的道理，但最终大家都会把钱存到银行去。企业IT独立安装维护部署的模式是会逐渐被淘汰掉的，这是一个趋势。把企业的IT资产不交给专业的机构去管理，而是通过企业内部的几个人去管理，其实企业的风险更大。
                        </div>
          </div> -->
        </div>

        <div></div>
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
      categorys: [],
      childrens: [],
      result: []
    };
  },
  async created() {
    let res = await this.$axios._GET(
      "/api/cms/category/LOIOT_SUPPORT/children"
    );
    this.categorys = res;
    this.childrens = res[0].children;
  },
  methods: {
    getMenu(childrens) {
      this.childrens = childrens;
    },
    async getInfo(id) {
      let res = await this.$axios._GET(
        `http://noss.fothing.com/api/cms/question/type/${id}`
      );
      this.categorys = res;
      this.result = res[0].result;
    }
  }
};
</script>

<style scoped>
.container1 {
  width: 100%;
}
.header {
  /* width: 100%;
    background: url(./images/head.png) no-repeat;
    background-size: 100% 100%; */
  position: relative;
}
.header-title {
  position: absolute;
  bottom: 0;
  right: 30%;
  display: block;
}
.header-title span {
  width: 220px;
  height: 66px;
  background: rgba(34, 87, 201, 1);
  font-size: 26px;
  color: #fff;
  display: block;
  text-align: center;
  line-height: 66px;
  opacity: 0.32;
  cursor: pointer;
}
.header-title-chosing {
  width: 220px;
  height: 66px;
  background: rgba(34, 87, 201, 1);
  font-size: 26px;
  color: #fff;
  display: block;
  text-align: center;
  cursor: pointer;
  line-height: 66px;
}
.header img {
  width: 100%;
}
.middle {
  margin: 0 auto;
  width: 1171px;
  background: #fff;
  display: flex;
}
.faq-left {
  width: 233px;
  min-height: 600px;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.faq-left-title {
  font-family: MicrosoftYaHei;
  font-size: 18px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #000000;
  cursor: pointer;
  display: block;
  box-sizing: border-box;
  margin-top: 30px;
}
.faq-left-title a {
  padding: 12px 0 12px 40px;
  display: block;
  box-sizing: border-box;
  margin-bottom: 5px;
}
.faq-left-title_child a {
  display: block;
  padding: 8px 0 8px 40px;
  box-sizing: border-box;
  margin-left: 24px;
}
.faq-left .active {
  font-family: MicrosoftYaHei;
  font-size: 20px;
  font-weight: normal;
  cursor: pointer;
  display: block;
  box-sizing: border-box;
  margin-top: 30px;
  color: #ffffff;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background-color: #2257c9;
}
.faq-right {
  display: flex;
  width: 938px;
  margin: 50px 0;
  flex-direction: column;
}
.faq-right-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
}
.faq-right-middle {
  margin-left: 20px;
  padding-bottom: 15px;
}
.faq-right-middle p {
  margin-bottom: 15px;
  text-indent: 2em;
}
.faq-right-changjian {
  font-family: MicrosoftYaHei;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #303030;
  margin-bottom: 10px;
}
.faq-right-shijian {
  font-family: MicrosoftYaHei;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #303030;
}
.panel,
.flip {
  cursor: pointer;
  text-align: left;
}
.panel {
  display: none;
  border-bottom: 1px dotted #ccc;
  padding-bottom: 20px;
}
</style>