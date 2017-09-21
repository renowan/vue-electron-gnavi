<template>
  <div :class="splashClass" v-show="active">
    <div class="splash-title">
      <h1>Gnavi - API</h1>
      <p>Loading...</p>
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'splash',
  props: {
    active: {type: Boolean, default: false},
    backGroundColor: {type: String, default: 'glay'},
    type: {type: String, default: 'app'},
  },
  computed: {
    splashClass () {
      const type = this.type
      let cls = ''
      switch (type) {
        case 'app':
          cls = 'splash'
          break
        case 'page':
          cls = 'splash-page'
          break
        case 'block':
          cls = 'splash-block'
          break
      }

      if (this.backGroundColor === 'white') {
        cls += ' bg-white'
      }
      return cls
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.splash-title {
  // background-color: rgba(0, 128, 0, 0.32);
  margin: 220px auto;
}

.splash-page {
  width: 100%;
  height: 100%;
  padding: 0;
  position: absolute;
  // background-color: #fff;

  .splash-title {
    margin: 25% auto;
  }
}

.splash-block {
  width: 100%;
  height: 100%;
  padding: 150px 0 0;
  position: relative;
  // background-color: #fff;

  .splash-title {
    margin: 0 auto;
    min-height: 400px;
  }
}

.spinner {
  font-size: 11px;
}

.bg-white {
  background-color: #fff;
}
</style>
