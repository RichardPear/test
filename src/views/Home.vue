<template>
  <div class="home">
    <mt-loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      :autoFill="false"
      ref="loadmore"
    >
      <div v-for="(item, index) in news" :key="index">
        <news-item
          :title="item.title"
          :media-name="item.media_name"
          :date-time="item.datetime"
          :image-list="item.image_list"
          :comment-count="item.comment_count"
          :source="item.item_id"
        ></news-item>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NewsItem from "../components/NewsItem";
export default {
  components: { NewsItem },
  async created() {
    await this.getNews();
    this.$Toast({
      message: `为您更新了${this.returnCount}条数据`,
      duration: 800
    });
  },
  data() {
    return {
      allLoaded: false
    };
  },
  methods: {
    ...mapActions(["getNews", "getMoreNews"]),
    async loadTop() {
      await this.getNews();
      this.$refs.loadmore.onTopLoaded();
      this.$Toast({
        message: "刷新成功",
        duration: 800
      });
    },
    async loadBottom() {
      await this.getMoreNews({ maxBehotTime: this.maxBehotTime });
      this.$refs.loadmore.onBottomLoaded();
    }
  },
  computed: {
    ...mapGetters(["news", "returnCount", "maxBehotTime", "hasMore"])
  }
};
</script>

<style lang="scss" scoped>
</style>