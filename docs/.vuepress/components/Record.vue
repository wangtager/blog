<template>
  <div class="keep-on-record">
      <span>MIT Licensed | 版权所有Copyright © 2020 Tager. 备案号： </span>  <a href="http://www.beian.miit.gov.cn/" target="_blank">粤ICP备20028651号</a>
      <div style="width:300px;margin:0 auto; padding:20px 0;">
		 		<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502005276" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
         <img src="/back.png" style="float:left;"/>
         <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">粤公网安备 44030502005276号</p></a>
		 	</div>
  </div>
</template>

<script>
export default {
  name: 'Record',
  data(){
    return {
      pv_count: ''
    }
  },
  mounted(){
  },
  methods: {
  }
}
</script>

<style>
.keep-on-record{
    text-align: center;
}
.keep-on-record span{
    color: #4e6e8e;
}
</style>