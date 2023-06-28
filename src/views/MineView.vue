<template>
  <div class="w-screen h-screen">
    <div class="bg-orange-300 text-[80px] leading-[300px]">MineView</div>
    <button v-on:click="f1($event)" v-on:mouseleave="f2">click1</button>
    <input
      type="text"
      class="border-[1px]"
      placeholder="测试"
      :value="value"
      @input="(e) => (value = e.target.value)"
    />
    <input
      type="text"
      class="border-[1px]"
      placeholder="测试"
      v-model="value"
    />
  </div>
  <!-- <h1 class="active">MineView</h1> -->
</template>
<script>
export default {
  name: 'Mine',
  data() {
    return { href: '#IndexView', id: 'anchor', value: '' };
  },
  methods: {
    inputHandler(e) {
      this.value = e.target.value;
    },
    f1(e) {
      console.log(e);
    },
    f2(e) {
      console.log(e);
    },
  },
  created() {
    window.vm = this;
  },
};
</script>
<style></style>
