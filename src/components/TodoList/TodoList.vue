<template src="./TodoList.html"></template>
<style lang="scss" src="./TodoList.scss" scoped></style>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';
import Todo from '../../types';

import gql from 'graphql-tag';

import TodoItem from '../TodoItem/TodoItem.vue';

const TODOS = gql`
  query todos {
    todos(order_by: {isDone: asc}) {
      id
      description
      isDone
    }
  }
`;

@Component({
  components: {
    TodoItem,
  },
  apollo: {
    todos: {
      query: TODOS
    }
  }
})
export default class TodoList extends Vue {
  todos: Todo[] = [] ;
}

</script>