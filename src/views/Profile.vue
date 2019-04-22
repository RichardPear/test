<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide class="slide1">
        <div
          class="ani"
          swiper-animate-effect="bounceIn"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="1s"
        >
          <h1>test1</h1>
        </div>
        <div
          class="ani"
          swiper-animate-effect="bounceInLeft"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="2s"
        >
          <h1>test2</h1>
        </div>
        <div
          class="ani"
          swiper-animate-effect="bounceInRight"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="3s"
        >
          <h1>test3</h1>
        </div>
      </swiper-slide>
      <swiper-slide class="slide2">
        <div
          class="ani"
          swiper-animate-effect="bounceIn"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="1s"
        >
          <h1>test1</h1>
        </div>
        <div
          class="ani"
          swiper-animate-effect="bounceInLeft"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="2s"
        >
          <h1>test2</h1>
        </div>
        <div
          class="ani"
          swiper-animate-effect="bounceInRight"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="3s"
        >
          <h1>test3</h1>
        </div>
      </swiper-slide>
      <swiper-slide class="slide3">
        <div
          class="ani"
          swiper-animate-effect="bounceIn"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="1s"
        >
          <h1>test1</h1>
        </div>
        <div
          class="ani"
          swiper-animate-effect="bounceInLeft"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="2s"
        >
          <h1>test2</h1>
        </div>
        <div
          class="ani"
          swiper-animate-effect="bounceInRight"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="3s"
        >
          <h1>test3</h1>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
    </swiper>
    <img src="../assets/images/arrow.png" alt class="scroll-indicator">
  </div>
</template>

<script>
import * as swiperAni from "../assets/js/swiper.animate1.0.3.js";
export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        // spaceBetween: 0,
        hashNavigation: {
          watchState: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          // nextEl: ".swiper-button-next",
          // prevEl: ".swiper-button-prev"
        },
        on: {
          init: function() {
            console.log(this);
            swiperAni.swiperAnimateCache(this);
            swiperAni.swiperAnimate(this);
          },
          slideChange: function() {
            swiperAni.swiperAnimate(this);
          }
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@keyframes move {
  0%,
  30% {
    opacity: 0;
  }
  60% {
    opacity: 1;
    transform: translateY(-10px);
  }
  100% {
    opacity: 0;
    transform: translateY(-15px);
  }
}
.scroll-indicator {
  position: absolute;
  left: 50%;
  margin-left: -0.5rem;
  z-index: 2;
  bottom: 20px;
  width: 1rem;
  height: 1rem;
  animation: move infinite 1.5s ease-in-out;
}
.slide1 {
  background: bisque;
}
.slide2 {
  background: pink;
}
.slide3 {
  background: yellowgreen;
}

h1 {
  text-align: center;
  margin: 20px 0;
}
</style>

