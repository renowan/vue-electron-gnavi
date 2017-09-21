<template>
  <tr>
    <td width="220">
      {{data.name}} <br>
      業種: {{data.category}}
    </td>
    <td>
      住所: {{data.address}} <br>
      営業時間: <ellipsis-text :text="data.opentime" :num="50"></ellipsis-text> <br>
    </td>
    <td width="80">
      <!-- <a href="javascript:void(0)"><i data-v-b35ab42a="" class="fa fa-bookmark-o"></i></a> | -->
      <a href="javascript:void(0)" @click="goDetail">詳細</a>
    </td>
  </tr>
</template>

<script>
import ellipsisText from '../../components/EllipsisText.vue'

export default {
  name: 'shop-block',
  components: {
    ellipsisText
  },
  computed: {

  },
  props: {
    data: {type: Object}
  },
  data () {
    return {
    }
  },
  methods: {
    goDetail () {
      this.$router.push(`/detail/${this.data.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
