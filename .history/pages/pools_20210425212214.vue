<template>
  <div class="page-parent">
    <h1 class="page-title ml-9">{{ $t('pools') }}</h1>
    <p class="page-subtitle ml-9 pl-1">{{ $t('pools_txt') }}</p>

    <div class="mx-9 mt-16">
      <v-data-table
        :headers="dessertHeaders"
        :items="desserts"
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        :search="search"
        item-key="name"
        show-expand
        class="elevation-10"
      >
        <template #top>
          <v-row class="mx-1">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                :label="$t('search')"
              ></v-text-field>
            </v-col>
          </v-row>
        </template>
        <template #expanded-item="{ headers /*item */ }">
          <td :colspan="headers.length">
            <v-row class="my-2 d-flex flex-row">
              <v-col class="d-flex flex-column justify-start" cols="12" md="2">
                <v-btn text color="error">
                  <v-icon>mdi-swap-horizontal-bold</v-icon>
                </v-btn>
                <v-btn text color="error">
                  <v-icon>mdi-information</v-icon>
                </v-btn>
                <v-btn text color="error">
                  <v-icon>mdi-information</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="12" md="5">
                <v-card class="mx-auto" max-width="344" outlined>
                  <v-card-text> Stake </v-card-text>
                  <v-card-actions>
                    <v-btn outlined rounded text> Stake </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="12" md="5">
                <v-card class="mx-auto" max-width="344" outlined>
                  <v-card-text> Stake </v-card-text>
                  <v-card-actions>
                    <v-btn outlined rounded text> Stake </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </td>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      expanded: [],
      singleExpand: false,
      dessertHeaders: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
          class:
            'subtitle-2 font-weight-light light-green--text text--darken-4',
        },
        {
          text: 'Calories',
          value: 'calories',
          class:
            'subtitle-2 font-weight-light light-green--text text--darken-4',
        },
        {
          text: 'Fat (g)',
          value: 'fat',
          class:
            'subtitle-2 font-weight-light light-green--text text--darken-4',
        },
        {
          text: 'Carbs (g)',
          value: 'carbs',
          class:
            'subtitle-2 font-weight-light light-green--text text--darken-4',
        },
        {
          text: 'Protein (g)',
          value: 'protein',
          class:
            'subtitle-2 font-weight-light light-green--text text--darken-4',
        },
        {
          text: 'Iron (%)',
          value: 'iron',
          class:
            'subtitle-2 font-weight-light light-green--text text--darken-4',
        },
        {
          text: '',
          value: 'data-table-expand',
          class:
            'subtitle-2 font-weight-light light-green--text text--darken-4',
        },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    }
  },
}
</script>

<style>
tbody tr:nth-of-type(odd) {
  background-color: #fcfaf5;
}
tbody tr {
  color: #335d2d;
  font-style: normal;
  font-weight: 700;
}
</style>
