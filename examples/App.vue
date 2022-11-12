<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      list: [
        {
          id: 0,
          imgSrc: 'picture1.4c4d0655.png'
        },
        {
          id: 1,
          imgSrc: 'picture2.20a36478.png'
        },
        {
          id: 2,
          imgSrc: 'picture3.15c04f77.png'
        },
      ],
    }
  },
  methods: {
    handle(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }
}
</script>

<style>

</style>
