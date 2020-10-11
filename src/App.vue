<template>
  <!-- <div>
    <the-header title="Todo App"></the-header>
    <base-card>
      <add-todo></add-todo>
      <todo-list></todo-list>
    </base-card>
  </div> -->

  <v-app>
    <v-main class="teal lighten-3">
      <the-header title="Todo App"></the-header>
      <v-container>
        
        <!-- AddTodo -->
        <v-row>
          <v-col cols="6">
            <add-todo></add-todo>
          </v-col>
        </v-row>
        <!-- Add Todo End -->

        <!-- TodoList -->
        <v-row>
          <v-col cols="6">
            <todo-list></todo-list>
          </v-col>
        </v-row>
        <!-- TodoList End -->

      </v-container>
    </v-main>
  </v-app>
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

  div {
    margin: auto;
  }

</style>
