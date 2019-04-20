<template>
  <div class="page">
    <mt-header :title="newsDetail.title" fixed>
      <div slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </div>
    </mt-header>

    <div class="page-body">
      <div class="artical-header">
        <h2 class="article-title">{{newsDetail.title}}</h2>
        <div class="article-author">
          <span class="avatar">
            <img :src="newsDetail.media_user && newsDetail.media_user.avatar_url" alt>
          </span>
          <span class="author-name">{{newsDetail.media_user && newsDetail.media_user.screen_name}}</span>
          <span class="artical-info">
            <span class="publish-time">{{pushliTime}}</span>
            <span class="dot" v-if="newsDetail.comment_count"></span>
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
import { mapActions, mapState, mapMutations } from "vuex";
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
    ...mapMutations(["clearNewsDetail"]),
    async loadNewsDetail() {
      this.clearNewsDetail();
      let sourceUrl = this.$route.params.id;
      if (!sourceUrl) {
        return;
      }
      this.$Indicator.open({
        text: "正在加载"
      });
      try {
        await this.getNewsDetail(sourceUrl);
      } catch (e) {
        console.log(e)
        this.$Toast({
          message: "网络出错，请重试"
        });
      }
      this.$Indicator.close();
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
  .article-title {
    font-family: "PingFangSC-Medium";
    line-height: 1.36;
    font-weight: 500;
    color: #222222;
    font-size: 22px;
  }
  .article-author {
    margin: 10px 0;
    position: relative;
    height: 24px;
    line-height: 24px;
    .avatar {
      width: 24px;
      height: 24px;
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    .author-name {
      position: absolute;
      left: 30px;
      color: #222;
      font-size: 14px;
    }
    .artical-info {
      position: absolute;
      right: 0;
      color: #999;
      font-size: 12px;
    }
    .dot {
      display: inline-block;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      background-color: #999;
      margin: 0 8px;
      vertical-align: middle;
    }
  }

  .news-content /deep/ {
    img {
      width: 100%;
      margin: 15px 0 0;
    }
    h1 {
      font-size: 18px;
      border-left-width: 3px;
      border-left: solid #ed4040;
      padding-left: 6px;
      line-height: 28px;
      margin: 24px 0;
    }
    .img-wrapper-embedded,
    p {
      margin-top: 15px;
    }
    p {
      word-wrap: break-word;
      color: #222;
      text-align: justify;
    }
  }
}
</style>