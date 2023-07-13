<template>
  <div id="aboutWrap">
    <div class="left">
      <swiper :pagination="{
        type: 'progressbar',
      }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
      </swiper>
    </div>
    <div class="right">
      <div class="top">
        <div class="company">
          <p class="titleB">Company</p>
          <ul>
            <li class="redline"><a href="http://www.chemtronics.co.kr/kr/company/ceo.php">CEO인사말<font-awesome-icon icon="fa-solid fa-angle-right" /></a></li>
            <li class="redline">
              <a href="http://www.chemtronics.co.kr/kr/company/vision.php">비전
                <font-awesome-icon icon="fa-solid fa-angle-right" />
              </a>
            </li>
            <li class="redline"><a href="http://www.chemtronics.co.kr/kr/company/history.php">연혁/수상실적
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </a>
          </li>
            <li class="redline"><a href="http://www.chemtronics.co.kr/kr/company/location.php">사업장 소개
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </a>
          </li>
            <li class="redline"><a href="http://www.chemtronics.co.kr/kr/company/subsidiary.php">계열사 소개
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </a>
          </li>
          </ul>
        </div>
        <div class="ir">
          <p class="titleB">IR</p>
          <ul>
            <li><a href="http://www.chemtronics.co.kr/kr/ir/ir_01.php">주가정보
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </a>
          </li>
            <li>
              <a href="http://www.chemtronics.co.kr/kr/ir/ir_02.php">재무정보
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </a>
            </li>
            <li><a href="http://www.chemtronics.co.kr/kr/ir/ir_03.php">결산정보
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </a></li>
            <li>
              <a href="http://www.chemtronics.co.kr/kr/ir/ir_04.php">공시정보
                <font-awesome-icon icon="fa-solid fa-angle-right" />
              </a>
            </li>
            <li><a href="http://www.chemtronics.co.kr/kr/ir/ir_05.php">IR 자료실
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <swiper :pagination="{
          type: 'progressbar',
        }" :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
          <swiper-slide>Slide 7</swiper-slide>
          <swiper-slide>Slide 8</swiper-slide>
          <swiper-slide>Slide 9</swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
<style scoped>
#aboutWrap{width: 100%; height: 100vh; display: flex;}
#aboutWrap .left{width: 50%;}
#aboutWrap .right{width: 50%; height: 100%;}
#aboutWrap .right .top{display: flex; width: 100%; height: 50%;}
#aboutWrap .right .top>div{padding: 0 10.5%;}
#aboutWrap .right .top>div ul li a{}
#aboutWrap .right .top .company{width: 50%; color: #222; }
#aboutWrap .right .top .ir{width: 50%; background-color: #ed1c24; color: white;}
#aboutWrap .right .top .ir p{color: white;}
#aboutWrap .right .top .ir ul{}
#aboutWrap .right .top .ir ul li{border-bottom-color: #f1646a; }
#aboutWrap .right .top .ir ul li::before{content: ''; position: absolute; background-color: white;}
#aboutWrap .right .top .ir ul li a{color: white;}
#aboutWrap .right .top .ir ul li a svg{color: #f8a4a7;}
#aboutWrap .right .bottom{height: 50%;}
.swiper-slide:first-child {
  background: url('../assets/img/main_section2_slide_01.jpg') no-repeat center center/100% 100%;
}

.swiper-slide:nth-child(2) {
  background: url('../assets/img/main_section2_slide_02.jpg') no-repeat center center/100% 100%;
}

.swiper-slide:nth-child(3) {
  background: url('../assets/img/main_section2_slide_03.jpg') no-repeat center center/100% 100%;
}

.swiper-slide:last-child {
  background: url('../assets/img/main_section2_slide_04.jpg') no-repeat center center/100% 100%;
}
</style>