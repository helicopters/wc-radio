<style>
body {
  padding:20px;
}
</style>
<template>
  <div id="aap">
    

      <wc-radio v-model="value.isChecked" v-for="(value, key) in list" :key="key" :data="list" item="isChecked" active="red" :disabled="true">
        {{value.name}}
      </wc-radio>

      {{list}}
      <input type="radio">
 <!--      <wc-radio name="x" v-model="test2" :label="2">
        选项2
      </wc-radio>
 -->



  
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: false,
        list: [{
          name: 'david',
          isChecked: true
        },{
          name: 'jack',
          isChecked: false
        }]
      }
    },
    methods: {
      // hello (v) {
      //   console.log(1,v);
      // },
      xx (v) {
        console.log(123,v)
        this.abc = v;
      }
    }
  }
</script>