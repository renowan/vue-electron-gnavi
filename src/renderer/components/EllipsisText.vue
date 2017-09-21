<template>
  <span>
    {{renderText(text)}}
  </span>
</template>

<script>
export default {
  name: 'ellipsis-text',
  props: {
    text: {type: String, default: ''},
    num: {type: Number, default: 0},
  },
  data () {
    return {
    }
  },
  methods: {
    renderText (t) {
      let txt = t.replace(/<BR>/g, '')

      if (txt.length > this.num) {
        txt = txt.slice(0, this.num) + ' ...'
      }
      return txt
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
