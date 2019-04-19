<template>
  <div>
    <div
      v-infinite-scroll="bottomLoadMore"
      infinite-scroll-disabled="disableBottomLoading"
      :infinite-scroll-distance="10"
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
    </div>
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
      message: `为您更新了${this.returnCount}条数据`
    });
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    this.disableBottomLoading = true;
    next();
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm => {
      vm.disableBottomLoading = false;
    });
  },
  data() {
    return {
      disableBottomLoading: false
    };
  },
  methods: {
    ...mapActions(["getNews", "getMoreNews"]),
    async bottomLoadMore() {
      this.disableBottomLoading = true;
      await this.getMoreNews({ maxBehotTime: this.maxBehotTime });
      this.disableBottomLoading = false;
    }
  },
  computed: {
    ...mapGetters(["news", "returnCount", "maxBehotTime"])
  }
};
</script>

<style lang="scss" scoped>
</style>