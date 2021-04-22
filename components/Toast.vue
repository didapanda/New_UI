<template>
  <div>
    <v-snackbar
      :timeout="3000"
      :value="toast.status === 'success'"
      absolute
      top
      color="success"
      right
      @input="closeSnackbar"
    >
      {{ toast.message }}
    </v-snackbar>
    <v-snackbar
      :timeout="3000"
      :value="toast.status === 'error'"
      absolute
      top
      color="red"
      right
      @input="closeSnackbar"
    >
      {{ toast.message }}
    </v-snackbar>
    <v-snackbar
      :timeout="3000"
      :value="toast.status === 'info'"
      absolute
      top
      color="info"
      right
      @input="closeSnackbar"
    >
      {{ toast.message }}
    </v-snackbar>
    <v-snackbar
      :timeout="3000"
      :value="toast.status === 'warning'"
      absolute
      top
      color="warning"
      right
      @input="closeSnackbar"
    >
      {{ toast.message }}
    </v-snackbar>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      show: false,
    }
  },
  computed: {
    ...mapState(['toast']),
  },
  methods: {
    ...mapMutations(['setToast']),
    closeSnackbar() {
      this.setToast({
        status: '',
        message: '',
      })
    },
  },
}
</script>
