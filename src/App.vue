<template>
  <div id="app">
    <CustomSlick
      ref="slick"
      :settings="settings"
      :initData="slickData"
    >
    </CustomSlick>
    <div class="youtube-video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/hp5oF2WMfGM?si=rsuoWY4sCI_5mgUy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import CustomSlick from './CustomSlick.vue'

export default {
  name: 'App',
  components: {   
    CustomSlick
  },
  mounted() {
    console.log(this.$refs.slickControl)
  },
  data() {
    const settings = {
      dots: true,
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
