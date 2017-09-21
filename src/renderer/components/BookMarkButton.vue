<template>
  <span>
    <button type="button" :class="cls" v-if="type === 'middle'" @click="toggle">
      <i class="fa fa-bookmark-o"></i>
    </button>

    <button type="button" :class="cls" v-if="type === 'large'" @click="toggle">
      <i class="fa fa-bookmark-o"> ブックマーク</i>
    </button>
  </span>
</template>

<script>
export default {
  name: 'book-mark-button',
  props: {
    type: {type: String, default: 'middle'},
    isBookMark: {type: Boolean, default: false},
  },
  computed: {
    cls () {
      const {type, isBookMark} = this
      if (type === 'middle') {
        const btnColor = isBookMark ? 'success' : 'default'
        return `btn btn-${btnColor} btn-sm btn-detail`
      }
      if (type === 'large') {
        const btnColor = isBookMark ? 'success' : 'default'
        return `btn btn-${btnColor} btn-sm btn-detail`
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    toggle () {
      this.$emit('on-change-book-mark', !this.isBookMark)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
