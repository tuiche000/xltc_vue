<template>
  <div class="container1">
    <div class="header">
      <div
        :class="['header-title', tab == item.code ? 'header-title-chosing' : '']"
        :style="`left: ${(index + 1) * 28}%`"
        v-for="(item, index) in categorys"
        :key="index"
      >
        <span @click="getMenu(item.children, item.code)">{{item.name}}</span>
        <!-- <div class="header-title-chosing">常见问题</div> -->
      </div>
      <!-- <img src="@/assets/head.png" alt /> -->
    </div>
    <div class="middle">
      <div class="faq-left">
        <div
          v-for="item in childrens"
          :key="item.code"
          :class="['faq-left-title', 'faq-left-chosing', item.code == child ? 'active' : '']"
          @click="getInfo(item.code)"
        >{{item.name}}</div>
      </div>

      <div class="faq-right" v-if="result && result.length">
        <div class="faq-right-middle">
          <div class="flip" v-for="(item, k) in result" :key="item.id">
            <div
              style="display: flex;justify-content: space-between;margin-bottom: 10px;border-bottom: 1px dotted #ccc;"
              @click="panel = k"
            >
              <div>{{item.quest}}</div>
              <div>
                <img
                  class="down-btn"
                  style="width:35px;height:30px;"
                  src="@/assets/down-btn.png"
                  alt
                />
              </div>
            </div>
            <div
              :class="['panel', panel == k ? 'panel_active' : '']"
              style="line-height: 20px;"
            >{{item.answer}}</div>
          </div>
        </div>
      </div>
      <div class="faq-right" v-if="result && result.id">
        <div class="faq-right-title">
          <div class="faq-right-changjian">{{result.title}}</div>
          <div class="faq-right-shijian">{{result.publish}}</div>
        </div>
        <div class="faq-right-middle flip" v-html="result.content"></div>
      </div>
    </div>
    <Fixed />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Fixed from "@/components/Fixed.vue";
export default {
  components: {
    Fixed
  },
  data() {
    return {
      categorys: [],
      childrens: [],
      result: undefined,
      tab: "",
      child: "",
      panel: 0
    };
  },
  async created() {
    this.SET_MENU(3);
    let res = await this.$axios._GET(
      `/api/cms/category/${this.$route.query.code}/children`
    );
    this.categorys = res;
    // 默认tab
    if (this.$route.query.tab) {
      this.tab = this.$route.query.tab;
      this.childrens = res.find(item => {
        if (item.code == this.$route.query.tab) {
          return item;
        }
      }).children;
    } else {
      this.childrens = res[0].children;
      this.tab = res[0].code;
    }
    // 默认左菜单
    if (this.$route.query.child) {
      window.console.log(this.$route.query.code)
      // if (this.$route.query.code == 'LOIOT_SUPPORT') {
      //   return
      // }
      this.getInfo(this.$route.query.child);
    } else {
      this.getInfo(this.childrens[0].code);
    }
  },
  methods: {
    ...mapMutations(['SET_MENU']),
    getMenu(childrens, code) {
      this.childrens = childrens;
      this.tab = code;
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, tab: code }
      });
    },
    async getInfo(id) {
      let res = {};
      this.child = id;
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, child: id }
      });
      if (this.tab == "LOIOT_TECH_COMMON") {
        res = await this.$axios._GET(
          `/api/cms/question/type/${id}`
        );
        this.result = res.result;
      } else {
        res = await this.$axios._GET(
          `/api/cms/page/recent/${id}`
        );
        this.result = res;
      }
    }
  }
};
</script>

<style scoped>
.container1 {
  width: 100%;
}
.header {
  height: 550px;
  background-image:url("~@/assets/head.png");
  background-size: cover;
  background-position: center;
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
.header-title-chosing span {
  width: 220px;
  opacity: 1;
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
  height: 1000px;
  background: #f8f8f8;
}
.faq-left-title {
  font-family: MicrosoftYaHei;
  font-size: 18px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #000000;
  text-align: center;
  cursor: pointer;
  display: block;
  box-sizing: border-box;
  margin-top: 30px;
  padding: 20px 0;
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
  color: #ffffff;
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
.panel_active {
  display: block;
}
</style>