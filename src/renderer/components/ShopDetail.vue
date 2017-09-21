<template>
  <div class="container-fluid pr">

    <div class="row mt8">
      <div class="col-xs-8">
        <p>{{data.category}}</p>
        <h3>{{data.name}}</h3>
      </div>
      <div class="col-xs-4 mb16 text-right">

        <a
        :href="data.url"
        target="_blank"
        class="btn btn-default btn-sm">
        <i class="fa fa-info"></i> 店舗詳細
        </a>

        <bmb
        :is-book-mark="isBookMark"
        type="large"
        @on-change-book-mark="onChangeBookMark">
        </bmb>
      </div>
    </div>

    <div class="row mb16">
      <div class="col-xs-12">
        <div class="img-wrapper">
          <img :src="data.image_url.shop_image1" alt="">
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12" v-html="data.pr.pr_long">
      </div>
    </div>

    <table class="table shop-spec mb32">
      <tbody>
        <tr>
          <td class="key">住所</td>
          <td v-html="data.address"></td>
        </tr>
        <tr>
          <td class="key">アクセス</td>
          <td>線路: {{data.access.line}}、駅: {{data.access.station}}、出口: {{data.access.station_exit}}、徒歩: {{data.access.walk}}分</td>
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
          <td>{{data.budget}}円（ランチ：{{data.lunch}}円）</td>
        </tr>
        <tr>
          <td>クレジットカード</td>
          <td>
            <code v-for="cc in creditCard">{{cc}}</code>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import bmb from '@/components/BookMarkButton.vue'

export default {
  name: 'shop-detail',
  components: {
    bmb
  },
  props: {
    data: {type: Object, require: true},
    idList: {type: Object, default: {}}
  },
  computed: {
    creditCard () {
      return this.data.credit_card.split(',')
    },
    isBookMark (){
      const id = this.data.id
      return !!this.idList[id]
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onChangeBookMark (val) {
      this.$emit('on-change-book-mark', {id: this.data.id, value: val})
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-close {

  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 8px;
  z-index: 100;

  .pe-7s-close {
    font-size: 32px;
  }
}

.pr {
  position: relative;
}

.img-wrapper {
  text-align: center;
  background-color: #fff;
  img {
    height: 160px;
  }
}

hr {
  border-color: #bcbdbe;
}

.shop-spec {
  margin-top: 24px;
  margin-bottom: 24px;
  .key {
    width: 140px;
  }
}
</style>
