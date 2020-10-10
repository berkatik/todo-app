<template src="./TheHeader.html"></template>
<style lang="scss" src="./TheHeader.scss" scoped></style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TheHeader extends Vue {
  @Prop({ required: true }) title!: string;
}
</script>