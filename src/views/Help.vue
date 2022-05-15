<template>
  <app-page back title="Помощь">
    <question-item
      v-for="q in questions"
      :key="q.title"
      :question="q"
    ></question-item>
  </app-page>
</template>

<script>
import AppPage from '../components/ui/AppPage.vue'
import QuestionItem from '../components/question/QuestionItem.vue'

export default {
  components: {AppPage, QuestionItem},
  setup() {
    const questions = [
      {title: 'Что ксть в данной системе?', body: 'Тут есть все для того чтобы смотреть какие заявки существуют также изменять статус и удалять'},
      {title: 'Как работает авторизация?', body: 'С помощью токена FireBase'},
    ]

    return {questions}
  }
}
</script>