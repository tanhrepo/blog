<!--
 * @Author: tanhong
 * @Date: 2021-08-12 13:49:22
 * @LastEditTime: 2021-08-13 10:50:12
 * @LastEditors: tanhong
 * @FilePath: \blog\project\JavaScript\main.vue
-->
<template>
  <div class="main" :style="style">
    <slot />
  </div>
</template>
<script>
export default {
  name: '',
  //参数注入
  props: {
    width: {
      type: String,
      default: '1920',
    },
    height: {
      type: String,
      default: '1080',
    },
  },
  data() {
    return {
      style: {
        width: this.width + 'px',
        height: this.height + 'px',
        transform: 'scale(1) translate(-50%, -50%)',
      },
    };
  },
  mounted() {
    this.setScale();
    window.onresize = this.Debounce(this.setScale, 1000);
  },
  methods: {
    Debounce: (fn, t) => {
      const delay = t || 500;
      let timer;
      return function () {
        const args = arguments;
        if (timer) {
          clearTimeout(timer);
        }
        const context = this;
        timer = setTimeout(() => {
          timer = null;
          fn.apply(context, args);
        }, delay);
      };
    },
    // 获取放大缩小比例
    getScale() {
      const w = window.innerWidth / this.width;
      const h = window.innerHeight / this.height;
      return w < h ? w : h;
    },
    // 设置比例
    setScale() {
      this.style.transform = 'scale(' + this.getScale() + ') translate(-50%, -50%)';
      console.log('千变万化');
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
  background: red;
}
</style>
