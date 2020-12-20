export default {
  methods: {
    dispatch (componentName, eventName, value) {
      let parent = this.$parent
      while (parent) {
        if (parent === this.$root) {
          return
        } else if (parent.$options.name === componentName) {
          parent.$emit(eventName, value)
          return
        } else {
          parent = parent.$parent || this.$root
        }
      }
    }
  }
}
