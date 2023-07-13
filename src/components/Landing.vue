<script setup>

</script>
<template>
  <div id="landingWrap">
    <swiper 
    :spaceBetween="0"
    :effect="'fade'" 
    :centeredSlides="true" 
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }" 
    :pagination="{
      type: 'progressbar',
    }" 
    :navigation="true" 
    :modules="modules" @autoplayTimeLeft="onAutoplayTimeLeft" class="mySwiper">
      <swiper-slide>
        <div class="txtbox">
          <strong data-aos="fade-up">ELECTRONIC BUSINESS</strong>
          <p data-aos="fade-up">혁신을 이끄는 IT의 진화,<br>인류의 더 풍요로운 삶에 기여하겠습니다.</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="txtbox">
          <strong data-aos="fade-up">ELECTRONIC BUSINESS</strong>
          <p data-aos="fade-up">혁신을 이끄는 IT의 진화,<br>인류의 더 풍요로운 삶에 기여하겠습니다.</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="txtbox">
          <strong data-aos="fade-up">ELECTRONIC BUSINESS</strong>
          <p data-aos="fade-up">혁신을 이끄는 IT의 진화,<br>인류의 더 풍요로운 삶에 기여하겠습니다.</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="txtbox">
          <strong data-aos="fade-up">ELECTRONIC BUSINESS</strong>
          <p data-aos="fade-up">혁신을 이끄는 IT의 진화,<br>인류의 더 풍요로운 삶에 기여하겠습니다.</p>
        </div>
      </swiper-slide>
      
      <template #container-end>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48" ref="progressCircle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </swiper>
  </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const progressCircle = ref(null);
    const progressContent = ref(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty('--progress', 1 - progress);
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    };
    
    return {
      onAutoplayTimeLeft,
      progressCircle,
      progressContent,
      modules: [EffectFade, Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style scoped>
#landingWrap {
  width: 100%;
  height: 100vh;
}
.swiper-slide:first-child{background: url('../assets/img/main_visual_01.jpg') no-repeat center center/100% 100%;}
.swiper-slide:nth-child(2){background: url('../assets/img/main_visual_02.jpg') no-repeat center center/100% 100%;}
.swiper-slide:nth-child(3){background: url('../assets/img/main_visual_03.jpg') no-repeat center center/100% 100%;}
.swiper-slide:last-child{background: url('../assets/img/main_visual_04.jpg') no-repeat center center/100% 100%;}

.swiper-button-next,.swiper-button-prev{color: white;top: 95%; bottom: 8%; left: 5%;}
.swiper-button-next:after, .swiper-button-prev:after{font-size: 24px;}
.swiper-button-next{left: 10%;}
.autoplay-progress{color: white;}
.autoplay-progress svg{stroke: white;}
.swiper-pagination-progressbar{top: 80%;}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background-color: white;}

.txtbox{text-align: left; position: absolute; left: 5%; top: 50%;}
.txtbox strong{font-size: 55px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.25px;
  color: #fff;
  margin-bottom: 24px; display: block;}
.txtbox p{font-size: 18px;
  letter-spacing: -0.5px;
  line-height: 1.7;
  color: #fff;}
</style>
  