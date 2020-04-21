<template>
  <div class="pv_count">浏览量：<span ref="pv_count">{{pv_count}}</span></div>
</template>

<script>
export default {
  name: 'Pv',
  props: ['id'],
  data(){
    return {
      pv_count: ''
    }
  },
  mounted(){
    this.getPv()
  },
  methods: {
    getPv(){
      fetch(`http://wtaog.com:8082/pv?id=${this.id}`).then((response)=> {
        return response.json();
      }).then((myJson)=> {
        this.pv_count = myJson.pv
      })
    }
  }
}
</script>

<style>
.pv_count{
  text-align: right;
}
.pv_count span{
  color: #F25E53;
  font-weight: 700;
}
</style>