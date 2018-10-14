<template lang="html">
  <div class="">
      <h1 class="red">Hello {{name}}</h1>
      <h1 >性别： {{sex}}</h1>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return {
      name: 'world'
    }
  },
  layout:'default',
  head: {
    title: '首页'
  },
  data() {
    return {
      sex: '男'
    }
  }
}
</script>

<style lang="css">
  .red{
    color: red;
  }

</style>
