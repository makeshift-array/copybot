<template>
  <md-list class="groups">
    <md-subheader class="md-inset">Groups</md-subheader>
    <group v-for="group in $store.state.groups" :group="group"></group>
  </md-list>
</template>

<script>
import Group from './Group'

export default {
  name: 'group-list',
  components: {
    Group
  }
}
</script>
