<template>
  <div>

    <side-menu></side-menu>

    <div id="content-wrapper" class="clearfix">

      <splash :active="true" type="block" v-if="isPageLoading"></splash>

      <div class="no-result" v-else-if="app.total_hit_count === 0">検索結果なし</div>

      <div class="content" v-else>

        <div class="row" v-if="app.listMode === 0">
          <shop-block
          v-for="item in searchResult"
          :data="item"
          :id-list="idList"
           @on-change-book-mark="onChangeBookMark"
           @go-detail="goDetail">
          </shop-block>
        </div>

        <div class="row" v-else>
          <table class="table fs12">
            <thead>
              <tr>
                <td>店名</td>
                <td>情報</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
              <shop-list
              v-for="item in searchResult"
              :data="item">
              </shop-list>
            </tbody>
          </table>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import shopBlock from './ShopBlock'
import shopList from './ShopList'
import sideMenu from './SideMenu'
import splash from '../../components/Splash'

// https://uds.gnst.jp/rest/img/58ce0raj0000/s_00aq.jpg?t=1495693569
export default {
  name: 'result-view',
  components: {
    shopBlock,
    shopList,
    sideMenu,
    splash
  },
  computed: Object.assign({},
    mapGetters({
      app: 'app',
      isPageLoading: 'isPageLoading',
      searchResult: 'searchResult',
      idList: 'bmk/idList',
    }),
    {
      isBlockLoading () {
        return this.app.isBlockLoading
      },
      isPageLoading () {
        return this.app.isPageLoading
      },
      myStyle () {
        return {
          'background-image': 'url(https://uds.gnst.jp/rest/img/58ce0raj0000/s_00aq.jpg?t=1495693569)'
        }
      }
    }
  ),
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    onChangeBookMark (val) {
      if (val.value) {
        this.$store.dispatch('bmk/add', val.id)
      } else {
        this.$store.dispatch('bmk/delete', val.id)
      }
    },
    goDetail (id) {
      this.$store.dispatch('onChangeDetailIndex', id)
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style lang="scss" scope>
#menu {
  top: 56px;
}



#content-wrapper {
  position: relative;
  margin: 0 0 0 180px;
}

.no-result {
  width: 65%;
  text-align: center;
  font-size: 20px;
  margin: 100px auto;
  overflow: hidden;
  border: 2px solid #e4e5e7;
  background-color: #f7f9fa;
  padding: 84px 44px 80px;
  color: #acaeb0;
  font-weight: 500;
}



</style>
