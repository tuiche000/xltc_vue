<template>
  <div>
    <div class="top">
      <img src="@/assets/login.jpg" alt width="913" />
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top {
  height: 460px;
  background: #2256c9;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
</style>