<template>
  <div class="col-xs-12">
    <div class="hpanel">
      <div class="panel-heading">
        {{data.name}}
        <small> - {{data.category}}</small>
      </div>
      <div class="panel-body float-e-margins clearfix">

        <div class="shop-info">
          <div class="main-txt">
            <ellipsis-text :text="data.pr.pr_short" :num="80">
            </ellipsis-text>
          </div>

          <table class="table shop-spec">
            <tbody>
              <tr>
                <td class="key">住所</td>
                <td>{{data.address}}</td>
              </tr>
              <tr>
                <td>営業時間</td>
                <td v-html="data.opentime"></td>
              </tr>
              <tr>
                <td>営業日</td>
                <td v-html="data.holiday"></td>
              </tr>
              <tr>
                <td>平均予算</td>
                <td>{{data.budget}}</td>
              </tr>
            </tbody>
          </table>

        </div>

        <div class="shop-img">
          <img :src="data.image_url.shop_image1" alt="">
        </div>


      </div>
      <div class="panel-footer text-right">
        <bmb :is-book-mark="isBookMark" @on-change-book-mark="onChangeBookMark"></bmb>
        <button type="button" class="btn btn-primary btn-sm btn-detail" @click="goDetail">
          詳細へ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ellipsisText from '../../components/EllipsisText.vue'
import bmb from '@/components/BookMarkButton.vue'
export default {
  name: 'shop-block',
  components: {
    ellipsisText,
    bmb
  },
  computed: {
    isBookMark (){
      const id = this.data.id
      return !!this.idList[id]
    }
  },
  props: {
    data: {type: Object},
    idList: {type: Object, default: {}}
  },
  data () {
    return {
    }
  },
  methods: {
    goDetail () {
      // this.$router.push(`/detail/${this.data.id}`)
      this.$emit('go-detail', this.data.id)
    },
    onChangeBookMark (val) {
      this.$emit('on-change-book-mark', {id: this.data.id, value: val})
    }
  }
}
</script>

<style lang="scss" scoped>
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.shop-info {
  margin-right: 140px;
  position: relative;
  min-height: 80px;
  font-size: 12px;

  .main-txt {
    margin-bottom: 16px;
    // height: 80px;
  }
  .shop-spec {
    margin-bottom: 0px;
    .key {
      width: 80px;
    }
  }
  .btn-wrapper {
    width: 120px;
    height: 30px;
    .btn-detail {

    }
  }
}

.shop-img {
  position: absolute;
  top: 20px;
  right: 20px;

  img {
    width: 120px;
  }
}

.panel-heading {
  small {
    font-weight: normal;
  }
}

.hpanel .panel-body {
  min-height: 160px;
}
</style>
