<template>
  <div id="app">
    <ul v-if="!$store.state.scene">
      <li>菜单一</li>
      <li>菜单二</li>
      <li>菜单三</li>
      <li>菜单四</li>
      <li>菜单五</li>
    </ul>
    <div v-if="$store.state.scene" class="mobile">
      <p>logo</p>
      <p>图片</p>
    </div>
  </div>
</template>
<script>
  export default {
      mounted() {
          console.log(11111,this.$store.state.scene)
      }
  }
</script>
<style lang="less">
  @import "style/font.css";
  @import "style/reset.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  ul{
    display: flex;
    width:100%;
    align-items: center;
    li{
      font-size: 0.18rem;
      padding: 0 0.3rem;
      background: red;
      margin:0 0.2rem;
    }
  }
  .mobile{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    p{
      width:4rem;
      height: 2rem;
      background: blue;
      color: yellow;
      font-size: 1rem;
      line-height: 2rem;
      &:nth-of-type(1) {
        margin-left: 1rem;
      }
      &:nth-of-type(2) {
        margin-right:1rem;
      }
    }
  }
</style>
