<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name" v-text="seller.name"></span>
        </div>
        <div class="description" v-text="seller.description + '/' + seller.deliveryTime + '分钟送达 '"></div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="[classMap[seller.supports[0].type]]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports">
        <div class="count" v-text="seller.supports.length + '个'"></div>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  };
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .header
    color: #fff
    background-color: #999
    .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px
      font-size 0
      .avatar
        display: inline-block
        img
          border-radius 2px
      .content
        display inline-block
        vertical-align top
        margin-left 16px
        font-size: 14px
        .title
          margin 2px 0 8px
          .brand
            display: inline-block
            vertical-align top
            width 30px
            height: 18px;
            bg-image('brand')
            background-size 30px 18px
            background-repeat no-repeat
          .name
            margin-left 6px
            font-size 16px
            font-weight bold
            line-height: 18px;
        .description
          font-size 12px
          margin-bottom: 10px;
        .support
          .icon
            display: inline-block
            width 12px
            height 12px
            margin-right 4px
            background-size 12px 12px
            background-repeat no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            font-size 10px
            line-height: 12px
            vertical-align top
      .support-count
        position: absolute

        line-height: 24px
        height 24px
        bottom 18px
        padding 0 8px
        right: 12px
        background-color: rgba(0, 0, 0, .2)
        border-radius 14px
        .count
          display: inline-block
          font-size 10px
          margin-right 2px
        .icon-keyboard_arrow_right
          font-size 10px

</style>
