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
  created() {
    this.SET_MENU(4);
  },
  methods: {
    ...mapMutations(['SET_MENU']),
  }
};
</script>

<style>
</style>