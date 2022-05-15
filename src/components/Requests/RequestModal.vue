<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control" :class="{invalid: fError}">
      <label for="">ФИО</label>
      <input type="text" id="fio" v-model="fio" @blur="fBlur">
      <small v-if="fError">{{fError}}</small>
    </div>

    <div class="form-control" :class="{invalid: aError}">
      <label for="">Сумма</label>
      <input type="text" id="amount" v-model="amount" @blur="aError">
      <small v-if="aError">{{aError}}</small>
    </div>

    <div class="form-control" :class="{invalid: pError}">
      <label for="">Телефон</label>
      <input type="text" id="phone" v-model.number="phone" @blur="pBlur">
      <small v-if="pError">{{pError}}</small>
    </div>

    <div class="form-control" >
      <label for="">Статус</label>
     <select name="" id="status" v-model="status">
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
     </select>
    </div>

    <button class="btn primary" :disabled="isSubmitting">Создать</button>
  </form>
</template>

<script>
import { useStore } from 'vuex'

import { useRequestForm } from "../../use/request-form.js"

export default {
 emits:['created'],
 setup(_, {emit}) {
   const store = useStore()

   const submit = async values => {
     console.log(values)
      await store.dispatch('request/create', values)
      emit('created')
   }

   return {
     ...useRequestForm(submit),
   }
 }
}
</script>

<style>

</style>