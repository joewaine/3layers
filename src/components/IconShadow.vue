<template>
  <svg width="82px" height="40px" viewBox="0 0 82 40">
    <defs>
      <filter x="-23%" y="-105%" width="146%" height="311%" filterUnits="objectBoundingBox" id="shadow-filter">
        <feGaussianBlur stdDeviation="5" in="SourceGraphic"></feGaussianBlur>
      </filter>
    </defs>
    <g id="shadow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.74">
      <path
        d="M41,27.3381295 C53.9878134,27.3381295 65.7460717,24.8920863 76.2747748,20 C65.7460717,15.1079137 53.9878134,12.6618705 41,12.6618705 C28.0121866,12.6618705 16.2539283,15.1079137 5.72522523,20 C16.2539283,24.8920863 28.0121866,27.3381295 41,27.3381295 Z"
        stroke="#979797" fill="#000000" fill-rule="nonzero" filter="url(#shadow-filter)"></path>
    </g>
  </svg>
</template>

<script>
  export default {
    name: 'IconShadow'
  }
</script>

<style scoped>

</style>
