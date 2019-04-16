<template>
  <div class="page">
    <mt-header :title="newsDetail.title" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="page-body">
      <div v-html="newsDetail.content" class="news-content"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  created() {
    this.loadNewsDetail();
  },

  data() {
    return {
      sourceUrl: ""
    };
  },
  methods: {
    ...mapActions(["getNewsDetail"]),
    loadNewsDetail() {
      let sourceUrl = this.$route.params.id;
      if (!sourceUrl) {
        return;
      }
      this.getNewsDetail(sourceUrl);
    }
  },
  computed: {
    ...mapState(["newsDetail"])
  },
  watch: {
    $route(to, from) {
      this.loadNewsDetail();
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
  .page-body {
    margin-top: 50px;
  }
}
.page-body >>> .news-content {
  width: 100%;
  overflow: hidden;
  img {
    width: 100% !important;
  }
}
</style>