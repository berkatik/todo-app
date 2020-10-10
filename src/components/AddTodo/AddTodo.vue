<template src="./AddTodo.html"></template>
<style lang="scss" src="./AddTodo.scss" scoped></style>


<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';

@Component
export default class AddTodo extends Vue {
  inputIsInvalid: Boolean = false;

  $refs!: {
    descInput: HTMLInputElement,
  };

  @Inject('addTask') addTask!: Function;

  submitData() {
    const enteredDescription = this.$refs.descInput.value;

    if (enteredDescription.trim() === '') {
      this.inputIsInvalid = true;
      return;
    }

    this.addTask(enteredDescription);
    this.$refs.descInput.value = '';

  }

  confirmError() {
    this.inputIsInvalid = false;
  }
}
</script>
