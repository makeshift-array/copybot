<template>
  <div>
    <md-toolbar class="md-dense">
      <h2 class="md-title">CopyBot</h2>

      <md-button class="md-icon-button">
        <md-icon>sync</md-icon>
        <md-tooltip md-direction="bottom">Sync All</md-tooltip>
      </md-button>

      <md-button class="md-icon-button" @click.native="openDialog('new-group-dialog')">
        <md-icon>layers</md-icon>
        <md-tooltip md-direction="bottom">New Group</md-tooltip>
      </md-button>

      <md-button class="md-icon-button" @click.native="openDialog('new-watcher-dialog')">
        <md-icon>create_new_folder</md-icon>
        <md-tooltip md-direction="bottom">New Watcher</md-tooltip>
      </md-button>
    </md-toolbar>
  </div>
</template>

<script>
import events from '../events'

export default {
  name: 'header',
  methods: {
    openDialog (name) {
      events.$emit(`open:dialog:${name}`)
    },
    closeDialog (name) {
      events.$emit(`open:dialog:${name}`)
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.md-title {
  flex: 1;
}
</style>
