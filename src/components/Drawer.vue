<template>
  <div class="bg-black opacity-20 absolute top-0 left-0 z-50">
    <transition name="slide">
      <div
        v-show="visible"
        class="w-[100%] h-[220px] bg-pink-600 absolute left-0 bottom-0 z-48"
      >
        <div>
          <slot name="header">Header Slot</slot>
        </div>
        <div>
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scroped>
.slide-enter,
.slide-leave-to {
  transform: translateY(110%);
}

.slide-enter-activen,
.slide-leave-active {
  transition: all ease-in-out 0.5s;
}

.slide-enter-to,
.slide-leave {
  transform: translateY(0);
}
</style>
