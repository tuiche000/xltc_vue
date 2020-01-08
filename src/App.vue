<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@import "./assets/basic.css";
input,
.form-control {
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border: 0px;
  border-radius: 0px;
  box-shadow: inherit;
  font-size: 16px;
  padding: 0;
  padding-bottom: 10px;
}
button {
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
}
a {
  text-decoration: none;
  color: #2257c9;
}
input:focus,
textarea:focus {
  outline: none;
}
label {
  width: 100%;
  display: block;
}

.text-white {
  color: #fff;
}
.flex {
  display: flex;
}
.flex-one {
  flex: 1;
}
.justify-between {
  justify-content: space-between;
}
.form_item {
  border-bottom: 1px solid #bababa;
}
.form_item_block {
  width: 100%;
}
</style>
