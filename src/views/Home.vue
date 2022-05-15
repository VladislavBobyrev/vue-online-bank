<template>
<app-loder v-if="loading"/>
  <app-page title="Список заявок" v-else>
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>

    <request-filter v-model="filter"/>

    <request-table :requests="requests"/>


    <teleport to="body">
      <app-modal v-if="modal" title="Создать заявку" @close="modal= falsed">
        <request-modal @created="modal = false"/>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import {onMounted, watch} from 'vue'
import AppPage from '../components/ui/AppPage.vue';
import AppModal from '../components/ui/AppModal.vue';
import RequestTable from '../components/Requests/RequestTable.vue';
import RequestModal from '../components/Requests/RequestModal.vue';
import { ref, computed } from '@vue/reactivity';
import { useStore} from 'vuex';
import AppLoder from '../components/ui/AppLoder.vue';
import RequestFilter from '../components/Requests/RequestFilter.vue';

export default {
  name: 'Home',
  components: { AppPage, RequestTable, AppModal, RequestModal, AppLoder, RequestFilter },
  setup() {
    const modal = ref(false)
    const loading = ref(false)
    const filter = ref({})
  
    watch(filter,(val) => {
        console.log(val)
    })
    onMounted(async () => {
      loading.value = true
        await store.dispatch('request/load')
        loading.value = false
    })
    const store = useStore()
    const requests = computed(() => store.getters['request/requests']
      .filter(request => {
          if(filter.value.name){
            return request.fio.includes(filter.value.name)
          }
          return request
      })
      .filter(request => {
        if(filter.value.status){
          return  filter.value.status === request.status
        }
        return request
      })
    )
    return{
      modal,
      requests,
      filter,
    }
  }
}
</script>
