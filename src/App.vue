<template>
  <div id="app">
    <CustomSlick
      ref="slick"
      :settings="settings"
      :initData="slickData"
    >
    </CustomSlick>
    <div class="youtube-video" ref="youtube">

    </div>
  </div>
</template>

<script>
import CustomSlick from './CustomSlick.vue'
import YoutubeControl from './modules/YoutubePlayer';

export default {
  name: 'App',
  components: {   
    CustomSlick
  },
  mounted() {
    const youtubeEl = this.$refs.youtube;
    const videoId = 'hp5oF2WMfGM';

    const youtubeControl = new YoutubeControl(youtubeEl, videoId);
    youtubeControl.onYouTubeIframeAPIReady();

    console.log('테스트')
  },
  data() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      arrows: false,
    }

    const slickData = [
      {
        img: '',
      },
      {
        img: '',
      },
      {
        img: '',
      },
      {
        img: '',
      },
      {
        img: '',
      },
      {
        img: '',
      },
      {
        img: '',
      },
    ]

    return {
      settings,
      slickData
    }
  }
}
</script>
