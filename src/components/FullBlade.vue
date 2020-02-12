<template>
  <div class="full-blade" :class="background">
<div class="container">
    <div>
      <slot></slot>
    </div>
    <slot name="footnotes"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FullBlade',
    props: {
      background: {
        type: String
      }
    },
    computed: {
      height () {
        return (this.background === 'gray') ? '' : ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .full-blade {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 40px 20px;
    text-align: center;
    .footnotes {
      position: static;
      text-align: left;
      ul {
        margin-top: 40px;
        li {
          margin: 0 0 5px 10px;
          font-size: 12px;
          span {
            margin-left: -12px;
            margin-right: 2px;
          }
        }
      }
    }
    @media (min-width: $tablet) {
      padding: 0;
      .footnotes {
        position: absolute;
        bottom: 20px;
        left: 54px;
        margin-top: 0;
        ul {
          li {
            margin: 0;
          }
        }
      }
    }

    h3 {
      // color: $cisco-lt-blue;
      // @media (min-width: $tablet) {
      //   color: $white
      // }
      color: $white
    }

    p {
      text-align: center;
    }
    * {
      color: $white;
    }
    &.blue {
      background: $cisco-dk-blue url("~@/assets/images/blue-tile.jpg") repeat;
    }
    &.gray {
      background: $cisco-dk-gray;
      background-size: cover;
      justify-content: flex-start;
      padding-top: 50px;
      padding-bottom: 60px;
    }


.container{
  width: 66%;
  margin: 0 auto;
    @media (max-width: $tablet) {
      width: 80%;
    }
    @media (max-width: $mobile) {
      width: 90%;
    }
}

}

a:visited,
a[href]:visited{
color: $white;
}

</style>
