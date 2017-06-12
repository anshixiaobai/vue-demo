<style lang="scss" scoped>
  @import "../../sass/commit";
  .home {
    .img-list {
      overflow: auto;
      white-space: nowrap;
      div {
        width: 200px;
        height: 100px;
        display: inline-block;
        position: relative;
        overflow: hidden;
        border-radius: 5px;
      }
      div::before {
        content: '';
        position:absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
      }
      div::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        line-height: 100px;
        text-align: center;
        color: white;
        content: '国家';
        position:absolute;
      }

    }
  }

</style>

<template>
  <div class="home" >
    <div @click="add">点击我调用vuex{{count}}</div>
    <div @click="details">
      详情
    </div>
    <div v-img>同一个页面引入同一个指令 相互不影响</div>
    <div v-img>同上 引入了 img </div>
    <input type="text" v-input v-model="message">
    {{message|inputFilter}}
    <br>
    <br>
    <br>
    <div class="img-list">
      <div style="background-image: url('//cdn1.zouke.com/journey/collection/usa.jpg')"></div>
      <div style="background-image: url('//cdn1.zouke.com/journey/collection/east-eur.jpg')"></div>
      <div style="background-image: url('//cdn1.zouke.com/journey/collection/spa-port.jpg')"></div>
      <div style="background-image: url('//cdn1.zouke.com/journey/collection/fyr.jpg')"></div>
      <div style="background-image: url('//cdn1.zouke.com/journey/collection/england.jpg')"></div>
      <div style="background-image: url('//cdn1.zouke.com/journey/collection/germany.jpg')"></div>
      <div style="background-image: url('//cdn1.zouke.com/journey/collection/nor-eur.jpg')"></div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        message:1
      }
    },
    computed: {
      count () {
        return this.$store.state.home.homeNumber;
      }
    },
    methods: {
      add: function(){
        this.$store.commit('countAdd',10);
      },
      details: function(){
        this.$router.push({ name: 'details'})
      }
    }
  }
</script>


