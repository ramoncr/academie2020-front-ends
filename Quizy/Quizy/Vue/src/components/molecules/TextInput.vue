<template>
  <div class="text-input">
    <label :for="id">{{ label }}</label>
    <input
      class="u-full-width"
      type="text"
      :placeholder="placeholder"
      :id="id"
      :value="value"
      v-on:input="updateValue($event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class TextInput extends Vue {
  @Prop() public label!: string;
  @Prop() public id!: string;
  @Prop() public value!: string;

  @Prop() public placeholder!: string;
  @Prop() public name?: string;

  updateValue(newValue: string) {
    this.$emit("input", newValue);
  }
}
</script>

<style lang="scss" scoped>
.text-input {
  margin-bottom: 10px;
}
</style>
