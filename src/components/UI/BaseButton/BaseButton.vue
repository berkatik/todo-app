<template src="./BaseButton.html"></template>
<style lang="scss" src="./BaseButton.scss" scoped></style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseButton extends Vue {
  @Prop() mode!: string;
}
</script>
