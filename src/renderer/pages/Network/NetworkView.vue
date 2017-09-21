<template>
  <div>


    <div id="content-wrapper wide">

      <div class="bookmark-tool-bar">
        <div class="row">
          <div class="col-xs-12">
            <div class="pull-left">
              <h3><span class="pe-7s-notebook"></span> Book Mark</h3>
            </div>
            <div class="pull-right">
              <div class="btn-group mt4" role="group" aria-label="...">
                <button type="button" class="btn btn-default"><span class="fa fa-list-alt"></span> シングルビュー</button>
                <button type="button" class="btn btn-default"><span class="fa fa-columns"></span> 比較ビュー</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content pn clearfix">

        <div class="float-block br1">

          <shop-detail></shop-detail>

          <!-- <result-list></result-list> -->

        </div>

        <div class="float-block">
          <splash :active="isBlockLoading" type="block"></splash>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import sideMenu from './SideMenu'
import resultList from './ResultList'
import shopDetail from './ShopDetail'
import splash from '../../components/Splash'

export default {
  name: 'net-work-view',
  components: {
    sideMenu,
    splash,
    resultList,
    shopDetail
  },
  computed: {
  },
  data () {
    return {
      isBlockLoading: true
    }
  },
  created () {

  },
  methods: {
    test1 () {
      this.$store.commit('APP_UPDATE_IS_APP_LOADING', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.bookmark-tool-bar {
  padding: 12px 26px;
  background-color: #eaeaea;
  border-bottom: 1px solid #e4e5e7;
}

.float-block {
  width: 50%;
  min-height: 550px;
  float: left;
}

.br1 {
  border-right: 1px solid #e4e5e7;
}

#content-wrapper {
  &.wide {
    margin: 0;
  }
}


</style>
