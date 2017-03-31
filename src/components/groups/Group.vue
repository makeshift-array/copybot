<template>
  <md-list-item class="group">
    <md-icon class="md-accent" @click.native.stop="deleteGroup()">delete</md-icon>

    <span>{{ group.name }}</span>

    <!-- replace with projects -->
    <md-list-expand class="group-watchers">
      <watchers :group="group"></watchers>
    </md-list-expand>

    <!-- move to own file -->
    <md-dialog-confirm
      md-title="Delete?"
      md-content-html="<p>Are you sure you want delete this group?</p>"
      md-ok-text="OK"
      md-cancel-text="Cancel"
      @open="open"
      @close="close"
      ref="confirm">
    </md-dialog-confirm>

  </md-list-item>
</template>

<script>
import Watchers from '../watchers/Watchers'

export default {
  name: 'group',
  props: ['group'],
  components: {
    Watchers
  },
  methods: {
    deleteGroup (ref) {
      this.$refs.confirm.open()
    },
    open () {
      console.log('on open')
    },
    close (type) {
      console.log('on close', type)
    }
  }
}
</script>
