<template src="./TodoItem.html"></template>
<style lang="scss" src="./TodoItem.scss" scoped></style>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TodoItem extends Vue {
  isContentEditable: Boolean = false;  

  @Prop() id!: string;
  @Prop() description!: string;
  @Prop() done!: Boolean;

  get taskButtonMode(): String | null {
    return this.done ? null : 'flat';
  }

  get buttonName(): String {
    return this.done ? 'Uncheck' : 'Check';
  }

  get overlay(): String | null {
    return this.done ? 'overlay' : null;
  }

  @Inject('checkItem') checkItem!: Function;

  @Inject('uncheckItem') uncheckItem!: Function;

  @Inject('updateContent') updateContent!: Function;

  itemCheckClick(): void {
    this.done ? this.uncheckItem(this.id) : this.checkItem(this.id);
  }

  makeContentEditable(): void {
    this.isContentEditable = true;
  }

  saveContent(event: any): void {
    this.isContentEditable = false;
    const newDescription: string = event.target.innerHTML;
    this.updateContent(this.id, newDescription);
  }
}
</script>