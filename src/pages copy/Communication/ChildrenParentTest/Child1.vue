<template>
  <div style="background: #ccc; height: 50px;">
    <h3>B: 有存款: {{money}}</h3>
    <button @click="browerToA(50)">借钱给A</button>
  </div>
</template>

<script>
export default {
  name: 'Child1',
  data () {
    return {
      money: 30000
    }
  },

  methods: {
    sayThanks(){
        console.log('谢谢你，雪中送炭');
    },
    browerToA(money){
       this.money-=money;
       this.$parent.money+=money;
    }
  }
}
</script>
