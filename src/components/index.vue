<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>radio</h2>
    <div>
      <h4>elRadio</h4>
      <el-radio v-model="sex" label="M">男</el-radio>
      <el-radio v-model="sex" label="F">女</el-radio>
      <h4>elRadioGroup</h4>
      <el-radio-group v-model="bill" @change="changeFn">
        <el-radio label="M">男</el-radio>
        <el-radio label="F">女</el-radio>
      </el-radio-group>
    </div>
    <h2>checkbox</h2>
    <div>
      <h4>elCheckbox</h4>
      <div>
        是否全选
        <el-checkbox v-model="checkData">全选</el-checkbox>
      </div>
      <div>
        地名
        <el-checkbox-group v-model="checkDataList">
          <el-checkbox label="BJ">北京</el-checkbox>
          <el-checkbox label="SH">上海</el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
import elRadio from './elRadio'
import elRadioGroup from './elRadioGroup'
import elCheckbox from './elCheckbox'
import elCheckboxGroup from './elCheckboxGroup'
export default {
  name: 'entry',
  components: { elRadio, elRadioGroup, elCheckbox, elCheckboxGroup },
  data () {
    return {
      title: 'element',
      sex: 'M',
      bill: 'F',
      checkData: false,
      checkDataList: []
    }
  },
  watch: {
    checkData (v) {
      console.log(v)
    }
  },
  methods: {
    changeFn (val) {
      console.log(val)
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
