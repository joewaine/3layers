<template>
<div>
      <footer class="dk-blue-background">
        <div class="container">
          <ul>
            <li>
              <a href="">Contacts</a>
            </li>
            <li>
              <a href="">Feedback</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Site Map</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy Statement</a>
            </li>          
            <li>
              <a href="">Cookies</a>
            </li>
            <li>
              <a href="">Trademarks</a>
            </li>
          </ul>
        </div>
      </footer>
</div>
</template>



<script>
  export default {


  }
</script>

<style lang="scss">
footer{
  min-height: 48px;
  &.dk-blue-background{
        background-color: $cisco-dk-blue;
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
    ul{
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }

  li{
      display: inline-block;
      margin-right: 20px;
      margin-bottom: 5px;
    a{
        margin-bottom: 0;
        color: white !important;
        font-size: 14px;
      }
  }
}
</style>