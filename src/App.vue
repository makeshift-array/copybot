<template>
  <div id="app">
    <app-header></app-header>
    <md-tabs class="md-transparent">
      <md-tab md-icon="layers">
        <groups></groups>
      </md-tab>

      <md-tab md-icon="create_new_folder">
        <watchers></watchers>
      </md-tab>
    </md-tabs>

    <new-group-dialog></new-group-dialog>
    <new-watcher-dialog></new-watcher-dialog>
  </div>
</template>

<script>
import Header from './components/Header'
import Groups from './components/groups/Groups'
import Watchers from './components/watchers/Watchers'
import NewGroupDialog from './components/dialogs/NewGroupDialog'
import NewWatcherDialog from './components/dialogs/NewWatcherDialog'

import fs from 'fs'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    Groups,
    Watchers,
    NewGroupDialog,
    NewWatcherDialog
  },
  data () {
    return {
      modalOpen: false
    }
  }
}
</script>

<style scoped>
</style>
