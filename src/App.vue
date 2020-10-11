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
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-card class="px-6">
        <!-- AddTodo -->
              <v-card-title>
                Add New Task
              </v-card-title>
              <v-card-actions>
                <v-text-field label="This needs to be done by deadline..." >
                  <v-icon
                    slot="append"
                    color="green"
                  >
                  mdi-plus
                  </v-icon>
                </v-text-field>
              </v-card-actions>
        <!-- Add Todo End -->
            </v-card>
          </v-col>
        </v-row>

        <!-- TodoList -->
        <v-row>
          <v-col cols="6">
            <v-card class="px-6 pb-10">
              <v-card-title>Tasks</v-card-title>
              <v-list subheader text>
                  <!-- TodoItem -->
                  <v-list-item class="mt-3 grey lighten-5 rounded">
                    <v-list-item-title>Test Task preview!</v-list-item-title>
                    <v-list-item-action>
                      <v-btn elevation="1" text>
                        <v-icon
                          color="green"
                        >
                          mdi-check
                        </v-icon>
                      </v-btn>
                      <v-btn elevation="1" text>
                        <v-icon
                          color="red"
                        >
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                  <!-- TodoItem End -->
              </v-list>
            </v-card>
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
