<style lang="less" scoped>
.wc-radio {
  display: flex;
  align-items:center;
}
.wc-radio input {
  opacity: 0;
  z-index: 2;
  margin-left: -13px;
}
/* 外面的圈圈 */
.wc-radio .un-choose {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #3498db;
  margin-right: 5px;
  text-align: center;
}
.wc-radio .choose {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #3498db;
  margin-right: 5px;
  text-align: center;
  span {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    top: 50%;
    left: 50%;
    margin-top: -4px;
    margin-left: -4px;
    border-radius: 50%;
    opacity: 1;
    transition: color 0.3s ease-out;
    background-color: #3498db;    
  }  
}
.disabled {
  color: rgba(162, 162, 162, 0.22);
  .choose, .un-choose {
    border-color: rgba(162, 162, 162, 0.12) !important;
    cursor: not-allowed;    
  }
  .choose {
    span {
      background-color: rgba(162, 162, 162, 0.12)!important;
    }
  }
}
</style>
<template>
  <div class="box">
    <label class="wc-radio" @click.stop.prevent="fn"  :class="{'disabled': disabled}">
      　　 <input type="radio" :checked="value" :disabled="disabled">
          <!-- 这个用于实现外面的圆圈 -->
          <span v-show="!value" class="un-choose" :style="{'borderColor': active}"></span>
          <!-- 这个是选中之后的状态 -->
          <div v-show="value" class="choose"  :style="{'borderColor': active}">
            <span :style="{'backgroundColor': active}"></span>
          </div>
          <!-- 容纳文本的玩意 -->
          <slot></slot>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      default: false
    },
    data: {
      default () {
        return []
      }
    },
    item: {
      default: ''
    },
    disabled: {
      default: false
    },
    active: {
      default: ''
    }
  },
  data () {
    return {}
  },
  mounted () {
  },
  methods: {
    fn () {
      /* 如果是disabled 状态, 不允许选择 */
      if (this.disabled) {
        return false;
      }
      let v = !this.value;
      /* 如果 v 为 true, 说明是要选中, 允许执行, 为false表示想要对一个已经选中的值取消选中, 这不被允许*/
      if (v) {
        /* 将所有的先取消选中, 为的是保持始终只有一个被选中的状态 */
        this.data.forEach(item => {
          item[this.item] = false;
        });
        /* 选中状态 */
        this.$emit('input', v);
      } 
    }
  }
}
</script>