<template>
  <div class="el-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'el-checkbox-group',
  provide () {
    return {
      radioGroup: this
    }
  },
  props: {
    value: Array,
    size: String,
    disabled: Boolean,
    'text-color': String
  },
  model: {
    event: 'change',
    prop: 'value'
  },
  mounted () {
    this.$on('handlechange', (label, value) => {
      let checkList = [...this.value]
      if (checkList.includes(label) && !value) {
        checkList.splice(checkList.indexOf(label), 1)
        this.$emit('change', checkList)
      } else {
        checkList.push(label)
        this.$emit('change', checkList)
      }
    })
  }
}
</script>
