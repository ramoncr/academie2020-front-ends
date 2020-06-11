<template>
  <div class="container">
    <question />

    <div class="home">
      {{ $store.state.message }}
      <button @click="$store.commit('changeMessage')">Click me</button>
      <button>Don't</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Question from "@/components/Question.vue";

export default {
  name: "Home",
  components: {
    Question
  }
};
</script>
