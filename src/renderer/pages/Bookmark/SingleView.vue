<template>
  <div class="content pn clearfix">

    <div class="float-block">

      <shop-detail v-if="data" :data="data"></shop-detail>

      <!-- <result-list></result-list> -->

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import shopDetail from '../../components/ShopDetail'
import resultList from './ResultList'
import splash from '../../components/Splash'

export default {
  name: 'single-view',
  components: {
    shopDetail,
    resultList,
    splash
  },
  computed: Object.assign({},
    mapGetters({
      app: 'app',
      searchResult: 'searchResult',
    }),
    {

    }
  ),
  props: {

  },
  data () {
    return {
      id: null,
      data: null
    }
  },
  created () {
    this.data = this.searchResult[0]
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
