<template>
  <div class="container-fluid pr">

    <a href="javascript:void(0)" class="btn-close"><i class="pe-7s-close
"></i></a>

    <div class="row">
      <div class="col-xs-12 mt16">
        <p>札幌駅徒歩１分★完全個室46部屋完備</p>
        <h3>産地直送 北海道 札幌駅前店</h3>
      </div>
      <div class="col-xs-12 mb16">
        <button type="button" class="btn btn-default btn-sm">
          <i class="fa fa-info"></i> 店舗詳細
        </button>
        <button type="button" class="btn btn-default btn-sm">
          <i class="fa fa fa-bookmark-o"></i> ブックマーク
        </button>
      </div>
    </div>

    <div class="row mb16">
      <div class="col-xs-12 img-wrapper">
        <img src="https://uds.gnst.jp/rest/img/58ce0raj0000/s_006h.jpg?t=1495693569" alt="">
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        120分飲み放題699円！ <br>
        圧巻の400席完全個室46部屋！宴会最大160名様OK！<br>
        飲放付ご宴会コース2,500円〜<br>
        【札幌駅より徒歩1分】<br><br>

        ■北海道食材が満喫<br>
        　北海道の海鮮浜焼きや炉端料理はもちろん<br>
        　お通しの【まぐろ】は毎月店内で解体ショーを行なっています。<br>
        　店内の巨大生簀ではボタン海老が悠々と泳ぎ<br>
        　生産者直送の新鮮野菜のビュッフェもあります。<br>
      </div>
    </div>

    <hr>

    <div class="row spec-detail">
      <div class="col-xs-12">
        <h5 class="info-lable">住所</h5>
        <p>〒060-0806  北海道札幌市北区北6条西1</p>
      </div>
      <div class="col-xs-12">
        <h5 class="info-lable">営業時間</h5>
        <p>月～日
17:00～24:00
（L.O.23:00、ドリンクL.O.23:30）
※ご予約・お問い合わせのお電話は午後12時より受付しております。
※営業時間外の宴会・パーティ等も承りますので、ぜひお問い合わせください。

月～日・祝前日・祝日
ランチ　11:00～14:30
（L.O.14:00）</p>
      </div>
      <div class="col-xs-12">
        <h5 class="info-lable">平均予算</h5>
        <p>
          3,500円（通常平均）<br>
          3,500円（宴会平均）<br>
          700円（ランチ平均）<br>
        </p>
      </div>
      <div class="col-xs-12">
        <h5 class="info-lable">クレジットカード</h5>
        <p>VISAMasterCardUCダイナースクラブアメリカン・エキスプレスJCBアプラスセゾン銀聯MUFG</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'shop-detail',
  props: {

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

.spec-detail {
  font-size: 11px;
  .info-lable {
    font-size: 11px;
    font-weight: 600;
  }
}
</style>
