<template>
  <div>
    <div class="flex justify-between px-[12px] box-border items-center">
      <div class="flex">
        <p class="mr-[1vw]">{{ label }}</p>
        <Icon icon="mingcute:right-fill" class="mt-[1vw]"/>
      </div>
      <Icon icon="ri:more-2-fill" />
    </div>
    <div ref="wrapper" class="flex wrapper">
      <div
        class="flex"
        :style="{ width: `${34 * $slots.default?.length + 2}vw` }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
let bs = null;
export default {
  mounted() {
    bs =  new BScroll(this.$refs.wrapper,{
        scrollY:false,
        scrollX:true,
    });
  },
  updated(){
    bs.refresh();
  },
  props: {
    label: {
      required: true,
      type: true,
    },
  },
};
</script>
