<template>
  <div>
    <the-header title="Todo App"></the-header>
    <base-card>
      <add-todo></add-todo>
      <todo-list :todos="todoList"></todo-list>
    </base-card>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';

import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory';

const ADD_TODO = gql`
  mutation addTodo(
    $description: String!
    $id: Int!
    $isDone: Boolean!
  ) {
    insert_todos_one(
      object: {
        id: $id, 
        description: $description, 
        isDone: $isDone
      }
    ) {
      description
      isDone
    }
  }
`;



import Todo from './types';
import TheHeader from './components/layout/TheHeader/TheHeader.vue';
import AddTodo from './components/AddTodo/AddTodo.vue';
import TodoList from './components/TodoList/TodoList.vue';


@Component({
  components: {
    TheHeader,
    AddTodo,
    TodoList
  },
  apollo: {},
})
export default class App extends Vue {
  todoList: Todo[] = [
    {
      id: '1',
      description: 'Test 1...2...3..',
      isDone: false,
    },
    {
      id: '2',
      description: 'Test 1...2...3..4',
      isDone: false,
    },
  ]

  @Provide('tasks') tasks = this.todoList;

  @Provide('addTask')
  addTask(desc: string): void {
    const id =  556;
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

    // ! TODO: Add Content In GraphQL
  }

  @Provide('checkItem')
  async checkItem(id: string) {
    const itemIndex: number = this.todoList.findIndex(item => item.id === id);
    const checkedItem = this.todoList.splice(itemIndex, 1)[0];
    checkedItem.isDone = true;
    this.todoList.push(checkedItem);
    // ! TODO: Update Content In GraphQL
  }

  @Provide('uncheckItem')
  uncheckItem(id: string): void {
    const itemIndex: number = this.todoList.findIndex(item => item.id === id);
    const checkedItem = this.todoList.splice(itemIndex, 1)[0];
    checkedItem.isDone = false;
    this.todoList.unshift(checkedItem);

    // ! TODO: Update Content In GraphQL
  }

  @Provide('updateContent')
  updateContent(id: string, desc: string): void {
    const itemIndex: number = this.todoList.findIndex(item => item.id === id);
    this.todoList[itemIndex].description = desc;

    // ! TODO: Update Content In GraphQL
  }
}

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
  }

</style>
