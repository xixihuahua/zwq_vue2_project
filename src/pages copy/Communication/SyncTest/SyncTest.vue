<template>
  <div>
    姓名：{{ name }}
    <h2>不使用sync修改符</h2>
    <Child :name="name" @update:name="name = $event"></Child>
    <h2>使用sync修改符</h2>
    <Child :name.sync="name"></Child>
  </div>
</template>

<script type="text/ecmascript-6">
import Child from './Child.vue'
export default {
  name: 'SyncTest',
  data() {
    return {
      name: 'xixihuahua'
    }
  },
  components: {
    Child,
  }
}
</script>
