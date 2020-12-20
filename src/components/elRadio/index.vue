<template>
  <label class="el-radio">
    <span>
      <input type="radio" :value="label" :disabled="disabled" :name="name"
        :checked="value === label || radioGroup && radioGroup.value === label" @change="changeEvent">
    </span>
    <span>
      <slot></slot>
    </span>
  </label>
</template>
<script>
import emitter from '../../mixin/emitter'
export default {
  name: 'el-radio',
  inject: {
    radioGroup: {
      default: null
    }
  },
  mixins: [emitter],
  props: {
    value: String | Number | Boolean,
    label: String | Number | Boolean,
    disabled: Boolean,
    border: Boolean,
    size: String, // medium / small / mini
    name: String
  },
  model: {
    event: 'change',
    prop: 'value'
  },
  computed: {
    isGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent === this.$root) {
          return false
        } else if (parent.$options.name !== 'el-radio-group') {
          parent = parent.$parent || this.$root
        } else {
          return true
        }
      }
    }
  },
  methods: {
    changeEvent (event) {
      if (this.isGroup) {
        this.dispatch('el-radio-group', 'handlechange', event.target.value)
      } else {
        this.$emit('change', event.target.value)
      }
    }
  }
}
</script>
