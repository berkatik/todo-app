<template src="./TodoList.html"></template>
<style lang="scss" src="./TodoList.scss" scoped></style>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';
import Todo from '../../types';

import TodoItem from '../TodoItem/TodoItem.vue';

@Component({
  components: {
    TodoItem,
  }
})
export default class TodoList extends Vue {

  @Inject() tasks!: Array<Todo>
}

</script>