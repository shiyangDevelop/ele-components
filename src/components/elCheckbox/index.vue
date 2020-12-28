<template>
  <label class="el-checkbox">
    <span>
      <input type="checkbox" :value="label" :disabled="_isDisabled" :name="name"
        :checked="_isChecked" @change="changeEvent">
    </span>
    <span>
      <slot></slot>
    </span>
  </label>
</template>
<script>
import emitter from '../../mixin/emitter'
export default {
  name: 'el-checkbox',
  inject: {
    checkboxGroup: {
      default: null
    }
  },
  mixins: [emitter],
  props: {
    value: Boolean,
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
        } else if (parent.$options.name !== 'el-checkbox-group') {
          parent = parent.$parent || this.$root
        } else {
          return true
        }
      }
    },
    _isChecked () {
      return this.value || (this.checkGroup && this.checkGroup.value.includes(this.label))
    },
    _isDisabled () {
      return this.disabled || (this.checkGroup && this.checkGroup.disabled)
    }
  },
  methods: {
    changeEvent (event) {
      if (this.isGroup) {
        this.dispatch('el-checkbox-group', 'handlechange', this.label, event.target.checked)
      } else {
        this.$emit('change', event.target.checked)
      }
    }
  }
}
</script>
