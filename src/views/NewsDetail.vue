<template>
  <div class="page">
    <mt-header :title="newsDetail.title" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="page-body">
      <div class="artical-header">
        <h2 class="article-tittle">{{newsDetail.title}}</h2>
        <div class="article-author">
          <span class="avatar">
            <img :src="newsDetail.media_user && newsDetail.media_user.avatar_url" alt>
          </span>
          <span class="author-name">{{newsDetail.media_user && newsDetail.media_user.screen_name}}</span>
          <span class="artical-info">
            <span class="publish-time">{{pushliTime}}</span>
            <span class="dot"></span>
            <span
              class="commment-count"
              v-if="newsDetail.comment_count"
            >{{newsDetail.comment_count }} 评论</span>
          </span>
        </div>
      </div>
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
    ...mapState(["newsDetail"]),
    pushliTime() {
      return (
        this.newsDetail.publish_time &&
        this.$moment(this.newsDetail.publish_time * 1000).fromNow()
      );
    }
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
  .article-author {
    margin: 10px 0;
  }
  .avatar {
    width: 24px;
    height: 24px;
    display: inline-block;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
}
</style>