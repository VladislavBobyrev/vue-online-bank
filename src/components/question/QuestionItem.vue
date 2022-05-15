<template>
  <div class="question" @click="isOpen = !isOpen">
    <div class="qustion-title">{{question.title}}</div>
    <div class="qustion-body" v-if="isOpen">{{question.body}}</div>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  props: ['question'],
  setup() {
  
    return {
      isOpen: ref(false)
    }
  }
}
</script>

<style>

</style>