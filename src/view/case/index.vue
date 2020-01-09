<template>
  <div>
    <Content />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Content from "@/components/Content.vue";
export default {
  components: {
    Content
  },
  data() {
    return {
      // categorys: [],
      // childrens: [],
      // info: []
    };
  },
  created() {
    this.SET_MENU(1)
    // let res = await this.$axios._GET(
    //   `/api/cms/category/${this.$route.query.code}/children`
    // );
    // // this.categorys = res;
    // this.childrens = res;
    // this.getInfo(res[0].code);
  },
  methods: {
    ...mapMutations(['SET_MENU']),
    // getMenu(childrens) {
    //   this.childrens = childrens;
    // },
    // async getInfo(code) {
    //   let res = await this.$axios._GET(
    //     `http://noss.fothing.com/api/cms/page/recent/${code}`
    //   );
    //   this.info = res;
    // }
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
</style>