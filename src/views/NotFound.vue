<template>
  <div class="page">
    <div class="content">
      <p>
        <img src="../assets/images/404.png" alt>
      </p>
      <router-link to="/">
        <mt-button type="primary">首页</mt-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page {
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  text-align: center;
}
</style>