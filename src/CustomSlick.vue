<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    props: ['settings', 'initData'],
    components: {
        VueSlickCarousel
    },
    data() {
        const status = {
            active: 0,
            autoplay: this.settings.autoplay
        }   

        return {
            status,
        }
    },
    methods: {
        initSlick(e) {
            // console.log(this.$refs.slick)
            console.log(this.settings)
        },
        afterChange(i) {
            this.$data.status.active = i
        },
        clickbullet(index) {
            console.log(this.$refs.slick.goTo(index))
        },
        toggleAutoplay() {
            this.$data.status.autoplay = !this.$data.status.autoplay

            if(this.$data.status.autoplay) this.$refs.slick.play()
            else this.$refs.slick.pause() 
        }
    },
}
</script>
<template #prevArrow>
    <div class="slickSlide-wrap">
        <VueSlickCarousel
            ref="slick"
            :settings="settings"
            @init="initSlick"           
            @afterChange="afterChange"
        >
            <div 
                v-for="(item, index) in initData" 
                :key="index" 
                class="slide-item"
            >
                <div>
                    {{ index }}
                </div>
            </div>
        </VueSlickCarousel>
        <ul class="slick-control">
            <li 
                v-for="(item, index) in initData" 
                :key="index" @click="clickbullet(index)" 
                :class="status.active === index ? 'bullet active' : 'bullet'"
            >
             
            </li>
            <li 
                :class="status.autoplay ? 'autoplay-button' : 'autoplay-button disable' "
                @click="toggleAutoplay"
            >
                t
            </li>
        </ul>
    </div>
</template>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.slickSlide-wrap {
    position: relative;
}

.slide-item {
    height: 100px;
    background-color: red;
    color: white;
    font-size: 32px;
}

.slide-item > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.slick-control {
    position: absolute;
    display: flex;
    justify-content: space-between;
    left: 50%;
    transform: translate(-50%);
}

.bullet {
    list-style: none;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: none;
    background-color: #8a8a8a;
    cursor: pointer;
    margin: 0 4px;
}

.bullet.active {
    background-color: #000;
}

.autoplay-button {
    list-style: none;
    width: 10px;
    height: 13px;
    bottom: 4px;
}

.autoplay-button {
    cursor: pointer;
}

.autoplay-button.disable {
    color: red;
}
</style>