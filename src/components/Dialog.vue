<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Remove
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Remove Item
        </v-card-title>

        <v-card-text>
          Are you sure want to remove task ?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click.prevent="dialog = false"> No </v-btn>
          <v-btn color="primary" text @click.prevent="dialog = false"> Yes </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
  <script>
export default {
  name: "DialogView",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>