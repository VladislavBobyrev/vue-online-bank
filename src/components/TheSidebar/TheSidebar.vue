<template>
  <div class="sidebar" v-if="sidebar">
    <div class="sidebar-close" @click="close">&times;</div>

    <div class="sidebar-content">
      <p>Добро пожаловать в систему. Здесь вы найдете исчерпывающую информацию о ващих заявках!</p>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()

    const sidebar = computed(() => store.state.sidebar)

    return {
      sidebar,
      close: () => store.commit('closeSidebar')
    }
  }
}
</script>

<style>

</style>