<template>
<h4 v-if="requests.length === 0" class="text-center">Заявок пока нет</h4>
  <table v-else class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>ФИО</th>
        <th>Телефон</th>
        <th>Сумма</th>
        <th>статус</th>
        <th>Действие</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(r, idx) in requests" :key="r.idx">
        <td>{{idx + 1}}</td>
        <td>{{r.fio}}</td>
        <td>{{r.phone}}</td>
        <td>{{currensy(r.amount)}}</td>
        <td>
          <app-status :type="r.status"/>
        </td>
        <td>
          <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: r.id}}">
            <button class="btn" @click="navigate">Открыть</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {currensy} from '../../utils/currensy';
import AppStatus from '../ui/AppStatus.vue';

export default {
props: ['requests'],
components: {AppStatus},
setup() {

  return {
   currensy
  }
},

}
</script>

<style>

</style>