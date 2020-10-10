<template src="./TodoItem.html"></template>
<style lang="scss" src="./TodoItem.scss" scoped></style>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';
import gql from 'graphql-tag';

const UPDATE_DESC = gql`
  mutation updateDesc(
    $id: Int!
    $description: String!
  ) {
    update_todos_by_pk(
      pk_columns: {
        id: $id
      }, 
      _set: {
        description: $description
      }
    ) {
      id
    }
  }
`;

const CHECK_TODO = gql`
  mutation checkTodo(
    $id: Int!
  ) {
    update_todos_by_pk(
      pk_columns: {
        id: $id
      }, 
      _set: {
        isDone: true
    }) {
    id
  }
  }
`;


const UNCHECK_TODO = gql`
  mutation uncheckTodo(
    $id: Int!
  ) {
    update_todos_by_pk(
      pk_columns: {
        id: $id
      }, 
      _set: {
        isDone: false
    }) {
    id
  }
  }
`;

const DELETE_TODO = gql`
  mutation deleteTodo(
    $id: Int!
  ) {
    delete_todos_by_pk(
      id: $id
    ) {
      id
    }
  }
`;

@Component({
  apollo: {}
})
export default class TodoItem extends Vue {
  isContentEditable: Boolean = false;  

  @Prop() id!: number;
  @Prop() description!: string;
  @Prop() isDone!: Boolean;

  get taskButtonMode(): String | null {
    return this.isDone ? null : 'flat';
  }

  get buttonName(): String {
    return this.isDone ? 'Uncheck' : 'Check';
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
    const newDescription: string = event.target.innerHTML;
    this.updateContent(this.id, newDescription);
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