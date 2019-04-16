<template>
  <div>
    <div v-for="(item, index) in news" :key="index">
      <news-item
        :title="item.title"
        :media-name="item.media_name"
        :date-time="item.datetime"
        :image-list="item.image_list"
        :comment-count="item.comment_count"
        :source="item.source_url"
      ></news-item>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import NewsItem from "../components/NewsItem";
export default {
  components: { NewsItem },
  created() {
    this.getNews();
  },
  methods: {
    ...mapActions(["getNews"])
  },
  computed: {
    ...mapState(["news"])
  }
};
</script>

<style lang="scss" scoped>
</style>