<template src="./AddTodo.html"></template>
<style lang="scss" src="./AddTodo.scss" scoped></style>


<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';
import ADD_TODO from '../../graphql/AddTodo';
import vuetify from './plugins/vuetify';


@Component
export default class AddTodo extends Vue {
  inputIsInvalid: Boolean = false;

  $refs!: {
    descInput: HTMLInputElement,
  };

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

  addTask(desc: string): void {
  const id =  Math.floor(Math.random() * 1000000);
  const description = desc;
  const isDone = false;

  this.$apollo.mutate({
    mutation: ADD_TODO,
    variables: {
      id,
      description,
      isDone
    },
    refetchQueries: ["todos"]
  })
}
}
</script>
