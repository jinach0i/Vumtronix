<script setup>
import Header from './components/Header.vue';
import Landing from './components/Landing.vue';
import About from './components/About.vue';
import Impacts from './components/Impacts.vue';
import News from './components/News.vue';
import Recruit from './components/Recruit.vue';
import Footer from './components/Footer.vue';
</script>
<template>
  <Header />
  <div id="container">
    <swiper 
    :direction="'vertical'"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper">
      <swiper-slide><Landing /></swiper-slide>
      <swiper-slide><About /></swiper-slide>
      <swiper-slide><Impacts /></swiper-slide>
      <swiper-slide><News /></swiper-slide>
      <swiper-slide><Recruit /></swiper-slide>
      <swiper-slide><Footer /></swiper-slide>
    </swiper>
  </div>
</template>
<style>

</style>