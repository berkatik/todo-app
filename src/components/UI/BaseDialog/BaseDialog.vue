<template src="./BaseDialog.html"></template>
<style lang="scss" src="./BaseDialog.scss" scoped></style>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseDialog extends Vue {
  @Prop({ required: true }) title!: string;

  @Emit()
  close(): void {
    this.$emit('close');
  }
}
</script>