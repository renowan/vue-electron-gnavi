<template>
  <div class="content pn clearfix">
    <div class="float-block br1">

      <shop-detail v-if="data" :data="data"></shop-detail>

      <!-- <result-list></result-list> -->

    </div>
    <div class="float-block br1">

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
  name: 'split-view',
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
.float-block {
  width: 50%;
  min-height: 550px;
  float: left;
}
.br1 {
  border-right: 1px solid #e4e5e7;
  padding: 16px;
}
</style>
