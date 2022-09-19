<template>
  <div style="background: #ccc; height: 50px;">
    <h3>C: 有存款: {{money}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Child2',
  data () {
    return {
      money: 20000
    }
  },

  methods: {
    
  }
}
</script>
