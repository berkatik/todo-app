<template>
  <div>
    <the-header title="Todo App"></the-header>
    <base-card>
      <add-todo></add-todo>
      <todo-list></todo-list>
    </base-card>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import { InMemoryCache } from 'apollo-cache-inmemory';

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

  // @Provide('addTask')
  // addTask(desc: string): void {
  //   const id =  Math.floor(Math.random() * 1000000);
  //   const description = desc;
  //   const isDone = false;

  //   this.$apollo.mutate({
  //     mutation: ADD_TODO,
  //     variables: {
  //       id,
  //       description,
  //       isDone
  //     },
  //     refetchQueries: ["todos"]
  //   })
  // }
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
