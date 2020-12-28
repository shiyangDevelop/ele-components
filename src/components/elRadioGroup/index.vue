<template>
  <div class="el-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'el-radio-group',
  provide () {
    return {
      radioGroup: this
    }
  },
  props: {
    value: String | Number | Boolean,
    size: String,
    disabled: Boolean,
    'text-color': String
  },
  model: {
    event: 'change',
    prop: 'value'
  },
  mounted () {
    this.$on('handlechange', value => {
      this.$emit('change', value)
    })
  }
}
</script>
