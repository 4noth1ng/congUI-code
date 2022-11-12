<template>
    <div class="c-card" :style="width? {width: width + 'px'} : {}">
      <div class="c-card-img" :style="imgHeight ? {height: imgHeight + 'px'} : {}">
        <img :src="imgSrc" alt="img">
      </div>
      <div class="c-card-summary" v-if="summary">
        {{summary}}
      </div>
      <div class="c-card-summary" v-else>
        <slot></slot>
      </div>
      <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
  name: 'c-card',
  props: {
    width: {
      type: Number,
      defalut: 0
    },
    imgSrc: {
      type: String,
      defalut: ''
    },
    imgHeight: {
      type: Number,
      defalut: 0
    },
    summary: {
      type: String,
      defalut: ''
    }
  }
}
</script>
