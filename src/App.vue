<template>
  <div id="app">
    <transition name="slide-down">
      <mt-tabbar v-model="selectedTab" fixed v-if="isShowTabbar">
        <mt-tab-item id="/" :class="{'is-selected': selectedTab == '/'}">
          <img slot="icon" src="./assets/images/开心果.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="/about" :class="{'is-selected': selectedTab == '/about'}">
          <img slot="icon" src="./assets/images/披萨.png">
          热点
        </mt-tab-item>
        <mt-tab-item id="/a" :class="{'is-selected': selectedTab == '/a'}">
          <img slot="icon" src="./assets/images/草莓.png">
          发现
        </mt-tab-item>
        <mt-tab-item id="/profile" :class="{'is-selected': selectedTab == '/profile'}" disabled>
          <img slot="icon" src="./assets/images/蛋糕.png">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </transition>
    <transition name="fade" mode="out-in">
      <keep-alive key="keepalive">
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view key="noKeepalive" v-if="!$route.meta.keepAlive"/>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  created() {},
  data() {
    return {
      selectedTab: ""
    };
  },
  methods: {},
  watch: {
    "$route.path": {
      handler(path) {
        this.selectedTab = path;
      },
      immediate: true
    },
    selectedTab(val) {
      console.log(`change to ${val}`);
      this.$router.push(val);
    }
  },
  computed: {
    ...mapState(["isShowTabbar"])
  }
};
</script>

<style lang="scss" scoped>
</style>
