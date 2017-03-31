<template>
  <md-dialog @open="reset" ref="new-watcher-dialog">
    <md-dialog-title>Add New Watcher</md-dialog-title>

    <md-dialog-content>
      <p>TODO: Build validation</p>

      <md-input-container>
        <label>Project Name</label>
        <md-input v-model="name" required></md-input>
      </md-input-container>

      <md-input-container>
        <label>Project Source</label>
        <md-input v-model="source" required></md-input>
      </md-input-container>

      <md-input-container>
        <label>Project Destination</label>
        <md-textarea v-model="destination" required></md-textarea>
      </md-input-container>

      <md-input-container>
        <label>Project Group</label>
        <md-select v-model="group_id">
          <md-option v-for="group in $store.state.groups" :value="group.name">{{ group.name }}</md-option>
        </md-select>
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
  name: 'new-watcher-dialog',
  data () {
    return {
      name: '',
      group_id: '',
      source: '',
      destination: '',
      isSubmitting: false,
      errorMessages: {
        name: '',
        group_id: '',
        source: '',
        destination: ''
      }
    }
  },
  computed: mapGetters(['watcherExists']),
  methods: {
    ...mapMutations(['addWatcher']),
    onSubmit () {
      if (!this.name.length || !this.source.length || !this.destination.length) {
        return
      }

      this.isSubmitting = true

      this.addWatcher({
        name: this.name,
        group_id: this.group_id,
        source: this.source,
        destination: this.destination
      })

      this.closeDialog()
    },

    reset () {
      this.name = ''
      this.group = ''
      this.source = ''
      this.destination = ''
      this.isSubmitting = false
    },

    closeDialog () {
      this.$refs['new-watcher-dialog'].close()
      this.reset()
    }
  },
  mounted () {
    events.$on('open:dialog:new-watcher-dialog', () => this.$refs['new-watcher-dialog'].open())
  }
}
</script>
