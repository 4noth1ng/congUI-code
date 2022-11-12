<template>
    <div class="swiper" @mouseleave="startTimer" @mouseenter="stopTimer">
        <ul class="swiper-body">
            <li v-for="(item,index) in list" :key="item.id" class="swiper-item" :class="{activeImg: index === activePic }">
                <a href="#">
                    <img :src="item.imgSrc" alt="">
                </a>
            </li>
        </ul>
        <a href="javascript:;" class="swiper-btn prev" @click="toggle(-1)">&lt;</a>
        <a href="javascript:;" class="swiper-btn next" @click="toggle(1)">&gt;</a>
        <div class="swiper-footer">
            <ul class="swiper-footer-body">
                <li class="swiper-footer-item" v-for="(item, index) in list" :key="item.id" @click="footerNav(index)"
                :class="{ activeFooter: index === activePic }"
                >
                    <a href=""></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'c-swiper',
    props: {
        list: {
            type: Array,
            default: () => []
        },
        duration: {
            type: Number,
            default: 3000
        },
        autoplay: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            activePic:0,
            timer: null
        }
    },
    methods:{
        toggle(step){
            const len = this.list.length
            this.activePic = this.activePic += step
            if (this.activePic < 0) this.activePic = len - 1
            else if (this.activePic === len) this.activePic = 0
        },
        footerNav(index) {
            this.activePic = index
        },
        autoPlayFn(){
            clearInterval(this.timer)
            this.timer = setInterval(() => {
                this.activePic++
                if(this.activePic === this.list.length) this.activePic = 0
            }, this.duration);
        },
        startTimer() {
            if(this.autoplay){
                this.autoPlayFn()
            }
        },
        stopTimer() {
            if(this.timer) {
                clearInterval(this.timer)
            }
        }
    },
    mounted() {
        if(this.autoplay) {
            this.autoPlayFn()
        }
    }
}
</script>

