<template>
  <div class="text-input">
    <label :for="id">{{ label }}</label>
    <input
      class="u-full-width"
      type="number"
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
export default class NumberInput extends Vue {
  @Prop() public label!: string;
  @Prop() public id!: string;
  @Prop() public value!: number;

  @Prop() public placeholder!: string;
  @Prop() public name?: string;

  updateValue(newValue: string | number) {
    this.$emit("input", Number(newValue));
  }
}
</script>

<style lang="scss" scoped>
.text-input {
  margin-bottom: 10px;
}
</style>
