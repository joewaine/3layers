<template>
  <a :href="link" :target="t" v-html="txt"></a>
</template>

<script>
  export default {
    name: 'HyperLink',
    props: {
      link: {
        type: String
      },
      text: {
        type: String
      },
      target: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      t () {
        return (this.target) ? '_blank' : '_self'
      },
      txt () {
        return String(this.text).trim()
      }
    }
  }
</script>
