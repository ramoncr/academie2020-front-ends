<template>
  <div class="container">
    <div class="row">
      <div class="twelve columns">
        <div class="about">
          <h1>This is an about page</h1>
          <p>{{ message }}</p>
          <p>{{ message2 }}</p>
          <p>{{ message3() }}</p>

          <p>{{ message | localCapitalize }}</p>
          <p>{{ message | capitalize }}</p>
          <p>{{ message | capitalize | lower }}</p>
          <p>{{ message | capitalizeLetterAt(7) }}</p>

          <input v-color-letter v-model="inputMessage" />
          <!-- {{ inputMessage }} -->

          <input v-color-letter />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { Component } from "vue-property-decorator";

// export default {
//   name: "About",
//   computed: {
//     ...mapGetters(["message"])
//   },
//   methods: {
//     testMethod: function() {
//       this.
//     }
//   }
// };

// export default Vue.component("About", {
//   computed: {
//     ...mapGetters(["message"])
//   }
// });

// export default Vue.extend({
//   computed: {
//     ...mapGetters(["message"])
//   }
// });

@Component({
  computed: {
    ...mapGetters(["message"])
  },
  filters: {
    localCapitalize(value: string) {
      return value.toUpperCase();
    },
    capitalizeLetterAt(value: string, index: number) {
      return (
        value.substring(0, index) +
        value.substring(index, index + 1).toUpperCase() +
        value.substring(index + 1, value.length)
      );
    }
  }
})
export default class About extends Vue {
  public message!: string;
  public inputMessage = "";

  public get message2(): string {
    console.log("Triggered 2", Date.now());
    return "Second message";
  }

  public message3(): string {
    console.log("Triggered 3", Date.now());
    return "Third Message";
  }
}
</script>
