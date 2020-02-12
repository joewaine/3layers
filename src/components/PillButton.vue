<template>
  <a :class="color" class="pill-button" :href="link" target="_blank">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'PillButton',
    props: {
      color: {
        type: String
      },
      link: {
        type: String
      }
    },
    mounted () {
      switch (this.color) {
        case 'blue':
          break
        case 'white':
          break
      }
    }
  }
</script>

<style scoped lang="scss">
  a {
    cursor: pointer;
    color: $white;
    height: 40px;
    width: 336px;
    text-align: center;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    &:hover {
      text-decoration: none;
    }
    &.blue {
      background-color: $cisco-lt-blue;
    }
    &.dk-blue{
      background-color: $cisco-dk-blue;
    }
    &.white {
      background-color: $white;
      color: $cisco-dk-blue;
    }
    &.white-outline {
      background-color: transparent;
      border: 2px solid $white;
    }
  }
</style>
