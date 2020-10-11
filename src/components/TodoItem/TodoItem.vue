<template src="./TodoItem.html"></template>
<style lang="scss" src="./TodoItem.scss" scoped></style>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';

import CHECK_TODO from '../../graphql/CheckTodo';
import UPDATE_DESC from '../../graphql/UpdateDesc';
import UNCHECK_TODO from '../../graphql/UncheckTodo';
import DELETE_TODO from '../../graphql/DeleteTodo';


@Component({
  apollo: {}
})
export default class TodoItem extends Vue {
  isContentEditable: Boolean = false;  
  enteredDescription: string = '';

  @Prop() id!: number;
  @Prop() description!: string;
  @Prop() isDone!: Boolean;

  get taskButtonMode(): String {
    return this.isDone ? 'orange' : 'green';
  }

  get taskCardMode(): String | null {
    return this.isDone ? 'green lighten-3' : 'grey lighten-5';
  }

  get buttonIcon(): String {
    return this.isDone ? 'mdi-alpha-x' : 'mdi-check';
  }

  get overlay(): String | null {
    return this.isDone ? 'overlay' : null;
  }

  updateContent(id: number, description: string): void {
    this.$apollo.mutate({
      mutation: UPDATE_DESC,
      variables: {
        id,
        description
      },
      refetchQueries: ["todos"]
    });
  }

  checkItem(): void {
    const id: number = this.id;

    this.$apollo.mutate({
      mutation: CHECK_TODO,
      variables: {
        id
      },
      refetchQueries: ["todos"]
    })
  }

  uncheckItem(): void {
    const id: number = this.id;

    this.$apollo.mutate({
      mutation: UNCHECK_TODO,
      variables: {
        id
      },
      refetchQueries: ["todos"]
    })
  }

  itemCheckClick(): void {
    console.log(this);
    this.isDone ? this.uncheckItem() : this.checkItem();
  }

  makeContentEditable(): void {
    this.isContentEditable = true;
  }

  saveContent(event: any): void {
    this.isContentEditable = false;

    if (this.enteredDescription !== '') {
      this.updateContent(this.id, this.enteredDescription);
    } else {
      event.target.innerHTML = this.description;
    } 

  }

  deleteItem(): void {
    const id: number = this.id;

    this.$apollo.mutate({
      mutation: DELETE_TODO,
      variables: {
        id
      },
      refetchQueries: ["todos"]
    })
  }
}
</script>