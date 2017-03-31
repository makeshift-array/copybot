<template>
  <md-dialog @open="reset" ref="new-group-dialog">
    <md-dialog-title>Add New Group</md-dialog-title>

    <md-dialog-content>
      <!-- Groups help maintain endless amounts of projects -->

      <md-input-container :class="{ 'md-input-invalid': hasError }">
        <label>Group Name</label>
        <md-input @keyup.native="hasError = false" @keyup.native.enter="onSubmit" v-model="name" required></md-input>
        <span class="md-error">{{ errorMessage }}</span>
      </md-input-container>
    </md-dialog-content>

    <md-dialog-actions>
      <md-spinner :md-size="20" md-indeterminate class="md-accent" v-if="isSubmitting"></md-spinner>
      <md-button class="md-primary" @click.native="closeDialog">Cancel</md-button>
      <md-button class="md-primary" @click.native="onSubmit">Ok</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import events from '../../events'

export default {
  name: 'new-group-dialog',
  data () {
    return {
      name: '',
      hasError: false,
      isSubmitting: false,
      errorMessage: ''
    }
  },
  computed: mapGetters(['groupExists']),
  methods: {
    ...mapMutations(['addGroup']),
    onSubmit () {
      if (!this.name.length) {
        this.hasError = true
        this.errorMessage = 'A group name is required.'
        return
      }

      this.isSubmitting = true

      if (this.groupExists(this.name)) {
        this.hasError = true
        this.isSubmitting = false
        this.errorMessage = 'That group already exists.'
        return
      }

      this.addGroup({ name: this.name })
      this.closeDialog()
    },

    reset () {
      this.name = ''
      this.hasError = false
      this.isSubmitting = false
      this.errorMessage = ''
    },

    closeDialog () {
      this.$refs['new-group-dialog'].close()
      this.reset()
    }
  },
  mounted () {
    events.$on('open:dialog:new-group-dialog', () => this.$refs['new-group-dialog'].open())
  }
}
</script>

<style scoped>
  .md-spinner {
    margin-right: auto;
  }
</style>
