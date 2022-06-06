<template>
  <div style="background: #ccc; height: 50px;">
    <span>修改父组件中的姓名</span>
    <button @click="$emit('update:name',name+'~')">修改</button>
    {{ name }}
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Child',
    props:['name']
  }
</script>
