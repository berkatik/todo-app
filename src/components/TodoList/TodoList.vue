<template src="./TodoList.html"></template>
<style lang="scss" src="./TodoList.scss" scoped></style>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';
import Todo from '../../types';

import TODOS from '../../graphql/Todos';
import TodoItem from '../TodoItem/TodoItem.vue';

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