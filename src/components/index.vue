<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>radio</h2>
    <div>
      <h4>elRadio</h4>
      <el-radio v-model="sex" label="M">男</el-radio>
      <el-radio v-model="sex" label="F">女</el-radio>
      <h4>elRadioGroup</h4>
      <el-radio-group v-model="bill">
        <el-radio label="M">男</el-radio>
        <el-radio label="F">女</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
import elRadio from './elRadio'
import elRadioGroup from './elRadioGroup'
export default {
  name: 'entry',
  components: { elRadio, elRadioGroup },
  data () {
    return {
      title: 'element',
      sex: 'M',
      bill: 'F'
    }
  },
  watch: {
    bill (v) {
      console.log(v)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  color: var(--primaryText);
  font-weight: normal;
}
</style>
