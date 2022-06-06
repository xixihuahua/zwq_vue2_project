<template>
  <div>
    <h2>AA余额: {{ money }}</h2>
    <button @click="browerFromB(100)">找B借钱100</button><br />
    <button @click="browerFromC(150)">找C借钱150</button><br />
    <button @click="browerFromAll(200)">找BC借钱200</button><br />
    <button @click="SendInfo">向B表示感谢</button>
    <br />
    <!-- B -->
    <Child1 ref="refB" />
    <br />
    <!-- C -->
    <Child2 ref="refC"/>
  </div>
</template>

<script>
import Child1 from "./Child1";
import Child2 from "./Child2";

export default {
  name: "ChildrenParentTest",
  data() {
    return {
      money: 1000,
    };
  },

  methods: {
    //找儿子借钱
    browerFromB(money) {
      //父组件的数据累加100
      this.money += money;
      this.$refs.refB.money -= money;
    },
    browerFromC(money) {
      //父组件的数据累加150
      this.money += money;
      this.$refs.refC.money -= money;
    },
    browerFromAll(money){
      this.money += 2*money;
      this.$children.forEach(item=>item.money-=money);
      //不建议用枚举获取子组件：因为没办法确定到底是那个子组件
      // this.$children[0].money -=money;

    },
    SendInfo(){
      //在父组件中获取到子组件（数据+方法）
      this.$refs.refB.sayThanks();
    }
  },

  components: {
    Child1,
    Child2,
  },
};
</script>

<style></style>
