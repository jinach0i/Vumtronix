<template>
    <div id="recruitWrap">
        <div class="left">
            <div>
                <h3>Who we are?</h3>
                <p>열정과 도전으로 미래를 창조하는 <b>Global No.1</b> 기업, <b>Chemtronics</b></p>
            </div>
            <div class="contents">
                <ul>
                    <li>
                        <a href="#">
                            <span>인사제도</span>
                        <font-awesome-icon icon="fa-solid fa-angle-right" />
                        </a>
                    </li>
                    <li><a href="#">
                        <span>직무소개</span>
                        <font-awesome-icon icon="fa-solid fa-angle-right" /></a></li>
                    <li><a href="#">
                        <span>채용공고</span>
                        <font-awesome-icon icon="fa-solid fa-angle-right" /></a></li>
                    <button class="btn1">
                        <strong>입사지원서 다운로드</strong>
                        <font-awesome-icon icon="fa-solid fa-download" />
                    </button>
                </ul>
            </div>
        </div>
        <div class="right">
            <div class="bg"></div>
            <img src="../assets/img/main_recruit_txt_img.png" alt="banner text">
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
    #recruitWrap{display: flex; width: 100%; height: 100vh;}
    .left{}
    .left .contents{}
    .left .contents ul{}
    .left .contents ul li{border-bottom: 1px solid #e5e5e5;
    margin-top: 12px; position: relative;}
    .left .contents ul li a{color: #888; display: flex; align-items: center; justify-content: space-between; font-size: 16px; letter-spacing: -.5px;}
    .left .contents ul li a span{
    }
    .right{width: 50%;}
    .right .bg{background: url('../assets/img/main_recruit_img.jpg') no-repeat 50% 50%; width: 100%; height: 100%;}
    .right img{width: 100%;}
</style>