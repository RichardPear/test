<template>
  <section>
    <router-link :to="'/detail/i' + source" class="article-link">
      <div class="item-detai">
        <h3>{{title}}</h3>
        <div class="list-image">
          <ul class="clearfix">
            <li v-for="(img, index) in imageList" :key="index" class="image-holder">
              <img :src="img.url" alt>
            </li>
          </ul>
        </div>
        <div class="item-info">
          <span class="space">{{mediaName}}</span>
          <span class="space">评论 {{commentCount || 0}}</span>
          <span>{{relativeTime}}</span>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imageList: {
      type: Array,
      default: []
    },
    mediaName: {
      type: String
    },
    commentCount: {
      type: Number
    },
    dateTime: {
      type: String
    },
    source: {
      type: String
    }
  },
  computed: {
    relativeTime() {
      if (this.dateTime) {
        return this.$moment(this.dateTime).fromNow();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  border-bottom: 1px solid rgba(221, 221, 221, 0.6);
  & .article-link:visited h3 {
    color: gray;
  }
  h3 {
    color: #222;
  }
  margin: 0 30px;
  .article-link {
    display: block;
    min-height: 84px;
    text-decoration: none;
    padding: 16px 0;
  }
  .list-image {
    margin-top: 12px;
    ul li:first-child {
      padding-right: 4px;
    }
    ul li:last-child {
      padding-left: 4px;
    }
    li.image-holder {
      display: inline-block;
      overflow: hidden;
      width: 33.3%;
      box-sizing: border-box;
      img {
        border: none;
        display: block;
        width: 100%;
      }
    }
  }
  .item-info {
    color: #999;
    span {
      font-size: 14px;
    }
  }
}
</style>